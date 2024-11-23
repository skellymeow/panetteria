export const ANIMATIONS = {
  scroll: {
    fadeIn: "animate-on-scroll fade-in-view",
    slideUp: "animate-on-scroll slide-up-view",
    slideInRight: "animate-on-scroll slide-in-right-view",
    slideInLeft: "animate-on-scroll slide-in-left-view",
    scaleUp: "animate-on-scroll scale-up-view",
  }
} as const

export const LAYOUT = {
  header: {
    height: "4rem",
  },
  section: {
    spacing: {
      default: "section",
      hero: "min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden border-b",
      fold: "py-32 md:py-40",
    },
    container: {
      width: "max-w-[1200px]",
      padding: "px-5 md:px-[30px]",
    },
  },
  grid: {
    gap: {
      sm: "gap-4",
      md: "gap-6 md:gap-8",
      lg: "gap-8 md:gap-12",
      xl: "gap-12 md:gap-20",
    },
  },
} as const

export const STYLE = {
  card: {
    base: "rounded-xl border bg-card p-6 transition-all duration-300",
    hover: "hover:shadow-lg hover:-translate-y-1",
    feature: "bg-gradient-to-br from-accent/50 to-accent/30 p-6 rounded-xl",
    service: "bg-gradient-to-br from-secondary/10 to-transparent p-6 rounded-xl",
  },
  badge: {
    primary: "inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm",
    secondary: "inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm",
  },
  icon: {
    base: "size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center",
    feature: "size-8 text-primary mx-auto mb-3",
  },
  background: {
    pattern: "bg-grid-gray-100/50 [mask-image:radial-gradient(white,transparent_85%)] dark:bg-grid-gray-800/50",
    gradient: "bg-gradient-to-br from-background via-background to-accent/10",
  },
} as const

export const SPACING = {
  1: "var(--spacing-1)",
  2: "var(--spacing-2)",
  3: "var(--spacing-3)",
  4: "var(--spacing-4)",
  5: "var(--spacing-5)",
  6: "var(--spacing-6)",
  7: "var(--spacing-7)",
} as const

export const COLORS = {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    hover: "hsl(var(--primary-hover))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    hover: "hsl(var(--secondary-hover))",
  },
  success: "hsl(var(--success))",
  error: "hsl(var(--error))",
  warning: "hsl(var(--warning))",
  info: "hsl(var(--info))",
  background: {
    DEFAULT: "hsl(var(--background))",
    secondary: "hsl(var(--background-secondary))",
  },
  foreground: "hsl(var(--foreground))",
  muted: "hsl(var(--muted))",
  border: "hsl(var(--border))",
} as const

export const SIZES = {
  container: "1200px",
  radius: {
    sm: "var(--radius-sm)",
    DEFAULT: "var(--radius)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
  },
  hero: {
    height: "calc(100vh - 70px)", // 70px is header height
    minHeight: "600px",
  },
} as const

export const FONTS = {
  primary: "Roboto, system-ui, sans-serif",
  heading: "Montserrat, system-ui, sans-serif",
} as const

export const TRANSITIONS = {
  fast: "var(--transition-fast)",
  base: "var(--transition-base)",
  slow: "var(--transition-slow)",
  ease: {
    default: "var(--ease-default)",
    in: "var(--ease-in)",
    out: "var(--ease-out)",
    bounce: "var(--ease-bounce)",
  },
} as const

export const HERO_CONTENT = {
  badge: "Professional Services",
  title: "Transform Your Business Today",
  subtitle: "Professional Solutions for Modern Challenges",
  description: "Elevate your business with our professional solutions and expert services.",
  cta: {
    primary: "Get Started",
    secondary: "Learn More",
  },
} as const

export const ABOUT_CONTENT = {
  title: "Excellence in Professional Services",
  description: "With years of experience and a commitment to quality, we deliver exceptional results that help businesses thrive and grow in today's competitive landscape.",
} as const

export const SERVICES = [
  {
    id: 1,
    title: "Professional Consulting",
    description: "Strategic guidance to help your business reach its full potential.",
    icon: "Briefcase",
    benefits: [
      "Comprehensive business analysis",
      "Custom growth strategies",
      "Market research & insights",
      "Performance optimization"
    ],
    pricing: "$150/hour"
  },
  {
    id: 2,
    title: "Technical Services",
    description: "Expert technical solutions with attention to detail.",
    icon: "Wrench",
    benefits: [
      "24/7 emergency support",
      "Preventive maintenance",
      "Quality assurance",
      "Latest technology"
    ],
    pricing: "$99/service"
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Ensuring excellence in every aspect of your business.",
    icon: "Medal",
    benefits: [
      "Rigorous testing protocols",
      "Detailed documentation",
      "Industry compliance",
      "Regular audits"
    ],
    pricing: "Custom Quote"
  },
] as const

export const MAP_CONFIG = {
  center: {
    lat: 42.1034,
    lng: -83.0886
  },
  zoom: 14,
  address: "248 Ramsay St, Amherstburg, ON N9V 1Y2",
} as const

export const SITE_CONFIG = {
  name: "The Panetteria",
  description: "Artisanal bakery in Amherstburg, Ontario",
  contact: {
    phone: "(519) 730-1801",
    email: "thepanetteria@gmail.com",
    address: "248 Ramsay St, Amherstburg, ON N9V 1Y2",
  },
  social: {
    facebook: "https://www.facebook.com/thepanetteria",
    instagram: "https://www.instagram.com/thepanetteria"
  },
  hours: {
    monday: "Closed",
    tuesday: "Closed",
    wednesday: "9am - 3pm",
    thursday: "9am - 3pm",
    friday: "9am - 4pm",
    saturday: "9am - 4pm",
    sunday: "9am - 3pm"
  }
} as const

