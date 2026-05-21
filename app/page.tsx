import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Credentials from "@/components/Credentials";
import Attendance from "@/components/Attendance";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* 1 — dark */}
      <Hero />
      {/* 2 — light */}
      <WhyChoose />
      {/* 3 — dark */}
      <Credentials />
      {/* 4 — light */}
      <Attendance />
      {/* 5 — dark */}
      <Testimonials />
      {/* 6 — light */}
      <About />
      {/* 7 — dark */}
      <FAQ />
      {/* 8 — dark footer */}
      <Footer />
    </main>
  );
}
