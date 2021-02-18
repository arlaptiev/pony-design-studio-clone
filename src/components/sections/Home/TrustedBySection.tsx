import React from 'react';

import { DrawnDarkContainer } from 'components/elements/DrawnDarkContainer';
import { Slideshow } from 'components/elements/Slideshow';

const TrustedBySection = () => (
  <section className="justify-center text-center">
    <DrawnDarkContainer>
      <h4 className="text-white">
        Trusted by 150+ teams
      </h4>
      <Slideshow isDirectionLeft={false} speedSeconds={700} image="https://pony.studio/assets/clients-slideshow-2@1x.png" />
      <Slideshow isDirectionLeft={false} speedSeconds={400} image="https://pony.studio/assets/clients-slideshow-2@1x.png" />
    </DrawnDarkContainer>
  </section>
);

export default TrustedBySection;
