'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ScrollArea } from './ui/scroll-area';

const topStudyAbroadCountries = [
  {
    id: 'US',
    title: 'United States',
    image: '/usa.jpg',
  },
  {
    id: 'UK',
    title: 'United Kingdom',
    image: '/uk.jpg',
  },
  {
    id: 'CA',
    title: 'Canada',
    image: '/canada.jpg',
  },
  {
    id: 'FR',
    title: 'France',
    image: '/france.webp',
  },
  {
    id: 'AU',
    title: 'Australia',
    image: '/australia.jpg',
  },
  {
    id: 'DE',
    title: 'Germany',
    image: '/germany.webp',
  },
  {
    id: 'NL',
    title: 'Netherlands',
    image: '/netherlands.webp',
  },
  {
    id: 'other',
    title: 'Other',
    image: '/other.png',
  },
];

const criteria = [
  { id: 'reputation', label: 'Institution Prestige' },
  { id: 'research', label: 'Research Opportunities' },
  { id: 'value_for_money', label: 'Cost Efficiency' },
  { id: 'program_curriculum', label: 'Course Content' },
  { id: 'international_student_community', label: 'Global Student Network' },
  { id: 'learning', label: 'Educational Quality' },
  { id: 'placements', label: 'Career Placement Support' },
];

const preferedCourses = [
  { id: 1, title: 'Accounting' },
  { id: 2, title: 'Aeronautical Engineering' },
  { id: 3, title: 'Agriculture' },
  { id: 4, title: 'Analytics' },
  { id: 5, title: 'Biomedical Engineering' },
  { id: 6, title: 'Business Administration' },
  { id: 7, title: 'Chemical Engineering' },
  { id: 8, title: 'Civil Engineering' },
  { id: 9, title: 'Computer Engineering' },
  { id: 10, title: 'Economics' },
  { id: 11, title: 'Education and Leadership' },
  { id: 12, title: 'Engineering Sciences' },
  { id: 13, title: 'Environmental Engineering' },
  { id: 14, title: 'Finance' },
  { id: 15, title: 'Geology' },
  { id: 16, title: 'Health Care Management' },
  { id: 17, title: 'Human Resources' },
  { id: 18, title: 'Industrial and Manufacturing Engineering' },
  { id: 19, title: 'Marketing' },
  { id: 20, title: 'Mass Communication' },
  { id: 21, title: 'Mathematics' },
  { id: 22, title: 'Public Administration' },
  { id: 23, title: 'Supply Chain and Logistics' },
  { id: 24, title: 'MBA (Master of Business Administration)' },
  { id: 25, title: 'MSc (Master of Science)' },
  { id: 26, title: 'MFA (Master of Fine Arts)' },
  { id: 27, title: 'MA (Master of Arts)' },
  { id: 28, title: 'MEng (Master of Engineering)' },
  { id: 29, title: 'MD (Doctor of Medicine)' },
  { id: 30, title: 'JD (Juris Doctor)' },
  { id: 31, title: 'PhD (Doctor of Philosophy)' },
  { id: 32, title: 'MPhil (Master of Philosophy)' },
  { id: 33, title: 'MHA (Master of Health Administration)' },
  { id: 34, title: 'MPA (Master of Public Administration)' },
  { id: 35, title: 'Other' },
];

