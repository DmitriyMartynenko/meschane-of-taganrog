export const PAGES = {
  HOME: '/',
  EXCURSIONS: '/excursions',
} as const;

export const SECTION_IDS = {
  HOME_PROMO: 'promo',
  HOME_ABOUT_MESHCHANE: 'about-meshchane',
  HOME_FEATURES: 'features',
  HOME_PHOTO: 'photo',
  HOME_PARTNERS: 'partners',
  HOME_REVIEWS: 'reviews',

  EXCURSIONS_FILTER: 'filter',
  EXCURSIONS_EXCURSIONS_LIST: 'excursions-list',
  EXCURSIONS_QUICK_ORDER: 'quick-order',

  SHARED_CONTACTS: 'contacts',
} as const satisfies Record<`${keyof typeof PAGES | 'SHARED'}_${string}`, string>;

export const BREAKPOINTS = {
  XS: '(width >= 24rem)',
  SM: '(width >= 40rem)',
  MD: '(width >= 48rem)',
  LG: '(width >= 64rem)',
  XL: '(width >= 80rem)',
  '2XL': '(width >= 96rem)',
} as const;
