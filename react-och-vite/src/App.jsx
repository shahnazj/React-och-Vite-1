import React from "react";
import SubscribeForm from "./components/SubscribeForm";
import FeatureSection from "./components/FeatureSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Logos from "./components/logos";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Logos />
      <FeatureSection />
      <ContactForm />
      <FAQ />
      <SubscribeForm />
      <Footer />
    </div>
  );
}

export default App;
