import { IndustryCategory } from "./data";

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
  category?: IndustryCategory;
}

export interface MegaMenuCategory {
  categoryTitle: string;
  items: MegaMenuItem[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  megaMenu?: MegaMenuCategory[];
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface QuickFilterChip {
  id: string;
  label: string;
  category: IndustryCategory;
}
