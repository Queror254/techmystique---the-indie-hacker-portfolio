import React from 'react';
import { ArrowUpRightIcon } from '../constants';

const TechTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="bg-gray-800 text-gray-400 text-xs font-medium px-2 py-1 rounded">
        {children}
    </span>
);

const ProjectCard: React.FC<{
    imgSrc: string;
    title: string;
    role: string;
    description: string;
    link: string;
    linkType: 'Website' | 'Github';
    tech: string[];
    industries: string[];
}> = ({ imgSrc, title, role, description, link, linkType, tech, industries }) => (
    <div className="bg-[#1C1C1C] rounded-lg p-3 border border-gray-800/80">
        <img src={imgSrc} alt={title} className="rounded-md w-full h-auto" />
        <div className="p-3">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-sm text-gray-400">{role}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sm text-white border border-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                    <span>{linkType}</span>
                    <ArrowUpRightIcon className="w-4 h-4" />
                </a>
            </div>
            <p className="text-gray-400 mt-4">{description}</p>
            <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Tech stack</h4>
                <div className="flex flex-wrap gap-2">
                    {tech.map(t => <TechTag key={t}>{t}</TechTag>)}
                </div>
            </div>
            <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Industries</h4>
                <div className="flex flex-wrap gap-2">
                    {industries.map(i => <TechTag key={i}>{i}</TechTag>)}
                </div>
            </div>
        </div>
    </div>
);

export const ProjectsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
                here's what i built so far 🔨
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                    imgSrc="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600"
                    title="Topicyai"
                    role="Founder & CTO"
                    description="TopicfyAI is a smart browser extension that transforms scattered tabs and PDFs into an organized research library. Capture any webpage, online PDF, or uploaded document, group them by topic, and let AI generate concise, actionable summaries—so you spend less time sifting and more time understanding."
                    link="#"
                    linkType="Website"
                    tech={['react', 'typescript', 'git', 'wxt']}
                    industries={['extenrion', 'git', 'startup']}
                />
            </div>
        </div>
    );
};
