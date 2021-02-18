import { Step } from 'interfaces/home';
import Image from 'next/image';
import { getIcon } from 'utils/getIcon';

interface Props {
  image: string;
  steps: Step[];
}

const Steps1: React.FC<Props> = ({ image, steps }) => (
  <section className="text-gray-700 body-font">
    <div className="container flex flex-wrap px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/5 md:w-full md:pr-10 md:py-6">
          {steps?.map((step, i) => (
            <div className="relative flex pb-12" key={i}>
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                {i !== steps.length - 1 && (
                  <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                )}
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                {getIcon(i)}
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-bold tracking-wider text-gray-900 title-font">
                  {step.name}
                </h2>
                <p className="leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block relative mt-12 rounded-lg lg:w-3/5" style={{ paddingTop: '50%' }}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={image}
            alt="step"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Steps1;
