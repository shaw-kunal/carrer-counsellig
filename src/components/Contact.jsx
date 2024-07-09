// components/ContactForm.js
import React from "react";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import MapChart from "./Map";

const ContactForm = () => {
  return (
    <div className="bg-indigo-50" id="contact">
      <div className=" bg-indigo-50 mt-10 grid grid-rows-2 grid-cols-1  sm:grid-cols-2 sm:grid-rows-1 items-end ">
        <div className=" bg-white  ml-auto p-6 max-w-md border  mx-auto my-auto  rounded-lg  min-w-[300px] md:min-w-[350px] ">
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
        <div className="relative w-full   h-full flex rounded-lg overflow-hidden">
        <MapChart/>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;
