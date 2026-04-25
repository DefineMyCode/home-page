export interface PersonalInfo {
  name: string;
  avatar: string;
  bio: string;
}

export interface LinkItem {
  title: string;
  url: string;
  icon: string;
  color?: string;
  type?: 'link' | 'qrcode';
  qrImage?: string;
}

export interface LinkGroup {
  label: string;
  links: LinkItem[];
}

export interface SEOConfig {
  title: string;
  description: string;
  favicon?: string;
  ogImage?: string;
  canonicalURL?: string;
  locale?: string;
}

export interface FooterConfig {
  copyright: string;
  showPoweredBy?: boolean;
}

export interface SiteConfig {
  personal: PersonalInfo;
  links: LinkGroup[];
  seo: SEOConfig;
  footer: FooterConfig;
}
