import { PromoSection } from './PromoSection';
import { BenefitsSection } from './BenefitsSection';
import { QuoteSection } from './QuoteSection';
import { PhotoSection } from './PhotoSection';
import { PartnersSection } from './PartnersSection';
import { ReviewsSection } from './ReviewsSection';
import { SubscribeSection } from './SubscribeSection';

const HomePage = () => {
  return (
    <>
      <PromoSection />
      <QuoteSection />
      <BenefitsSection />
      <PhotoSection />
      <PartnersSection />
      <ReviewsSection />
      <SubscribeSection />
    </>
  );
};

export default HomePage;