const EnquiryForm = ({ setClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPage, setNoPage] = useState(4);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    age: '',
    highestDegree: '',
    studyCountry: [],
    specification: [],
    factor: [],
  });
  const [message,setMessage] = useState('')
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const validateFirstPage = () => {
    const newErrors = {};
    if (!userInfo.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!userInfo.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!userInfo.phoneNo.trim()) {
      newErrors.phoneNo = 'Phone Number is required';
    }
    if (!userInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!userInfo.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(userInfo.age) || userInfo.age <= 0) {
      newErrors.age = 'Age must be a valid number';
    }
    if (!userInfo.highestDegree) {
      newErrors.highestDegree = 'Highest Degree is required';
    }
    return newErrors;
  };

  const validateSecondPage = () => {
    const newErrors = {};
    if (userInfo.studyCountry.length === 0)
      newErrors.studyCountry = 'Please select atleast one country';
    return newErrors;
  };

  const validateThirdPage = () => {
    let newErrors = {};
    if (userInfo.specification.length === 0)
      newErrors.specification = 'Please select atleast one Speicification';
    return newErrors;
  };

  const validateForthPage = () => {
    let newErrors = {};
    if (userInfo.factor.length < 2) {
      newErrors.factor = 'Please select atleast two preferences';
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (currentPage === 0) newErrors = validateFirstPage();
    if (currentPage === 1) newErrors = validateSecondPage();
    if (currentPage === 2) newErrors = validateThirdPage();
    if (currentPage === 3) newErrros = validateForthPage();
    if (Object.keys(newErrors).length === 0) {
      setCurrentPage(currentPage + 1);
    } else {
      setErrors(newErrors);
      Object.values(newErrors).forEach((error) => toast.error(error));
    }
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    toast.success('Thank You for Contact Us.');
    setClose(false);
    console.log(userInfo);
  };
  return (
    <div className="max-w-md mx-auto p-2 md:p-4 rounded-md border h-[85%] overflow-auto">
      <form className="flex flex-col justify-between h-full w-full">
        <div className="flex-1">
          {currentPage === 0 && (
            <div>
              <div className="mb-4">
                <Label htmlFor="firstName" className="mb-2">
                  First Name:
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="lastName" className="mb-2">
                  Last Name:
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="phoneNo" className="mb-2">
                  Phone Number:
                </Label>
                <Input
                  id="phoneNo"
                  name="phoneNo"
                  value={userInfo.phoneNo}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="mb-2">
                  Email:
                </Label>
                <Input
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="age" className="mb-2">
                  Age:
                </Label>
                <Input
                  id="age"
                  name="age"
                  value={userInfo.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  type="number"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="my-4">
                <Label htmlFor="highestDegree" className="mb-2">
                  Highest Degree:
                </Label>
                <Select
                  onValueChange={(value) =>
                    setUserInfo({ ...userInfo, highestDegree: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your highest qualifications" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Highest qualifications</SelectLabel>
                      <SelectItem value="High School">High School</SelectItem>
                      <SelectItem value="Associate Degree">
                        Associate Degree
                      </SelectItem>
                      <SelectItem value="Bachelor's Degree">
                        Bachelor&apos;s Degree
                      </SelectItem>
                      <SelectItem value="Master's Degree">
                        Master&apos;s Degree
                      </SelectItem>
                      <SelectItem value="Doctorate">Doctorate</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentPage === 1 && (
            <div>
              <h3 className="mt-4 xl:mt-8 scroll-m-20  text-center text-lg xl:text-xl font-semibold tracking-tight">
                Which country do you prefer for your studies?
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 my-2 md:my-4">
                {topStudyAbroadCountries.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full border rounded-md p-3 flex flex-col relative cursor-pointer  ${
                      userInfo.studyCountry.includes(item)
                        ? 'border-foreground/50'
                        : ''
                    }`}
                  >
                    <div className="absolute top-2 right-2">
                      <Checkbox
                        id={item.id}
                        value={item.id}
                        checked={userInfo.studyCountry.includes(item)}
                        className="w-4 h-4 xl:w-5 xl:h-5 text-slate-600"
                        onCheckedChange={(value) => {
                          if (value) {
                            //means include item in selected countrye
                            setUserInfo((prev) => ({
                              ...prev,
                              studyCountry: [...prev.studyCountry, item],
                            }));
                          } else {
                            const preferCountry = userInfo.studyCountry.filter(
                              (country) => country.id !== item.id
                            );
                            setUserInfo((prev) => ({
                              ...prev,
                              studyCountry: preferCountry,
                            }));
                            //remove from  userinfo.country
                          }
                        }}
                      />
                    </div>
                    <label
                      htmlFor={item.id}
                      className="flex gap-2 flex-col items-center"
                    >
                      <div className="relative w-14 h-10 shadow-lg">
                        <Image
                          fill
                          src={item.image}
                          alt={item.title}
                          objectFit="cover"
                        />
                      </div>
                      <span className="text-sm">{item.title}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div>
              <h3 className="mt-2 scroll-m-20  text-center text-lg xl:text-xl font-semibold tracking-tight">
                What areas are you considering for your career?
              </h3>
              <ScrollArea className="h-[400px] md:h-[400px] my-1 md:my-2">
                <div className="flex flex-wrap mt-5">
                  {preferedCourses.map((item) => (
                    <div
                      key={item.id}
                      className={`w-full border rounded-md flex flex-col relative mx-3 mb-4 p-px ${
                        userInfo.factor.some((course) => course.id === item.id)
                          ? 'border-foreground/10'
                          : ''
                      }`}
                    >
                      <div className="absolute top-2 right-2">
                        <Checkbox
                          id={item.id}
                          checked={userInfo.specification.some(
                            (spec) => spec.id === item.id
                          )}
                          className="w-4 h-4 xl:w-5 xl:h-5 text-slate-600"
                          onCheckedChange={(value) => {
                            if (value) {
                              setUserInfo((prev) => ({
                                ...prev,
                                specification: [...prev.specification, item],
                              }));
                            } else {
                              const spec = userInfo.specification.filter(
                                (spec) => spec.id !== item.id
                              );
                              setUserInfo((prev) => ({
                                ...prev,
                                specification: spec,
                              }));
                            }
                          }}
                        />
                      </div>
                      <label
                        htmlFor={item.id}
                        className={`p-2 rounded-sm cursor-pointer text-primary`}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
          {currentPage === 3 && (
            <div>
              <h3 className="mt-8 scroll-m-20  text-center text-lg xl:text-xl font-semibold tracking-tight">
                What factors are most significant to you when deciding on a
                program?
              </h3>
              <div>
                <div className="flex flex-wrap mt-5 ">
                  {criteria.map((item) => (
                    <div
                      key={item.id}
                      className={`w-fix border rounded-md flex flex-col relative mx-3 lg:mx-3 mb-2 lg:mb-4 p-px ${
                        userInfo.factor.some((factor) => factor.id === item.id)
                          ? 'border-foreground/10'
                          : ''
                      }`}
                    >
                      <div className="absolute top-3 right-2 hidden">
                        <Checkbox
                          id={item.id}
                          checked={userInfo.factor.some(
                            (factor) => factor.id === item.id
                          )}
                          className="w-4 h-4 xl:w-5 xl:h-5 text-slate-600"
                          onCheckedChange={(value) => {
                            if (value) {
                              setUserInfo((prev) => ({
                                ...prev,
                                factor: [...prev.factor, item],
                              }));
                            } else {
                              const factor = userInfo.factor.filter(
                                (factor) => factor.id !== item.id
                              );
                              setUserInfo((prev) => ({
                                ...prev,
                                factor: factor,
                              }));
                            }
                          }}
                        />
                      </div>
                      <label
                        htmlFor={item.id}
                        className={`
                        p-2 rounded-sm cursor-pointer text-primary 
                        ${
                          userInfo.factor.some(
                            (factor) => factor.id === item.id
                          )
                            ? 'bg-primary text-white'
                            : 'bg-transparent text-primary'
                        }`}
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 space-between gap-2 md:gap-4 my-2 ">
          <Button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="gap-3"
          >
            <ArrowLeft /> Previous
          </Button>
          {noOfPage - 1 === currentPage ? (
            <Button
              variant="outline"
              className="hover:bg-foreground hover:text-white"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              Next <ArrowRight />
            </Button>
          )}
        </div>
        <textarea name='user_email' value={message} className='hidden'/>

      </form>
    </div>
  );
};

export default EnquiryForm;
