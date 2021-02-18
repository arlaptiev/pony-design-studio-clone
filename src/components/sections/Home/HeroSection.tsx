import React from 'react';

import { DarkButton } from 'components/elements/Button';
import Image from 'next/image';

const HeroSection = () => (
  <section className="container mx-auto justify-center text-center pt-3 lg:pt-4">
    <div className="pt-24 pb-11">
      <div className="text-lg max-w-xs m-auto leading-relaxed md:my-2 lg:text-2xl lg:max-w-none">
        Working with startups & scaleups
        {' '}
        <span className="block md:inline-block">
          to design
          {' '}
          <span className="lg:hidden">beautiful </span>
          growth-driven
        </span>
      </div>
      <div className="text-hero lg:text-hero-large leading-none" style={{ letterSpacing: '-0.04em' }}>
        <div>products</div>
        <div className="-mt-2">
          <div className="relative w-14 h-14 lg:h-25.5 lg:w-25.5 inline-block">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              src="/assets/img/and.svg"
              alt="and symbol"
            />
          </div>
          <div className="inline-block">brands</div>
        </div>
      </div>
    </div>
    <div>
      <DarkButton href="/contact">
        Book a Call
      </DarkButton>
      <div className="mt-3 text-xs">Avg response time: 54 min</div>
    </div>
    <div className="max-w-4xl mt-30 m-auto">
      <video className="intro-animation" autoPlay muted loop width="100%" preload="auto" src="https://pony.studio/assets/pony2@2x.mp4" />
    </div>
  </section>
);

export default HeroSection;
