import Image from 'next/image';

const HeroSection = () => (
  <section className="container pt-3 lg:pt-4">
    <div className="justify-center text-center">
      <div>
        <div className="text-l leading-relaxed">
          Working with startups & scaleups to design growth-driven
        </div>
        <div className="text-6xl leading-none">
          <div>products</div>
          <div>
            <Image
              className="pt-12"
              width={49}
              height={59}
              src="/assets/img/and.svg"
              alt="and symbol"
            />
            brands
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="title">
          Book a Call
        </button>
        <div>Avg response time: 54 min</div>
      </div>
    </div>
  </section>
);

export default HeroSection;
