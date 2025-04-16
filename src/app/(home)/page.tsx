import { PromoSection } from '@/widgets/PromoSection/ui';
import { QuoteSection } from '@/widgets/QuoteSection/ui/QuoteSection';

const HomePage = () => {
  return (
    <>
      <PromoSection />
      <QuoteSection />
      <div className="w-full h-screen bg-amber-950"></div>
    </>
  );
};

export default HomePage;
