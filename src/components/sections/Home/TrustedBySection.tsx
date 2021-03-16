import React from 'react';

import { DrawnDarkContainer } from 'components/elements/DrawnDarkContainer';
import { Slideshow } from 'components/elements/Slideshow';

const TrustedBySection = () => (
  <section className="justify-center text-center">
    <DrawnDarkContainer>
      <h4 className="text-white">
        Trusted by 150+ teams
      </h4>
      <Slideshow isDirectionLeft={false} speedSeconds={700} image="/assets/img/clients-slideshow-1.png" />
      <Slideshow isDirectionLeft={false} speedSeconds={400} image="/assets/img/clients-slideshow-2.png" />
    </DrawnDarkContainer>
  </section>
);

export default TrustedBySection;
