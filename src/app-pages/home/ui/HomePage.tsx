import { BenefitsSection } from './BenefitsSection';
import { PartnersSection } from './PartnersSection';
import { PhotoSection } from './PhotoSection';
import { PromoSection } from './PromoSection';
import { QuoteSection } from './QuoteSection';
import { ReviewsSection } from './ReviewsSection';
import { SubscriptionSection } from './SubscriptionSection';

const HomePage = () => (
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

export default HomePage;
