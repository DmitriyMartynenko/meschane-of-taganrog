import { AboutMeshchaneSection } from './AboutMeshchaneSection';
import { FeaturesSection } from './FeaturesSection';
import { PartnersSection } from './PartnersSection';
import { PhotoSection } from './PhotoSection';
import { PromoSection } from './PromoSection';
import { ReviewsSection } from './ReviewsSection';
import { SubscriptionSection } from './SubscriptionSection';

const HomePage = () => {
  return (
    <>
      <PromoSection />
      <AboutMeshchaneSection />
      <FeaturesSection />
      <PhotoSection />
      <PartnersSection />
      <ReviewsSection />
      <SubscriptionSection />
    </>
  );
};

export default HomePage;
