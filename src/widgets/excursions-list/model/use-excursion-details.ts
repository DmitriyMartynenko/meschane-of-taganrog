import { useState } from 'react';

import { Excursion } from '@/entities/excursion';

import { useExcursionParams } from './use-excursion-params';

export const useExcursionDetails = (excursions: Excursion[]) => {
  const { excursionId, setExcursionId, clearExcursionId } = useExcursionParams();

  const [currentExcursion, setCurrentExcursion] = useState(() => {
    return excursions.find((excursion) => excursion.id === excursionId);
  });
  const [isOpen, setIsOpen] = useState<boolean>(!!excursionId);

  const handleToggleDetails = (open: boolean, excursion?: Excursion) => {
    if (open && excursion) {
      setCurrentExcursion(excursion);
      setIsOpen(open);
      setExcursionId(excursion.id);
    } else {
      setIsOpen(open);
      clearExcursionId();
    }
  };

  return {
    isOpen,
    currentExcursion,
    handleToggleDetails,
  };
};