export const LEAD_FORM = {
  title: "Let's Get Started",
  submitButton: "Send Message",
  success: {
    title: "Thanks for reaching out!",
    message: "We'll get back to you within 24 hours.",
  },
} as const

export const CTA_CONTENT = {
  badge: "Ready to get started?",
  title: "Transform Your Business Today",
  description: "Join hundreds of satisfied clients who have already taken their business to the next level.",
  primary: "Get Started",
  secondary: "View Services",
} as const

export const FEATURES = [
  {
    id: 1,
    title: "Proven Excellence",
    description: "Industry-leading solutions backed by years of expertise and success.",
    icon: "Star",
  },
  {
    id: 2,
    title: "Customer-Focused",
    description: "Dedicated support and personalized attention to exceed expectations.",
    icon: "Users",
  },
  {
    id: 3,
    title: "Innovation First",
    description: "Cutting-edge approaches that keep you ahead of the competition.",
    icon: "Lightning",
  },
  {
    id: 4,
    title: "Reliable Support",
    description: "24/7 assistance and ongoing maintenance to ensure your success.",
    icon: "Headset",
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Generic positive review about quality service.",
    author: "First Person",
    role: "Generic Title, Company",
    rating: 5,
  },
  {
    id: 2,
    quote: "Another generic review about great experience.",
    author: "Second Person", 
    role: "Another Title, Company",
    rating: 5,
  },
  {
    id: 3,
    quote: "Third generic review praising service.",
    author: "Third Person",
    role: "Some Title, Company",
    rating: 5,
  },
] as const

export const STATS = [
  { label: "Years Experience", value: "10+", icon: "Clock" },
  { label: "Satisfied Clients", value: "500+", icon: "Users" },
  { label: "Projects Completed", value: "1000+", icon: "Trophy" },
  { label: "Success Rate", value: "99%", icon: "Star" },
] as const

export const FAQ = [
  {
    question: "What services do you offer?",
    answer: "We provide a comprehensive range of professional services tailored to meet your specific needs. Contact us to learn more about how we can help your business grow.",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply reach out through our contact form or give us a call, and our team will guide you through the process.",
  },
  {
    question: "What are your rates?",
    answer: "Our rates vary based on project scope and requirements. We offer competitive pricing and customized solutions to fit your budget.",
  },
  {
    question: "How long does it typically take?",
    answer: "Project timelines vary depending on complexity and scope. We'll provide a detailed timeline during our initial consultation.",
  },
] as const

export const MILESTONES = [
  {
    year: "2014",
    title: "Company Started",
    description: "Generic founding description"
  },
  {
    year: "2016",
    title: "First Milestone",
    description: "Description of first major achievement"
  },
  {
    year: "2019", 
    title: "Second Milestone",
    description: "Description of second major achievement"
  },
  {
    year: "2021",
    title: "Third Milestone", 
    description: "Description of third major achievement"
  },
  {
    year: "2024",
    title: "Recent Milestone",
    description: "Description of most recent achievement"
  }
] as const

export const THEME_CONFIG = {
  colors: {
    primary: { hue: 217, saturation: 89, lightness: 50 },
    secondary: { hue: 187, saturation: 75, lightness: 40 },
    semantic: {
      success: 'var(--secondary)',
      error: '0 84% 60%',
      info: 'var(--primary)',
    }
  },
  animation: {
    duration: {
      fast: '150ms',
      base: '250ms',
      slow: '350ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },
  grid: {
    light: 'rgb(243 244 246 / 0.1)',
    dark: 'rgb(31 41 55 / 0.1)',
    size: '32px'
  }
} as const

export const MENU_CONTENT = {
  intro: "The following is a sample of The Panetteria's staples. However, we encourage you to follow us on Instagram and Facebook for more up-to-date information regarding changing flavours and new products!",
  categories: [
    {
      title: "Breads",
      items: [
        "Classic Sourdough",
        "Multigrain Sourdough",
        "Focaccia",
        "Baguette",
        "Olive Sourdough (weekends)",
        "Rye Sourdough (weekends)",
        "Walnut-Raisin Sourdough (weekends)",
      ]
    },
    {
      title: "Pastries",
      items: [
        "Croissant",
        "Danish",
        "Pain au Chocolat",
        "Cookies",
        "Bars/Brownies",
        "Cinnamon Buns",
        "& More!",
      ]
    },
    {
      title: "Lunch",
      items: [
        "Sandwiches",
        "Quiche",
        "Pizza",
      ]
    }
  ],
  allergyNote: "Please note: All efforts are made to accommodate allergies. However, given the size of our facility, we cannot guarantee that anything is 100% free of flour particles. For more information please contact us directly with your specific inquiries.",
  gallery: [
    "AlmondCroissant.png",
    "AlmondTart.png",
    "strawberry-tart.jpg",
    "ChocolateTart.png",
    "Croissant3.png",
    "cinnamon-bun.jpg",
    "frenchbread-wall.jpg",
    "meatpie.jpg",
    "moody-tart.jpg",
    "peach-tart.jpg",
    "Pie3.png",
    "poc.jpg",
    "raspberry-cookie.jpg",
    "row-of-croissants.jpg",
    "sourdough-sunny.jpg",
    "sourdough-window.jpg",
    "Sourdough2.png",
    "tarts.jpg",
    "TomatoTart.png",
    "WalnutRaisin2.png",
    "wholewheat-sourdough.jpg"
  ]
} as const 