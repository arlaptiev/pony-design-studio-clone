import Image from 'next/image';

export interface WorkCardAttributes {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  }
  tags: string[];
  text_color: string;
  tag_color: string;
  background_color: string;
}

interface Props {
  attributes: WorkCardAttributes;
}

const WorkCard = (props: Props) => {
  const { attributes } = props;

  return (
    <div
      className="relative rounded-3xl border overflow-hidden mx-4 mb-24 lg:mb-24 transition-transform duration-500 ease-in-out transform hover:scale-99"
      style={{
        backgroundColor: `#${attributes.background_color}`,
        color: `#${attributes.text_color}`,
      }}
    >
      <a href="/design-work/hop-product-branding" className="stretched-link">
        <div className="relative flex flex-col-reverse flex-wrap items-center md:flex-row">
          <div className="p-12 order-1 self-start md:self-auto lg:p-24" style={{ flex: '0 0 44%' }}>
            <h1 className="mb-4">{attributes.title}</h1>
            <p>{attributes.description}</p>
            {
              attributes.tags.map((tag) => (
                <span className="text-tiny inline-block rounded-full pt-2 pb-1 px-4 mb-4 mr-2" style={{ backgroundColor: `#${attributes.tag_color}` }}>{tag}</span>
              ))
            }
          </div>
          <div className="relative order-2" style={{ flex: '0 0 56%' }}>
            <Image
              width="743"
              height="839"
              alt={attributes.image.alt}
              src={attributes.image.src}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorkCard;
