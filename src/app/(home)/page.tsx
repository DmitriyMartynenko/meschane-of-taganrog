import { PromoSection } from './ui/PromoSection';
import { QuoteSection } from './ui/QuoteSection';
import { BenefitsSection } from './ui/BenefitsSection';

const HomePage = () => {
  return (
    <>
      <PromoSection />
      <QuoteSection />
      <BenefitsSection />
      <div className="w-full h-screen bg-amber-950"></div>
    </>
  );
};

export default HomePage;
