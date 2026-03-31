import { BackToFilters } from '@/widgets/excursions-list';

import { ExcursionsListSection } from './ExcursionsListSection';
import { FilterSection } from './FilterSection';

const ExcursionsPage = () => {
  return (
    <>
      <FilterSection />
      <ExcursionsListSection />
      <BackToFilters />
    </>
  );
};

export default ExcursionsPage;
