// next-imports
import Image from "next/image";
// images-imports
import logo from "@/public/images/logo.png";
import RegisterLink from "@/components/RegisterLink";

const Navbar = () => {
  return (
    <nav className="fixed top-3 left-0 right-0 z-50">
      <div className="w-10/12 md:w-9/12 rounded-[16px] mx-auto h-14 px-4 backdrop-blur-3xl border-b border-white/[0.06] flex items-center justify-between">
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
                href="#the-fix"
                className="text-white/[0.8] hover:text-white transition-colors"
              >
                {" "}
                The Fix
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
        <RegisterLink source={"navbar"} />
      </div>
    </nav>
  );
};

export default Navbar;
