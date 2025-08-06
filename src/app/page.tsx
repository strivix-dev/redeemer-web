import FinalCTA from '@/components/sections/home/finalCTA';
import Hero from '@/components/sections/home/hero';
import OurPartners from '@/components/sections/home/ourPartners';
import RedeemerSteps from '@/components/sections/home/redeemerSteps';
import SavingPhilosophy from '@/components/sections/home/savingPhilosophy';
import Showcase from '@/components/sections/home/showcase';
import Testimonials from '@/components/sections/home/testimonials';
import WhatIsFunMoney from '@/components/sections/home/whatIsFunMoney';
import WhatIsRedeemer from '@/components/sections/home/whatIsRedeemer';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <OurPartners />
      <WhatIsFunMoney />
      <SavingPhilosophy />
      <RedeemerSteps />
      <WhatIsRedeemer />
      <Testimonials />
      <Showcase />
      <FinalCTA />
    </>
  );
};

export default HomePage;
