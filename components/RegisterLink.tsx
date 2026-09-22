"use client";

// import Link from "next/link";
import { ChevronsRight } from "lucide-react";
// Google analytics imports
import { sendGAEvent } from "@next/third-parties/google";
// // shadcn-imports
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import RegistrationForm from "./ReistrationForm";

type Props = {
  source: string;
};

const RegisterLink = ({ source }: Props) => {
  const whatsappMessage = encodeURIComponent(`Hii Taifaq,

I'd like to register for September X-Deep where I'll learn how to take my business from N0 - N1, 000, 000 as fast as possible.


My name is`);

  const whatsappUrl = `https://wa.me/2347025120945?text=${whatsappMessage}`;

  return (
    <>
      {" "}
      <button
        type="button"
        onClick={() => {
          sendGAEvent("event", "register_click", {
            link_url: whatsappUrl,
            source,
          });

          window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        }}
        className="flex items-center justify-center gap-1 text-xs bg-primary-blue text-white duration-500 transition hover:bg-primary-blue/80 font-semibold py-2 px-4 rounded-full cursor-pointer"
      >
        Register <ChevronsRight className="mt-1" size={15} />
      </button>
    </>
  );
};

export default RegisterLink;
