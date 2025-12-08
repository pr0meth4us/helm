export type ProjectCategory = 'Government' | 'Education' | 'AI/ML' | 'Tool' | 'Finance';

export interface ProjectLink {
    label: string;
    url: string;
    type: 'github' | 'demo' | 'dedicated-site';
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