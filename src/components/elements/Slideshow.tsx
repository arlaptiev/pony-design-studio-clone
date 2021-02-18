import React from 'react';

type Props = {
  isDirectionLeft: boolean;
  speedSeconds: number;
  image: string;
};

export const Slideshow = (props: Props) => {
  const animationName = props.isDirectionLeft ? 'slideleft' : 'slideright';
  return (
    <div
      className="bg-cover h-20 slide-right bg-repeat-x"
      style={{
        backgroundImage: `url('${props.image}')`,
        animation: `${animationName} ${props.speedSeconds}s infinite linear`,
        MozAnimation: `${animationName} ${props.speedSeconds}s infinite linear`,
        WebkitAnimation: `${animationName} ${props.speedSeconds}s infinite linear`,
      }}
    />
  );
};
