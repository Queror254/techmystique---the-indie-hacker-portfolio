import React from 'react';
import { FaMedium, FaDev } from 'react-icons/fa';
import { ArrowUpRightIcon } from '../constants';

const BlogLinkCard: React.FC<{
    icon: React.ReactNode;
    name: string;
    description: string;
    href: string;
}> = ({ icon, name, description, href }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#1C1C1C] p-6 rounded-lg border border-gray-800/80 flex items-center justify-between hover:border-gray-700 transition-colors group"
    >
        <div className="flex items-center space-x-4">
            <div className="text-2xl text-gray-400 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-white text-lg">{name}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
        <ArrowUpRightIcon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
    </a>
);


export const BlogPage: React.FC = () => (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
                love reading? go subscribe 📚
            </h1>
            <p className="mt-4 text-lg text-gray-500">
                My personal blog is still a work-in-progress, but you can find my articles on these platforms.
            </p>
        </div>

        <div className="space-y-4">
            <BlogLinkCard
                icon={<FaMedium />}
                name="Medium"
                description="In-depth articles and tutorials on web development, tech leadership, and indie hacking."
                href="#"
            />
            <BlogLinkCard
                icon={<FaDev />}
                name="Dev.to"
                description="Practical tips, code snippets, and thoughts on the latest trends in the developer community."
                href="#"
            />
        </div>
    </div>
);