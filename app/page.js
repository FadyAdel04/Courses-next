import Image from "next/image";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Landing from "./_components/Landing";
import Courses from "./_components/Courses";
import Trustby from "./_components/Trustby";
import Features from "./_components/Features";
import Blog from "./_components/Blog";
import Example from "./_components/Example";
import ContactUs from "./_components/ContactUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Landing />
      <Courses />
      <Trustby />
      <Features />
      <Example/>
      <ContactUs/>
      <Footer />
    </>
  );
}
