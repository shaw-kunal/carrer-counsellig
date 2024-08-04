'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question:
      'What career options are available based on my skills and interests?',
    answer:
      'Career options depend on your specific skills and interests. You can use career assessment tools or speak with a career counselor to identify the best options for you.',
  },
  {
    question: 'How do I choose the right career path for me?',
    answer:
      'Choosing the right career path involves understanding your interests, strengths, and values. Research different careers, consider job shadowing, and seek advice from professionals in your field of interest.',
  },
  {
    question: 'What are the most in-demand careers in the current job market?',
    answer:
      "In-demand careers often include roles in technology, healthcare, finance, and engineering. Specific trends can vary by location and industry, so it's important to research current market demands.",
  },
  {
    question:
      'What educational qualifications are needed for my desired career?',
    answer:
      'Educational requirements vary by career. Research your desired field to understand the necessary degrees, certifications, and training programs.',
  },
];

const Faq = () => {
  return (
    <div className="container my-5 lg:my-10 px-2 lg:px-2 py-2 " id="faq">
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl my-5 xl:my-8">
        Frequesntly Asked Question
      </h1>{' '}
      <div>
        <Accordion type="single" collapsible>
          {faqs.map((item, i) => (
            <AccordionItem value={`item-${i + 1}`} key={i}>
              <AccordionTrigger className="scroll-m-20  text-lg lg:text-xl font-semibold text-slate-700 tracking-tight hover:no-underline">
                ⭐ {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
