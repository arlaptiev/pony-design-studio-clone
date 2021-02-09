// import BlogSection from 'components/sections/Home/BlogSection';
// import FeatureSection from 'components/sections/Home/FeatureSection';
// import PricingSection from 'components/sections/Home/PricingSection';
// import StepsSection from 'components/sections/Home/StepsSection';
// import TeamSection from 'components/sections/Home/TeamSection';
import HeroSection from 'components/sections/Home/HeroSection';
import { HomeAttributes } from 'interfaces/home';

interface Props {
  attributes: HomeAttributes;
}

const Home = (props: Props) => {
  const { attributes } = props;
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: Home.tsx ~ line 15 ~ Home ~ attributes', attributes);
  return (
    <>
      <HeroSection />
      {/* <FeatureSection
        version={attributes.feature_version}
        title={attributes.feature_title}
        description={attributes.feature_description}
        features={attributes.features}
      />
      <StepsSection
        version={attributes.steps_version}
        steps={attributes.steps}
        image={attributes.steps_image}
      />
      <PricingSection
        title={attributes.pricing_title}
        description={attributes.pricing_description}
        plans={attributes.plans}
      />
      <TeamSection
        version={attributes.team_version}
        title={attributes.team_title}
        description={attributes.team_description}
        team={attributes.team}
      />
      <BlogSection
        version={attributes.blog_version}
        title={attributes.blog_title}
        description={attributes.blog_description}
        slugs={attributes.posts}
      /> */}
    </>
  );
};

export default Home;
