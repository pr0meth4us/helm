import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'finance-bot',
        slug: 'savvify',
        title: 'Savvify',
        tagline: 'Telegram bot to track your daily spending',
        category: 'Finance',
        description: 'A dedicated financial intelligence unit. Logs every capital flow in & out via Telegram protocol. Designed for total situational awareness of personal assets without the clutter of traditional banking apps. Currently deployed as a live bot.',
        techStack: ['Flask', 'Telegram API', 'Monolith Architecture'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1765329932/logo_zyan4g.png',
        isCommercial: true,
        links: [
            { label: 'Start Using Bot', url: 'https://savvify-web.vercel.app/', type: 'dedicated-site' },

            // === CLASSIFIED: Code not shared ===
            { label: 'Source Code', url: '#', type: 'private' }
        ]
    },
    {
        id: 'project-404',
        slug: 'the-404-project',
        title: 'The 404 Project',
        tagline: 'Custom-built romantic website service',
        category: 'Tool',
        description: 'A premium, fully interactive web experience designed for grand romantic gestures. Features background audio, password-protected reveal, and cinematic storytelling animations. Perfect for anniversaries, proposals, or long-distance relationships. You provide the content, and I personally engineer a bespoke version tailored specifically for your person.',
        techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Audio Sync'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1765330044/404_n2vt6z.png',
        isCommercial: true,
        links: [
            {
                label: 'View Live Demo',
                url: 'https://pr0meth4us.github.io/The-404-project/',
                type: 'demo'
            },
            {
                label: 'Order Custom Build',
                url: 'mailto:phearaneron.soeung@gmail.com?subject=I want to order a custom 404 Project site',
                type: 'dedicated-site'
            },
            // === CLASSIFIED: Code not shared ===
            { label: 'Source Code', url: '#', type: 'private' }
        ]
    },
    {
        id: 'lpr-system',
        slug: 'cambodia-lpr',
        title: 'Optical Identification: LPR',
        tagline: 'AI that reads Khmer license plates',
        category: 'AI/ML',
        description: 'The watchful eye. A custom computer vision pipeline calibrated specifically for the entropy of Cambodian traffic. Fine-tuned YOLO segmentation locates plates; PARSeq interprets the glyphs. It brings structure to chaos.',
        techStack: ['Python', 'YOLOv8', 'PARSeq OCR', 'Docker'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1747767907/Screenshot_2025-05-21_at_2.03.49_in_the_morning_qlq6s2.png',
        isCommercial: false,
        links: [
            { label: 'LIVE FEED', url: 'https://camlpr.vercel.app/', type: 'demo' },
            { label: 'BLUEPRINT', url: 'https://github.com/pr0meth4us/camlpr', type: 'github' }
        ]
    },
    {
        id: 'rachana',
        slug: 'rachana-gov',
        title: 'Protocol: RACHANA',
        tagline: 'Official design system for Cambodia gov sites',
        category: 'Government',
        description: 'The unified design language for the Cambodian Digital Government. A massive infrastructure project to ensure every digital touchpoint of the state speaks the same visual language. Compliant. Accessible. Absolute.',
        techStack: ['React', 'Bootstrap', 'Jekyll', 'System Design'],
        coverImage: 'https://rachana.gov.kh/assets/uncompressed_images/rachana.svg',
        isCommercial: false,
        links: [
            { label: 'INSPECT SYSTEM', url: 'https://rachana.gov.kh/', type: 'demo' },
            { label: 'BLUEPRINT', url: 'https://github.com/DGTDept/Rachana', type: 'github' }
        ]
    },
    {
        id: 'mnemosyne',
        slug: 'mnemosyne',
        title: 'Project Mnemosyne',
        tagline: 'Tool to recreate fake TikTok chats',
        category: 'Tool',
        description: 'Memory is fragile; data is permanent. Mnemosyne reconstructs lost digital conversations (TikTok logs) entirely client-side. It ensures that what is recovered remains only in your hands. No server tracking. No footprints.',
        techStack: ['Next.js', 'Tailwind', 'Client-Side Encryption'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1741504865/mnemosyne_y4vsar.png',
        isCommercial: false,
        links: [
            { label: 'EXECUTE TOOL', url: 'https://mnemosyne-hazel.vercel.app/', type: 'demo' },
            { label: 'BLUEPRINT', url: 'https://github.com/pr0meth4us/Mnemosyne', type: 'github' }
        ]
    },
    {
        id: 'chat-analyzer',
        slug: 'chat-analyzer',
        title: 'Relationship Decoder',
        tagline: 'See stats & patterns in your chat logs',
        category: 'AI/ML',
        description: 'Ingests raw HTML/JSON exports from Telegram, Discord, and Facebook. Outputs psychological profiles and communication patterns. It sees the patterns in human connection that you ignore.',
        techStack: ['Flask', 'NLP', 'Data Parsing'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1749548452/ChatGPT_Image_Jun_10_2025_04_40_38_PM_oj20ug.png',
        isCommercial: false,
        links: [
            { label: 'LAUNCH APP', url: 'https://chat-analysis-beryl.vercel.app/', type: 'demo' },
            { label: 'VIEW DASHBOARD', url: 'https://chat-analysis-beryl.vercel.app/demo', type: 'demo' },
            { label: 'BLUEPRINT', url: 'https://github.com/pr0meth4us/chat-analysis', type: 'github' }
        ]
    },
    {
        id: 'ecampus',
        slug: 'aupp-ecampus',
        title: 'AUPP eCampus Architecture',
        tagline: 'Full university portal built for $0 cost',
        category: 'Education',
        description: 'An experiment in extreme efficiency. A full-scale Learning Management System built entirely on free-tier provisions. Proving that robust educational architecture does not require massive capital.',
        techStack: ['React', 'Flask', 'Redis', 'Supabase'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1749468613/cool_logo_yvc7jr.jpg',
        isCommercial: false,
        links: [
            { label: 'ACCESS PORTAL', url: 'https://auppecampus.vercel.app/', type: 'demo' },
            { label: 'BLUEPRINT', url: 'https://github.com/pr0meth4us/AUPP-eCampus', type: 'github' }
        ]
    },
    {
        id: 'grouper',
        slug: 'grouper',
        title: 'Grouper Algorithm',
        tagline: 'Instantly sort people into random groups',
        category: 'Tool',
        description: 'A simple, ruthless algorithm for sorting humans into groups. It eliminates the social friction of team selection. Saves lists for reuse. Essential for leadership operations.',
        techStack: ['SpringBoot', 'Next.js', 'MongoDB'],
        coverImage: 'https://res.cloudinary.com/dktzt7yn1/image/upload/v1751178603/grouper_jdyvhs.png',
        isCommercial: false,
        links: [
            { label: 'EXECUTE', url: 'https://grouper-five.vercel.app/', type: 'demo' },
            { label: 'BLUEPRINT', url: 'https://github.com/pr0meth4us/grouper', type: 'github' }
        ]
    },
    {
        id: 'ache-of-time',
        slug: 'the-ache-of-time', // Matches the route /projects/the-ache-of-time
        title: 'The Ache of Time',
        tagline: 'Interactive Conceptual Art Piece',
        category: 'Tool',
        description: 'A standalone digital art installation exploring memory, distortion, and loss. Built with GSAP and raw HTML5 canvas to create a disorienting, non-linear narrative experience. It functions not as a utility, but as a vessel for "Saudade"—the presence of absence.',
        techStack: ['HTML5', 'GSAP Animation', 'WebGL', 'Audio Reactive'],
        coverImage: '/shattered.png',
        isCommercial: false,
        links: [
            {
                label: 'ENTER EXPERIENCE',
                url: '/ache.html', // This link will be used on the special page
                type: 'demo'
            },
            {
                label: 'SOURCE CODE',
                url: '#',
                type: 'private'
            }
        ]
    }
];