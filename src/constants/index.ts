import TikTok from '@/assets/tikTok';
import { Clock, Facebook, Instagram, Mail, MessageSquare } from 'lucide-react';

export const navItems = [
  {
    name: 'About',
    link: 'about',
  },
  // {
  //   name: 'Academy',
  //   link: 'academy',
  // },
  // {
  //   name: 'Lawsuit',
  //   link: 'lawsuit',
  // },
  {
    name: 'Contact',
    link: 'contact',
  },
];

export const extensionUrl =
  'https://chromewebstore.google.com/detail/redeemer-cash-back-reward/hchcfdonkmcdkjpbpelfbghlljpjmmib';

export const socialLinks = [
  {
    href: 'https://www.facebook.com/joinredeemer',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/joinredeemer/?fbclid=IwY2xjawJX3_ZleHRuA2FlbQIxMAABHfKwZQjsOUG0fZoDcLFeR_rSkRR1SgiPU3GH13ZMwt6l--Xml-QgMte2Bg_aem_N1B_4_JPKUBf2mc9eldKWQ',
    icon: Instagram,
    label: 'Instagram',
  },
  // { href: '#', icon: Twitter, label: 'Twitter' },
  // { href: '#', icon: Linkedin, label: 'LinkedIn' },
  {
    href: 'https://www.tiktok.com/@joinredeemer',
    icon: TikTok,
    label: 'TikTok',
  },
];

export const contactInfo = [
  { Icon: Mail, text: 'support@joinredeemer.com' },
  { Icon: Clock, text: 'Available 24/7' },
  { Icon: MessageSquare, text: 'We typically respond within 24 hours' },
];

export const companyName = 'Redeemer';
