import type {
  ServiceItem,
  WorkItem,
  Testimonial,
  PricingPlan,
  FAQItem,
  MegaMenuItem,
  ProductLink,
  ProcessStep
} from '$lib/types';

export const PRODUCTS: ProductLink[] = [
  {
    name: 'SMM Panel',
    description: 'Social media marketing & growth panel',
    url: 'https://smm.saga.com.np'
  },
  {
    name: 'FMS',
    description: 'File / financial management system',
    url: 'https://fms.saga.com.np'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Give us your raw footage, it can be DSLR or iPhone',
    description:
      'We maintain a bench of pre-vetted video editors and creators ready to be trained and assigned to your account within 48 hours.',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    alt: 'Recording raw footage on phone'
  },
  {
    number: '02',
    title: 'Our team instantly starts editing your videos & assets',
    description:
      'No delays, no guesswork—our team of video editors & motion designers is vetted, trained, and ready to transform your brand content.',
    imageUrl:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    alt: 'Editing video in studio workspace'
  },
  {
    number: '03',
    title: 'Upload & start seeing results from day one',
    description:
      'Streamline your content engine with pre-qualified editors, tailored hook optimization, and fast turnaround to trigger viral growth.',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    alt: 'Reviewing analytics on laptop'
  }
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'w1',
    title: 'High-Converting Fitness Reel',
    clientHandle: '@wellnesscoach;',
    category: 'reels',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    videoUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-phone-and-looking-at-it-41559-large.mp4',
    metric: 'Gained 18.4K followers from this reel',
    platform: 'instagram',
    description:
      'Dynamic pacing, custom typography captions, and sound design that boosted retention by 340%.',
    tags: ['Reels', 'Fitness', 'Hook Optimization']
  },
  {
    id: 'w2',
    title: 'SaaS Founder Growth Shorts',
    clientHandle: '@lifestyle_smma;',
    category: 'reels',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    videoUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-on-her-laptop-in-a-coffee-shop-42617-large.mp4',
    metric: 'I gained 10K Followers in the last month',
    platform: 'tiktok',
    description:
      'Turning long-form podcast clips into viral, punchy 30-second shorts with dynamic text callouts.',
    tags: ['TikTok', 'SaaS', 'Podcast Clips']
  },
  {
    id: 'w3',
    title: 'Tech Review Viral TikTok',
    clientHandle: '@techunboxed_official;',
    category: 'reels',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop',
    metric: 'Gained 2.4M organic views in 7 days',
    platform: 'tiktok',
    description:
      'Product unboxing turned into ultra-fast paced narrative reel with custom sound effects.',
    tags: ['Unboxing', 'TikTok', 'Viral Edit']
  },
  {
    id: 'w4',
    title: 'E-commerce Brand Story Reel',
    clientHandle: '@wellnesscoach;',
    category: 'reels',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    metric: 'Gained 14K followers from this reel',
    platform: 'instagram',
    description: 'Engaging lifestyle showcase driving 4.2x ROAS on Meta ads campaign.',
    tags: ['E-commerce', 'Meta Ads', 'Reels']
  },
  {
    id: 'w5',
    title: 'Personal Brand Scaling',
    clientHandle: '@creator_mindset;',
    category: 'reels',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    metric: 'Gained 45K subscribers in 60 days',
    platform: 'youtube',
    description:
      'YouTube Shorts editing system designed for daily uploads and maximum click-through rate.',
    tags: ['YouTube Shorts', 'Personal Brand']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Youtube Shorts',
    description:
      'Turn long podcasts or horizontal videos into high-retention vertical Shorts with animated captions & sound hooks.',
    icon: 'Youtube',
    badgeBg: 'bg-[#FF0000]/10',
    badgeTextColor: 'text-[#FF0000]',
    features: ['Custom Animated Captions', 'Hook Optimization', 'Sound Effects & B-Roll', '48h Delivery'],
    slug: 'youtube-shorts'
  },
  {
    id: 's2',
    title: 'Instagram Reels',
    description:
      'Trendy, aesthetic, and fast-paced edits crafted specifically to trigger Instagram algorithm recommendations.',
    icon: 'Instagram',
    badgeBg: 'bg-[#E1306C]/10',
    badgeTextColor: 'text-[#E1306C]',
    features: ['Trending Music Overlay', 'Color Grading', 'Native Text Styling', 'Hashtag Strategy'],
    slug: 'instagram-reels'
  },
  {
    id: 's3',
    title: 'TikTok Videos',
    description: 'Raw, native-feeling, high-energy edits that keep viewers watching past 3 seconds.',
    icon: 'Video',
    badgeBg: 'bg-[#000000]/10',
    badgeTextColor: 'text-[#121212]',
    features: ['Pattern Interrupts', 'Fast Cuts & Zoom Effects', 'Trending Sounds', 'CTA Overlays'],
    slug: 'tiktok-videos'
  },
  {
    id: 's4',
    title: 'Video Edits & Content Creation',
    description:
      'End-to-end video post-production for brands, agencies, course creators, and founder channels.',
    icon: 'Film',
    badgeBg: 'bg-[#FF4D23]/10',
    badgeTextColor: 'text-[#FF4D23]',
    features: ['Full Video Editing', 'Storyboarding', 'Sound Design & Mixing', 'Dedicated Editor'],
    slug: 'video-edits'
  },
  {
    id: 's5',
    title: 'Motion Graphics & Animation Design',
    description:
      'Sleek 2D/3D motion graphics, kinetic typography, lower thirds, and logo animations.',
    icon: 'Sparkles',
    badgeBg: 'bg-[#FF4D23]/10',
    badgeTextColor: 'text-[#FF4D23]',
    features: ['Logo Animation', 'Custom UI Mockups', 'Infographic Motion', 'After Effects Masters'],
    slug: 'motion-graphics'
  },
  {
    id: 's6',
    title: 'Web Engineering & Digital Products',
    description:
      'High-performance React & Next.js websites built with ultra-responsive layouts, smooth motion, and instant speed.',
    icon: 'Code',
    badgeBg: 'bg-[#2563EB]/10',
    badgeTextColor: 'text-[#2563EB]',
    features: ['React & Tailwind CSS', 'SEO & Speed Optimized', 'CMS Integration', 'Responsive Design'],
    slug: 'web-development'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Adam Alvi',
    role: 'Founder & Content Creator',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    handle: '@adam_alvi',
    followers: '34k Followers',
    content:
      'Their editing completely changed my content game. The Reels they delivered were snappy, on-trend, and exactly what my audience loves.',
    viewsGained: '1.5 Million+',
    metricLabel: 'Views gained',
    videoThumbnail:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't2',
    author: 'Elena Rostova',
    role: 'Social Media Strategist',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    handle: '@reelqueen_',
    followers: '78k Followers',
    content:
      'I never thought my Reels could look this professional. Their edits made my content look premium — and the growth followed!',
    viewsGained: '2.8 Million+',
    metricLabel: 'Views gained',
    videoThumbnail:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't3',
    author: 'Marcus Vance',
    role: 'SaaS Growth Lead',
    avatarUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    handle: '@marcus_vance',
    followers: '52k Followers',
    content:
      'Saga team handles our video post-production seamlessly. The 48-hour turnaround lets us scale from 2 videos to 15 videos per week easily.',
    viewsGained: '3.4 Million+',
    metricLabel: 'Views gained',
    videoThumbnail:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Clipstart',
    description: '1 short video/week',
    monthlyPrice: 7999,
    yearlyPrice: 6399,
    ctaText: 'Get Started Now',
    features: [
      '4 edited videos per month',
      'For creators just getting started',
      'Fast 48-72 hour turnaround',
      'Captions + basic hook optimization',
      'Stock footage & audio background',
      '1 revision round per video'
    ]
  },
  {
    id: 'p2',
    name: 'ReelFlow',
    description: '2-3 short videos/week',
    monthlyPrice: 19999,
    yearlyPrice: 15999,
    popular: true,
    badge: 'MOST POPULAR',
    ctaText: 'Get Started Now',
    features: [
      '10-12 edited videos per month',
      'Includes trending hooks and sound',
      'Advanced motion/text animations',
      'Custom brand styling + assets',
      'Priority delivery + 2 revisions/video',
      'Dedicated Account Manager'
    ]
  },
  {
    id: 'p3',
    name: 'ViralBoost',
    description: 'Fully custom, high-volume editing',
    monthlyPrice: 44999,
    yearlyPrice: 35999,
    ctaText: 'Book A Meeting',
    features: [
      'Unlimited short video edits / custom scope',
      'Strategy calls + creative direction',
      'Thumbnail design for YouTube Shorts',
      'Priority Slack/Notion communication',
      'Custom motion graphic templates',
      'Full source file delivery'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'General',
    question: 'How quickly can we start after booking a call?',
    answer:
      'Once you book a meeting and choose your tier, our onboarding takes less than 24 hours. You get direct access to your dedicated Slack channel and Notion portal to upload raw footage or submit project requirements immediately.'
  },
  {
    id: 'f2',
    category: 'Workflow',
    question: 'What kind of raw materials or files do I need to provide?',
    answer:
      'You can upload raw camera video (DSLR or smartphone), Zoom/podcast recordings, screen recordings, or audio files via Google Drive, Dropbox, or Frame.io. We take care of transcriptions, hooks, graphics, b-roll, and final styling.'
  },
  {
    id: 'f3',
    category: 'Revisions',
    question: 'What if I need revisions on a video or web project?',
    answer:
      'Every video comes with dedicated revision rounds. You can leave precise timestamped comments directly on Frame.io or Notion, and our editors apply the changes within 24 hours.'
  },
  {
    id: 'f4',
    category: 'Aesthetic',
    question: 'How do you match editors and designers with our brand aesthetic?',
    answer:
      'Before we start editing, we build a customized Brand Guide for you containing your brand fonts, color palettes, caption styles, preferred music genres, and visual inspiration clips.'
  },
  {
    id: 'f5',
    category: 'Billing',
    question: 'Can we pause or cancel our subscription at any time?',
    answer:
      'Yes! All plans operate on a simple month-to-month basis with no long-term contracts. You can scale up during launch months, pause when you are on vacation, or cancel anytime.'
  }
];

