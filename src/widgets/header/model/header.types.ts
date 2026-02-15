import { PageId, SectionId } from '@/shared/model';

export type NavHref = PageId | `${PageId}#${SectionId}` | `#${SectionId}`;

export type NavLink = {
  label: string;
  href: NavHref;
};
