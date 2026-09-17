"use client";

import Link from "next/link";
import { ChevronsRight } from "lucide-react";
// Google analytics imports
import { sendGAEvent } from "@next/third-parties/google";
// shadcn-imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegistrationForm from "./ReistrationForm";

type Props = {
  source: string;
};

const RegisterLink = ({ source }: Props) => {
  return (
    <>
      {" "}
      <Dialog>
        <DialogTrigger>
          {" "}
          <button
            // href="https://wa.link/3fb9qh"
            // target="_blank"
            // onClick={() => {
            //   sendGAEvent("event", "register_click", {
            //     link_url: "https://wa.link/3fb9qh",
            //     source,
            //   });
            // }}
            className="flex items-center justify-center gap-1 text-xs bg-primary-blue text-white duration-500 transition hover:bg-primary-blue/80 font-semibold py-2 px-4 rounded-full cursor-pointer"
          >
            Register <ChevronsRight className="mt-1" size={15} />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {" "}
            <DialogTitle>Hello there. 👋</DialogTitle>
            <DialogDescription className="text-sm/relaxed text-gray-300">
              Before we meet this September to break down how to take your
              business from ₦0 to ₦1,000,000, we want to understand where you
              are right now.
              <br /> <br />
              Take a deep breath, relax, and answer honestly.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            <RegistrationForm />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterLink;
