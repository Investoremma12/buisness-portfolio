import personalWebsite from '../assets/project-images/personal-website.png';
import ecommerceWebsite from '../assets/project-images/ecommerce-project.png';
import oceeWebPic from '../assets/project-images/ocee-web-pic.png';
// NOTE: Descriptions, features, and results below are placeholder copy
// written for structure/tone. Replace with verified specifics about each
// live project before sending this to clients.

export const PROJECTS = [
	{
		id: 'tech-trove',
		title: 'Tech Trove',
		category: '',
		tagline:
			'A modern personal portfolio crafted to showcase expertise, projects, and digital solutions.',
		description:
			'Tech Trove is a professional portfolio website designed to showcase my web development skills, featured projects, services, and technical expertise. The platform was built with a strong emphasis on performance, elegant design, and user experience, creating a compelling digital presence for potential clients and collaborators.',
		problem:
			'Developers need a strong online presence to effectively showcase their skills, credibility, and previous work. Traditional resumes alone often fail to communicate technical capabilities and design expertise.',
		process:
			'The project was designed with a mobile-first approach, focusing on clean layouts, intuitive navigation, and engaging animations. Each section was strategically structured to highlight projects, services, and technical skills while maintaining excellent performance and responsiveness across all devices.',
		results: [
			'Established a strong personal brand and professional online presence',
			'Created an engaging platform to showcase projects and services',
			'Delivered a fully responsive experience across desktop, tablet, and mobile devices',
		],
		features: [
			'Interactive project showcase',
			'Service presentation section',
			'Responsive modern design',
			'Smooth animations and transitions',
			'Professional contact section',
			'Optimized user experience across all devices',
		],
		tech: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
		liveUrl: 'https://techtrove-nine.vercel.app/',
		// NOTE: replace with your imported personalWebsite screenshot/asset
		image: `${personalWebsite}`,
		gallery: [`${personalWebsite}`, `${personalWebsite}`, `${personalWebsite}`],
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
		image: `${ecommerceWebsite}`,
		gallery: [
			`${ecommerceWebsite}`,
			`${ecommerceWebsite}`,
			`${ecommerceWebsite}`,
		],
		color: '#a78bfa',
	},
	{
		id: 'ocee-interiors',
		title: 'Ocee Interiors',
		category: 'Interior Design',
		tagline:
			'A premium showcase website designed to highlight exceptional interior spaces and inspire potential clients.',
		description:
			'Ocee Interiors is an information-based interior design website built to showcase elegant interior projects, furniture collections, and bespoke design solutions. Rather than selling products directly online, the platform serves as a digital showroom where visitors can explore designs, discover inspiration, and easily contact the business for enquiries and consultations.',
		problem:
			'Without a professional online presence, potential clients had no convenient way to view previous projects, explore available interior solutions, or learn about the company before making contact, resulting in missed opportunities and reduced credibility.',
		process:
			'The website was designed with visual storytelling at its core. Large imagery, elegant layouts, and carefully structured content were used to create a premium browsing experience. Special emphasis was placed on showcasing interior projects and making it easy for visitors to enquire about products and services.',
		results: [
			'Established a premium digital presence for the interior design brand',
			'Created an engaging online showroom for showcasing interior solutions',
			'Improved client enquiries through strategically placed contact options',
		],
		features: [
			'Project and interior showcase galleries',
			'Information-rich service sections',
			'Mobile-first responsive design',
			'Interactive portfolio presentation',
			'Consultation and enquiry contact forms',
			'Smooth animations and premium visual experience',
		],
		tech: ['React', 'Tailwind CSS', 'Framer Motion'],
		liveUrl: 'https://ocee-stores.vercel.app/',
		// NOTE: replace with your imported oceeWebPic screenshot/asset
		image: `${oceeWebPic}`,
		gallery: [`${oceeWebPic}`, `${oceeWebPic}`, `${oceeWebPic}`],
		color: '#7c5cff',
	},
];

export const CATEGORIES = [
	'All',
	'E-commerce',
	'Business',
	'Interior Design',
	'Landing Pages',
];
