// layouts-imports
import About from "./layouts/About";
import Audience from "./layouts/Audience";
import Fix from "./layouts/Fix";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import Schedule from "./layouts/Schedule";
import Speaker from "./layouts/Speaker";

const page = () => {
  return (
    <main className="relative text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Fix />
      <Audience />
      <Speaker />
      <Schedule />
      <Footer />
    </main>
  );
};

export default page;
