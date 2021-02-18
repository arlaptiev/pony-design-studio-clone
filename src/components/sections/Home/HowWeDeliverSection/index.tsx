import React from 'react';

import BackedByClients from 'components/sections/BackedByClients';
import Image from 'next/image';

import Feature from './Feature';

const HowWeDeliverSection = () => {
  const title = 'How We Deliver';
  const description = 'We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints, we\'ve developed a highly optimised process that brings results in just a few weeks.';
  const feature1 = {
    image: {
      alt: 'Product Design Sprint for startups',
      src: '/assets/img/product-img.png',
    },
    title: 'Products',
    duration: '5-8 weeks duration',
    lead_time: '3-4 weeks lead time',
    deliverables: [
      '· JTBD Workshop',
      '· UX Research',
      '· Information Architecture',
      '· Wireframes (full UX design)',
      '· Usability Testing',
      '· UI Mockups (full product design)',
      '· Iconography',
      '· Design System',
    ],
    button: {
      title: 'Explore product',
      href: '/product',
    },
  };
  const feature2 = {
    image: {
      alt: 'Branding Sprint for startups',
      src: '/assets/img/branding-img.png',
    },
    title: 'Branding',
    duration: '4-5 weeks duration',
    lead_time: '2-3 weeks lead time',
    deliverables: [
      '· Branding Workshop',
      '· Multiple logo design concepts',
      '· Custom illustrations and patterns',
      '· Color Palette',
      '· Typography',
      '· Social Media Designs',
      '· Collateral',
      '· Brand Styleguide',
    ],
    button: {
      title: 'Explore branding',
      href: '/branding',
    },
  };

  return (
    <section className="container px-6 mx-auto pt-3 lg:pt-4">

      <div className="md:justify-center md:text-center">
        <h2>{title}</h2>
        <p className="max-w-xl mx-auto">{description}</p>
      </div>

      <div className="container mt-4 pt-4 mb-4">
        <div className="flex flex-wrap justify-center text-left max-w-3xl mx-auto">

          <Feature attributes={feature1} />

          <div className="mt-96 px-12 hidden md:block">
            <Image width="7" height="405" src="/assets/img/separator-vertical.svg" alt="" />
          </div>

          <Feature attributes={feature2} className="sm:mt-48" />

          <div className="py-24 md:px-24 text-center justify-center">
            <BackedByClients />
          </div>

        </div>
      </div>

    </section>
  );
};

export default HowWeDeliverSection;
