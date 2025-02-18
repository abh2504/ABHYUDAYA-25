import React from "react";
import "./style.css";

// components
import HeroSection from "../../components/homepage/hero";
import Hero2Section from "../../components/homepage/hero2";
import CountDown from "../../components/homepage/countdown/CountDown";
import PinGrid from "../../components/homepage/pintrest/pinGrid";
import Slider from "../../components/homepage/slider/slider";

import { useInView } from "react-intersection-observer";

export default function Home() {
  return (
    <div className="home">
      <section className="home-content home" id="home">
        <HeroSection />
      </section>
      <section className="home-content" id="description">
        <Hero2Section />
      </section>
      
     
      <section className="home-content" id="countdown">
        <CountDown />
      </section>{/*
      <section className="home-content slider" id="slider">
        <Slider/>
      </section>*/}
      <section className="home-content" id="gallery">
        <PinGrid />
      </section>
    </div>
  );
}