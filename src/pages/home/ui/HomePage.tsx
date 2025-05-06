import { PromoSection } from './PromoSection';
import { BenefitsSection } from './BenefitsSection';
import { QuoteSection } from './QuoteSection';
import { PhotoSection } from './PhotoSection';
import { PartnersSection } from './PartnersSection';
import { ReviewsSection } from './ReviewsSection';
import { SubscriptionSection } from './SubscriptionSection';

const HomePage = () => {
  return (
    <>
      <PromoSection />
      <QuoteSection />
      <BenefitsSection />
      <PhotoSection />
      <PartnersSection />
      <ReviewsSection />
      <SubscriptionSection />
    </>
  );
};

export default HomePage;
