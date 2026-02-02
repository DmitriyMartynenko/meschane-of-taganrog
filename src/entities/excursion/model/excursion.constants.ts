export const EXCURSION_THEME = {
  Lifestyle: 'lifestyle',
  Architecture: 'architecture',
  Literature: 'literature',
} as const;

export const THEME_LABELS = {
  [EXCURSION_THEME.Lifestyle]: 'Быт',
  [EXCURSION_THEME.Architecture]: 'Архитектура',
  [EXCURSION_THEME.Literature]: 'Литература',
} as const;
