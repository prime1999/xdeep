// next-imports
import Link from "next/link";
import Image from "next/image";
// Google analytics imports
import { sendGAEvent } from "@next/third-parties/google";
// icons-imports
import { ChevronsRight } from "lucide-react";
// images-imports
import logo from "@/public/images/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-3 z-50 w-10/12 md:w-9/12 rounded-[16px] mx-auto h-14 px-4 backdrop-blur-3xl border-b border-white/[0.06]">
      <div className="w-full mx-auto flex items-center justify-between h-full">
        <Image
          src={logo}
          width={80}
          height={80}
          alt="Uprix-logo"
          placeholder="blur"
          className="hidden md:block object-contain"
        />
        <Image
          src={logo}
          width={80}
          height={80}
          alt="Uprix-logo"
          placeholder="blur"
          className="md:hidden object-contain"
        />
        <div>
          <ul className="hidden md:flex gap-8 text-xs font-heading text-gray-400">
            <li className="cursor-pointer hover:text-white transition-colors">
              <a
                href="#the-reality"
                className="text-white/[0.8] hover:text-white transition-colors"
              >
                {" "}
                The Reality
              </a>
            </li>
            <li className="cursor-pointer hover:text-white transition-colors">
              <a
                href="#the-focus"
                className="text-white/[0.8] hover:text-white transition-colors"
              >
                {" "}
                The Focus
              </a>
            </li>
            <li className="cursor-pointer hover:text-white transition-colors">
              <a
                href="#audience"
                className="text-white/[0.8] hover:text-white transition-colors"
              >
                {" "}
                Who is it for
              </a>
            </li>
            <li className="cursor-pointer hover:text-white transition-colors">
              <a
                href="#speaker"
                className="text-white/[0.8] hover:text-white transition-colors"
              >
                {" "}
                Speaker
              </a>
            </li>
            <li className="cursor-pointer hover:text-white transition-colors">
              <a
                href="#schedule"
                className="text-white/[0.8] hover:text-white transition-colors"
              >
                {" "}
                Schedule
              </a>
            </li>
          </ul>
        </div>
        <Link
          href="https://wa.link/8yf5wm"
          target="_blank"
          onClick={() => {
            sendGAEvent("event", "register_click", {
              link_url: "https://wa.link/8yf5wm",
              source: "navbar",
            });
          }}
          className="flex items-center gap-1 text-xs bg-primary-blue text-white duration-500 transition hover:bg-primary-blue/80 font-semibold py-2 px-4 rounded-full cursor-pointer"
        >
          Register <ChevronsRight className="mt-1" size={15} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
