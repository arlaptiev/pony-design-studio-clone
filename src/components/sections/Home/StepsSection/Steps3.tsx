import { Step } from 'interfaces/home';
import { getIcon } from 'utils/getIcon';
import Image from 'utils/Image';

interface Props {
  image: string;
  steps: Step[];
}

const Steps3: React.FC<Props> = ({ image, steps }) => (
  <section className="text-gray-700 body-font">
    <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto">
      <div className="flex flex-wrap mx-auto mb-20">
        {steps?.map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <a
            className={`inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none tracking-wider border-b-2  rounded-t sm:px-6 sm:w-auto sm:justify-start title-font ${
              i > 0
                ? 'border-gray-200 hover:text-gray-900'
                : 'text-indigo-500 bg-gray-100 border-indigo-500'
            }`}
          >
            {getIcon(i, 5)}
            {' '}
            {`STEP ${i + 1}`}
          </a>
        ))}
      </div>
      <div className="relative w-2/3 mx-auto mb-10 rounded xl:w-1/4 lg:w-1/3 md:w-1/2" style={{ paddingTop: '50%' }}>
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={image}
          alt="step"
        />
      </div>
      <div className="flex flex-col w-full text-center">
        <h1 className="mb-4 text-xl font-medium text-gray-900 title-font">
          {steps[0].name}
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          {steps[0].description}
        </p>
      </div>
    </div>
  </section>
);

export default Steps3;
