// import BlogSection from 'components/sections/Home/BlogSection';
// import FeatureSection from 'components/sections/Home/FeatureSection';
// import PricingSection from 'components/sections/Home/PricingSection';
// import StepsSection from 'components/sections/Home/StepsSection';
// import TeamSection from 'components/sections/Home/TeamSection';
import React from 'react';

import FeaturedWorksSection from 'components/sections/Home/FeaturedWorksSection';
import HeroSection from 'components/sections/Home/HeroSection';
import HowWeDeliverSection from 'components/sections/Home/HowWeDeliverSection';
import TrustedBySection from 'components/sections/Home/TrustedBySection';
import { WorkCardAttributes } from 'components/sections/WorkCard';

interface Props {
  attributes: { featuredWorks: { attributes: WorkCardAttributes; }[]};
}

const Home = (props: Props) => (
  <>
    <HeroSection />
    <TrustedBySection />
    <HowWeDeliverSection />
    <FeaturedWorksSection featuredWorks={props.attributes.featuredWorks} />
  </>
);

export default Home;
