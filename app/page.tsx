// layouts-imports
import About from "./layouts/About";
import Audience from "./layouts/Audience";
import Focus from "./layouts/Focus";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Schedule from "./layouts/Schedule";
import Speaker from "./layouts/Speaker";

const page = () => {
  return (
    <main className="relative text-white min-h-screen">
      <Hero />
      <About />
      <Focus />
      <Audience />
      <Speaker />
      <Schedule />
      <Footer />
    </main>
  );
};

export default page;
