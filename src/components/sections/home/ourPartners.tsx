import Amazon from '@/assets/amazon';
import Apple from '@/assets/apple';
import BloomingDales from '@/assets/bloomingDales';
import Dell from '@/assets/dell';
import Ebay from '@/assets/ebay';
import LuluLemon from '@/assets/luluLemon';
import Nike from '@/assets/nike';
import Petsmart from '@/assets/petsmart';
import Target from '@/assets/target';
import Walgreen from '@/assets/walgreen';
import Wallmart from '@/assets/wallmart';
import { FC } from 'react';

const partners = [
  Amazon,
  Wallmart,
  Dell,
  Nike,
  Target,
  Walgreen,
  LuluLemon,
  BloomingDales,
  Petsmart,
  Ebay,
  Apple,
];

const OurPartners: FC = () => {
  return (
    <section className="py-16 bg-primary/20">
      <div className="px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">
            Get Fun Money from Your Favorite Stores
          </h1>
          <p className="text-muted-foreground font-medium italic mt-2">
            Redeemer is available in over 50+ of your favorite stores!
          </p>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex animate-scroll-left space-x-12 pr-12">
            {partners.map((Icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/60 whitespace-nowrap"
              >
                <Icon />
              </div>
            ))}
          </div>
          <div className="flex animate-scroll-left space-x-12 pr-12">
            {partners.map((Icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/60 whitespace-nowrap"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
