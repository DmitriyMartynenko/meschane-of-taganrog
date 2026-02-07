export const PAGES = {
  HOME: '/',
  EXCURSIONS: '/excursions',
} as const;

export const SECTION_IDS = {
  HOME_PROMO: 'promo',
  HOME_ABOUT_MESCHANES: 'about-meschanes',
  HOME_FEATURES: 'features',
  HOME_PHOTO: 'photo',
  HOME_PARTNERS: 'partners',
  HOME_REVIEWS: 'reviews',
  HOME_SUBSCRIPTION: 'subscription',

  EXCURSIONS_FILTER: 'filter',
  EXCURSIONS_EXCURSIONS_LIST: 'excursions-list',
  EXCURSIONS_QUICK_ORDER: 'quick-order',

  SHARED_CONTACTS: 'contacts',
} as const satisfies Record<`${keyof typeof PAGES | 'SHARED'}_${string}`, string>;
