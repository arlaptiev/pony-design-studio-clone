import WorkCard, { WorkCardAttributes } from '../WorkCard';

interface Props {
  featuredWorks: { attributes: WorkCardAttributes }[];
}

const FeaturedWorksSection = (props: Props) => (
  <div className="max-w-7xl mx-auto">
    {
      props.featuredWorks.map((work_card) => (<WorkCard attributes={work_card.attributes} />))
    }
  </div>
);

export default FeaturedWorksSection;
