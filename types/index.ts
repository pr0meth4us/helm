export type ProjectCategory = 'Government' | 'Education' | 'AI/ML' | 'Tool' | 'Finance';

export interface ProjectLink {
    label: string;
    url: string; // Can be '#' for private links
    type: 'github' | 'demo' | 'dedicated-site' | 'private'; // Added 'private'
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    category: ProjectCategory;
    description: string;
    techStack: string[];
    coverImage: string;
    links: ProjectLink[];
    isCommercial: boolean;
}