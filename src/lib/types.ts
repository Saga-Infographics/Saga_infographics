export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badgeBg: string;
  badgeTextColor: string;
  features: string[];
  slug: string;
}

export interface WorkItem {
  id: string;
  title: string;
  clientHandle: string;
  category: 'reels' | 'web' | 'uiux' | 'branding' | 'motion';
  thumbnailUrl: string;
  videoUrl?: string;
  metric: string;
  platform: 'tiktok' | 'instagram' | 'youtube' | 'web';
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatarUrl: string;
  handle: string;
  followers: string;
  content: string;
  viewsGained: string;
  metricLabel: string;
  videoThumbnail: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  popular?: boolean;
  ctaText: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface MegaMenuItem {
  title: string;
  description: string;
  path: string;
  badge?: string;
  iconName: string;
}

export interface ProductLink {
  name: string;
  description: string;
  url: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}