export const MEGA_MENU_ITEMS: MegaMenuItem[] = [
  {
    title: 'Short-Form Video Editing',
    description: 'TikTok, Reels, and Shorts edited to hook viewers & go viral',
    path: '/services#youtube-shorts',
    badge: 'Popular',
    iconName: 'Play'
  },
  {
    title: 'Web Engineering',
    description: 'Modern React & Tailwind sites designed for high conversion',
    path: '/services#web-development',
    iconName: 'Code'
  },
  {
    title: 'UI/UX & Product Design',
    description: 'Sleek app interfaces and visual design systems',
    path: '/services#ui-ux',
    iconName: 'Layout'
  },
  {
    title: 'Motion & 3D Graphics',
    description: 'Kinetic typography, animated logos, and lower thirds',
    path: '/services#motion-graphics',
    iconName: 'Sparkles'
  },
  // Work page hidden for now
  // {
  //   title: 'Recent Case Studies',
  //   description: 'Explore viral client campaigns with 10M+ aggregate views',
  //   path: '/work',
  //   badge: 'New',
  //   iconName: 'FolderGit2'
  // },
  {
    title: 'Pricing & Plans',
    description: 'Transparent monthly plans or custom project scope',
    path: '/pricing',
    iconName: 'Tag'
  }
];
