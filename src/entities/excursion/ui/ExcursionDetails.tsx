import { useMediaQuery } from '@/shared/lib';
import { BREAKPOINTS } from '@/shared/model';

import { Excursion } from '../model/excursion.types';

import { ExcursionDetailsDesktop } from './ExcursionDetailsDesktop';
import { ExcursionDetailsMobile } from './ExcursionDetailsMobile';

type ExcursionDetailsProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  excursion: Excursion;
  onStartBooking: () => void;
};

export const ExcursionDetails = (props: ExcursionDetailsProps) => {
  const { isOpen, setIsOpen, excursion, onStartBooking } = props;

  const isLarge = useMediaQuery(BREAKPOINTS.LG);

  if (isLarge) {
    return (
      <ExcursionDetailsDesktop
        excursion={excursion}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onStartBooking={onStartBooking}
      />
    );
  }

  return (
    <ExcursionDetailsMobile
      excursion={excursion}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onStartBooking={onStartBooking}
    />
  );
};
