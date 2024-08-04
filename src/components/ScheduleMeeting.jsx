'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import EnquiryForm from './EnquiryForm';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'];

const ScheduleMeeting = ({ open, setClose, title }) => {
  return (
    <Sheet open={open} onOpenChange={setClose}>
      <SheetContent
        side={'right'}
        className="bg-slate-100 min-w-full sm:min-w-[75%] lg:min-w-[50%] max-w-[600px] p-2 md:p-4"
      >
        <SheetHeader className="mb-4 text-center">
          <SheetTitle className="text-center">{title}</SheetTitle>
          <SheetDescription className="text-center">
            Please provide the necessary information to help us schedule your
            meeting.
          </SheetDescription>
        </SheetHeader>
        <EnquiryForm setClose={setClose} />
      </SheetContent>
    </Sheet>
  );
};

export default ScheduleMeeting;
