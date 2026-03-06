import { SECTION_IDS } from '@/shared/model';

import { NavLink } from './header.types';

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'О мещанах',
    href: `/#${SECTION_IDS.HOME_ABOUT_MESHCHANE}`,
  },
  {
    label: 'Особенности',
    href: `/#${SECTION_IDS.HOME_FEATURES}`,
  },
  {
    label: 'Экскурсии',
    href: `/excursions`,
  },
  {
    label: 'Фотографии',
    href: `/#${SECTION_IDS.HOME_PHOTO}`,
  },
  {
    label: 'ТГЛИАМЗ',
    href: `/#${SECTION_IDS.HOME_PARTNERS}`,
  },
  {
    label: 'Контакты',
    href: `/#${SECTION_IDS.SHARED_CONTACTS}`,
  },
];

export const leftGroup = NAV_LINKS.slice(0, 3);
export const middleGroup = NAV_LINKS.slice(3, 4);
export const rightGroup = NAV_LINKS.slice(4);
