import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'finance-bot',
        slug: 'expenditure-tracker',
        title: 'Expenditure Tracker',
        tagline: 'Financial responsibility via Telegram',
        category: 'Finance',
        description: 'Logs every bit of cash in & out straight from Telegram so users stay on top of their money. Currently running as a Telegram Bot API integration.',
        techStack: ['Flask', 'Telegram Bot API'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1752570368/ChatGPT_Image_Jul_15_2025_04_05_16_PM_ql96m6.png',
        isCommercial: true,
        links: [
            { label: 'Visit Website', url: 'https://t.me/expenditure_tracker_GUI_bot', type: 'dedicated-site' },
            { label: 'GitHub', url: 'https://github.com/pr0meth4us/monolith-services', type: 'github' }
        ]
    },
    {
        id: 'lpr-system',
        slug: 'cambodia-lpr',
        title: 'License Plate Recognition',
        tagline: 'AI-driven vehicle identification for Cambodia',
        category: 'AI/ML',
        description: 'A specialized license plate recognition system for Cambodian vehicles. Fine-tuned a YOLO-based segmentation and detection model to accurately locate license plates and segment the number/province regions.',
        techStack: ['Python', 'Flask', 'YOLO', 'PARSeq OCR', 'Next.js', 'Docker'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1747767907/Screenshot_2025-05-21_at_2.03.49_in_the_morning_qlq6s2.png',
        isCommercial: false,
        links: [
            { label: 'Live Demo', url: 'https://camlpr.vercel.app/', type: 'demo' },
            { label: 'Source Code', url: 'https://github.com/pr0meth4us/camlpr', type: 'github' }
        ]
    },
    {
        id: 'rachana',
        slug: 'rachana-gov',
        title: 'Rachana.gov.kh',
        tagline: 'The unified design system for Cambodian public services',
        category: 'Government',
        description: 'Government design system to universalize the interface of digital public services. Focuses on accessibility, consistency, and standardizing the digital face of the government.',
        techStack: ['React', 'Bootstrap', 'Jekyll', 'Content Writing'],
        coverImage: 'https://rachana.gov.kh/assets/uncompressed_images/rachana.svg',
        isCommercial: false,
        links: [
            { label: 'Live Demo', url: 'https://rachana.gov.kh/', type: 'demo' },
            { label: 'GitHub', url: 'https://github.com/DGTDept/Rachana', type: 'github' }
        ]
    },
    {
        id: 'ecampus',
        slug: 'aupp-ecampus',
        title: 'AUPP eCampus',
        tagline: 'Cost-efficient eLearning architecture',
        category: 'Education',
        description: 'An eLearning portal designed to be cost efficient by utilizing free trial provisions from various providers. Features a complete LMS structure with separated frontend and backend services.',
        techStack: ['React', 'Flask', 'MongoDB', 'Redis', 'Supabase', 'PayPal API'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1749468613/cool_logo_yvc7jr.jpg',
        isCommercial: false,
        links: [
            { label: 'Frontend', url: 'https://auppecampus.vercel.app/', type: 'demo' },
            { label: 'GitHub', url: 'https://github.com/pr0meth4us/AUPP-eCampus', type: 'github' }
        ]
    },
    {
        id: 'chat-analyzer',
        slug: 'chat-analyzer',
        title: 'Chat Message Analyzer',
        tagline: 'Decoding relationship dynamics through data',
        category: 'AI/ML',
        description: 'Transforms exported chat logs into insights about communication patterns. Supports Telegram, Facebook, Instagram, iMessage, Discord, and TikTok exports in HTML/JSON formats.',
        techStack: ['Flask', 'NLP', 'HTML/JSON Parsing'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1749548452/ChatGPT_Image_Jun_10_2025_04_40_38_PM_oj20ug.png',
        isCommercial: false,
        links: [
            { label: 'Dashboard Demo', url: 'https://chat-analysis-beryl.vercel.app/demo', type: 'demo' },
            { label: 'GitHub', url: 'https://github.com/pr0meth4us/chat-analysis', type: 'github' }
        ]
    },
    {
        id: 'mnemosyne',
        slug: 'mnemosyne',
        title: 'Mnemosyne',
        tagline: 'Client-side TikTok chat reconstruction',
        category: 'Tool',
        description: 'Named after the goddess of memory. Recreates TikTok conversation/chatlogs with a high-fidelity interface. Processes are done entirely on the client side with no database, preserving privacy.',
        techStack: ['Next.js', 'Tailwind CSS'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1741504865/mnemosyne_y4vsar.png',
        isCommercial: false,
        links: [
            { label: 'Live App', url: 'https://mnemosyne-hazel.vercel.app/', type: 'demo' },
            { label: 'GitHub', url: 'https://github.com/pr0meth4us/Mnemosyne', type: 'github' }
        ]
    },
    {
        id: 'form-generator',
        slug: 'form-generator',
        title: 'Form Generator',
        tagline: 'Better survey UX with image selection',
        category: 'Tool',
        description: 'Generates forms fast and lets you view results. Prioritizes simplicity and accessibility. Created to solve the limitation of Google Forms regarding image-select options.',
        techStack: ['Next.js', 'MongoDB'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1751178610/form_suwmgv.png',
        isCommercial: false,
        links: [
            { label: 'Live App', url: 'https://coolform-generator.vercel.app/dashboard', type: 'demo' },
            { label: 'GitHub', url: 'https://github.com/pr0meth4us/form-generator', type: 'github' }
        ]
    },
    {
        id: 'grouper',
        slug: 'grouper',
        title: 'Grouper',
        tagline: 'Randomized team sorting utility',
        category: 'Tool',
        description: 'Sorts a list of names into random groups. It can save lists for reuse later. Useful for team leaders or class monitors.',
        techStack: ['SpringBoot', 'Next.js', 'MongoDB'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1751178603/grouper_jdyvhs.png',
        isCommercial: false,
        links: [
            { label: 'Live App', url: 'https://grouper-five.vercel.app/', type: 'demo' },
            { label: 'GitHub', url: 'https://github.com/pr0meth4us/grouper', type: 'github' }
        ]
    }
];