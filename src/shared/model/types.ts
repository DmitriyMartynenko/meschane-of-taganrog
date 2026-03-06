import { BREAKPOINTS, PAGES, SECTION_IDS } from './constants';

export type PageId = (typeof PAGES)[keyof typeof PAGES];

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export type Breakpoint = keyof typeof BREAKPOINTS;
