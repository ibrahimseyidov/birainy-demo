import { NavItem, SocialLink } from '../types/navigation';

export const NAV_ITEMS: NavItem[] = [
  { id: 'services', title: 'service', path: '/services' },
  { id: 'projects', title: 'portfolio', path: '#' },
  { id: 'analytics', title: 'analytic', path: '#' },
  { id: 'blog', title: 'blog', path: '#' },
  { id: 'about', title: 'whous', path: '#' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/birainy_az/',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/company/birainy',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: 'tiktok',
    url: 'https://tiktok.com/@birainy',
  },
];