// components/ContactForm.js
'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Label } from '@radix-ui/react-label';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import MapChart from './Map';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle form submission
      toast.success('Thank For Contact Us! ');

      // Reset form
      setFormValues({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="bg-indigo-50" id="contact">
      <div className="bg-indigo-50 mt-10 grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 items-end">
        <div className="bg-white ml-auto p-6 max-w-md border mx-auto my-auto rounded-lg min-w-[300px] md:min-w-[350px]">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="min-w-xl" onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="mt-1 block w-full focus-visible:ring-offset-0 focus-visible:ring-0"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="mt-1 block w-full focus-visible:ring-offset-0 focus-visible:ring-0"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <Label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows="4"
                value={formValues.message}
                onChange={handleChange}
                className="mt-1 block w-full focus-visible:ring-offset-0 focus-visible:ring-0"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
        <div className="relative w-full h-full flex rounded-lg overflow-hidden">
          <MapChart />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
