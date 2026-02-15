import { ExcursionsListSection } from './ExcursionsListSection';
import { FilterSection } from './FilterSection';
import { QuickOrderSection } from './QuickOrderSection';

const ExcursionsPage = () => {
  return (
    <>
      <FilterSection />
      <ExcursionsListSection />
      <QuickOrderSection />
    </>
  );
};

export default ExcursionsPage;
