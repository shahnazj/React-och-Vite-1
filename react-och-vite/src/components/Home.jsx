import React from "react";
import SubscribeForm from "./SubscribeForm";
import Faq from "./Faq";
import MakeMoney from "./MakeMoney";
import CarouselSection from "./CarouselSection";
import Features from "./Features";
import Logos from "./Logos";
import Showcase from "./Showcase";
import Nav from "./Nav";
import ClientTestimonials from "./ClientTestimonials";

const Home = () => {
  return (
    <>
      <Nav />
      <Showcase />
      <Logos />
      <Features />
      <CarouselSection />
      <MakeMoney />
      <ClientTestimonials />
      <Faq />
      <SubscribeForm />
    </>
  );
};

export default Home;
