import { useRouter, useSearchParams } from 'next/navigation';

import { Excursion } from '@/entities/excursion';

import { PAGES } from '@/shared/model';

import { SEARCH_PARAMS } from './excursion-list.constants';

export const useExcursionParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const excursionId = searchParams.get(SEARCH_PARAMS.EXCURSION_ID);

  const setExcursionId = (id: Excursion['id']) => {
    const params = new URLSearchParams(searchParams);

    params.set(SEARCH_PARAMS.EXCURSION_ID, id);
    router.push(`${PAGES.EXCURSIONS}?${params}`, { scroll: false });
  };

  const clearExcursionId = () => {
    const params = new URLSearchParams(searchParams);

    params.delete(SEARCH_PARAMS.EXCURSION_ID);
    router.push(`${PAGES.EXCURSIONS}?${params}`, { scroll: false });
  };

  return {
    excursionId,
    setExcursionId,
    clearExcursionId,
  };
};
