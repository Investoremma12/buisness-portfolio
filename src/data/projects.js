// NOTE: Descriptions, features, and results below are placeholder copy
// written for structure/tone. Replace with verified specifics about each
// live project before sending this to clients.

export const PROJECTS = [
  {
    id: 'tech-trove',
    title: 'Tech Trove',
    category: 'E-commerce',
    tagline: 'A modern online marketplace built for speed and effortless shopping.',
    description:
      'Tech Trove is a full-stack e-commerce storefront covering electronics, accessories, and everyday gadgets. The build focuses on fast product discovery, a frictionless checkout flow, and a clean visual system that keeps the catalog feeling premium rather than cluttered.',
    problem:
      'Most small e-commerce storefronts feel slow and generic, which costs trust and conversions before a visitor even reaches the product page.',
    process:
      'Started with a content audit of the product catalog, then designed a grid-first browsing experience with fast filtering. Performance was treated as a feature from day one — lazy-loaded images, optimistic UI on cart actions, and a lightweight component tree.',
    results: [
      'Sub-second perceived load on product listing pages',
      'Mobile-first checkout flow with minimal steps to purchase',
      'Scalable catalog structure ready for new product categories',
    ],
    features: [
      'Product catalog with category filtering',
      'Persistent cart with quantity management',
      'Responsive product detail views',
      'Search with live results',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://techtrove-nine.vercel.app/',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=900&q=80',
    ],
    color: '#7c5cff',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'E-commerce',
    tagline: 'A complete online marketplace from discovery to checkout.',
    description:
      'A general-purpose e-commerce platform built to handle multi-category product listings with an emphasis on reliability and a smooth purchase journey. The interface was designed to feel calm and trustworthy — clear pricing, clear stock status, no surprises at checkout.',
    problem:
      'Customers abandon carts when checkout feels uncertain or the site feels slow. The platform needed to remove every point of friction between "I want this" and "I bought this."',
    process:
      'Mapped the full purchase funnel before writing a single component, then built outward from the cart and checkout logic so the riskiest part of the experience was solid first.',
    results: [
      'Streamlined multi-step checkout reduced to essential fields only',
      'Type-safe state management across cart, inventory, and orders',
      'Clean component architecture that scales to new product types',
    ],
    features: [
      'Full shopping cart and checkout flow',
      'Type-safe data layer with TypeScript',
      'Order summary and confirmation states',
      'Responsive layouts across all breakpoints',
    ],
    tech: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://ecommerce-project-five-lilac.vercel.app/',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80',
    ],
    color: '#a78bfa',
  },
  {
    id: 'ocee-stores',
    title: 'Ocee Stores',
    category: 'Business',
    tagline: 'A business storefront site built to bring a local brand online.',
    description:
      'Ocee Stores needed a professional web presence that matched the quality of their in-person business — something a customer could find, trust, and act on immediately. The site was built around clarity: what they sell, where they are, and how to reach them.',
    problem:
      'The business had no website at all, which meant every potential customer searching online found nothing — a serious credibility gap against competitors who did have a web presence.',
    process:
      'Worked directly from the business\'s existing branding and product information to build a site that felt like a natural extension of the physical store, not a generic template dropped on top of it.',
    results: [
      'First professional web presence for the business',
      'Clear, mobile-first layout built for customers browsing on phones',
      'Direct contact paths (call, location) placed prominently throughout',
    ],
    features: [
      'Branded landing experience',
      'Product/service showcase sections',
      'Mobile-first responsive layout',
      'Direct contact and location integration',
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://ocee-stores.vercel.app/',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=900&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=900&q=80',
    ],
    color: '#7c5cff',
  },
]

export const CATEGORIES = ['All', 'E-commerce', 'Business', 'Landing Pages']
