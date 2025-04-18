import { PromoSection } from '@/app/(home)/ui/PromoSection';
import { QuoteSection } from '@/app/(home)/ui/QuoteSection';

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
