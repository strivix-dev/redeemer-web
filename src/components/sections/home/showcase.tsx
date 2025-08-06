import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { FC } from 'react';

const Showcase: FC = () => {
  return (
    <div className="w-full overflow-hidden hidden lg:block bg-primary/20">
      <MacbookScroll
        title={
          <div className="flex flex-col gap-4">
            <span className="text-5xl">Saving money is great!</span>
            <span className="text-base italic">
              And it has never been easier than with Redeemer.
            </span>
          </div>
        }
        src={`/videos/how-it-works.mp4`}
        showGradient={false}
      />
    </div>
  );
};

export default Showcase;
