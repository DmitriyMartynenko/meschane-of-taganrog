import { useMediaQuery } from '@/shared/lib';
import { BREAKPOINTS } from '@/shared/model';

import { Excursion } from '../model/excursion.types';

import { ExcursionDetailsDesktop } from './ExcursionDetailsDesktop';
import { ExcursionDetailsMobile } from './ExcursionDetailsMobile';

type ExcursionDetailsProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  excursion: Excursion;
  onStartBooking: () => void;
};

export const ExcursionDetails = (props: ExcursionDetailsProps) => {
  const { isOpen, onOpenChange, excursion, onStartBooking } = props;

  const isLarge = useMediaQuery(BREAKPOINTS.LG);

  if (isLarge) {
    return (
      <ExcursionDetailsDesktop
        excursion={excursion}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onStartBooking={onStartBooking}
      />
    );
  }

  return (
    <ExcursionDetailsMobile
      excursion={excursion}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onStartBooking={onStartBooking}
    />
  );
};
