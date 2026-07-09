"use client";

import Link from "next/link";
import { ChevronsRight } from "lucide-react";
// Google analytics imports
import { sendGAEvent } from "@next/third-parties/google";

type Props = {
  source: string;
};

const RegisterLink = ({ source }: Props) => {
  return (
    <Link
      href="https://wa.link/3fb9qh"
      target="_blank"
      onClick={() => {
        sendGAEvent("event", "register_click", {
          link_url: "https://wa.link/3fb9qh",
          source,
        });
      }}
      className="flex items-center justify-center gap-1 text-xs bg-primary-blue text-white duration-500 transition hover:bg-primary-blue/80 font-semibold py-2 px-4 rounded-full cursor-pointer"
    >
      Register <ChevronsRight className="mt-1" size={15} />
    </Link>
  );
};

export default RegisterLink;
