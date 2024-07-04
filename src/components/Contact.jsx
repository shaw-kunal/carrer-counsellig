// components/ContactForm.js
import React from "react";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="bg-indigo-50">
      <div className="container  bg-indigo-50 mt-10 grid grid-cols-2 items-end py-10">
        <div className="relative w-full max-w-md h-full flex  bg-red-500 rounded-lg overflow-hidden">
            <Image src="/timelinebg.jpg" fill alt="contact us"/>
        </div>
        <div className="p-6 max-w-md  bg-white   rounded-lg shadow-sm float-right">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="min-w-xl">
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
                className="mt-1 block w-full focus-visible:ring-offset-0  focus-visible:ring-0"
              />
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
                className="mt-1 block w-full focus-visible:ring-offset-0  focus-visible:ring-0"
              />
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
                className="mt-1 block w-full focus-visible:ring-offset-0  focus-visible:ring-0"
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
