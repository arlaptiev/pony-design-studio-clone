import React from 'react';

import { DarkButton } from 'components/elements/Button';
import Image from 'next/image';

export interface FeatureProps {
  attributes: {
    image: {
      alt: string;
      src: string;
    },
    title: string;
    duration: string;
    lead_time: string;
    deliverables: string[];
    button: {
      title: string;
      href: string;
    };
  };
  className?: string;
}

const Feature = (props: FeatureProps) => {
  const { attributes, className } = props;
  return (
    <div className={`relative w-full max-w-15 my-12 sm:w-40% ${className}`}>
      <div className="mb-1">
        <Image
          width={230}
          height={256}
          layout="intrinsic"
          alt={attributes.image.alt}
          src={attributes.image.src}
        />
      </div>

      <h1 className="h1">{attributes.title}</h1>
      <p className="mb-2 align-middle">
        <div className="pr-4 inline-block"><Image width={28} height={20} src="/assets/img/clock-icon.svg" alt="" /></div>
        {attributes.duration}
      </p>
      <p className="mb-2">
        <div className="pr-4 inline-block"><Image width={28} height={20} src="/assets/img/calendar-icon.svg" alt="" /></div>
        {attributes.lead_time}
      </p>
      <p className="mb-4">
        <div className="pr-4 inline-block"><Image width={28} height={20} src="/assets/img/check-icon.svg" alt="" /></div>
        Deliverables:
      </p>
      {attributes.deliverables.map((deliverable) => <p className="text-small mb-2">{deliverable}</p>)}
      <DarkButton href={attributes.button.href} className="w-15 md:w-full mt-8">{attributes.button.title}</DarkButton>
    </div>
  );
};

export default Feature;
