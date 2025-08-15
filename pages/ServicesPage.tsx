import React from 'react';
import PageLayout from './PageLayout';
import { ModallLogoIcon } from '../constants';

const ServiceCard: React.FC<{title: string, description: string}> = ({title, description}) => (
    <div className="bg-[#1C1C1C] p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-colors">
        <div className="bg-gray-700/50 p-3 rounded-lg w-min mb-4">
            <ModallLogoIcon className="w-6 h-6 text-white"/>
        </div>
        <h3 className="font-semibold text-white text-xl">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
    </div>
);

export const ServicesPage: React.FC = () => (
    <PageLayout
        title="Our Services"
        subtitle="A look at what we can do for your business."
    >
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
                title="Custom Web Applications"
                description="Bespoke web platforms, dashboards, and portals tailored precisely to your business processes and customer needs."
            />
            <ServiceCard 
                title="Mobile App Development"
                description="Engaging and high-performance native and cross-platform mobile apps for iOS and Android."
            />
            <ServiceCard 
                title="Cloud & DevOps"
                description="Infrastructure automation, CI/CD pipelines, and cloud architecture to ensure scalability and reliability."
            />
            <ServiceCard 
                title="AI & Machine Learning"
                description="Integrate artificial intelligence to unlock insights, automate tasks, and create intelligent products."
            />
             <ServiceCard 
                title="UI/UX Design"
                description="Crafting intuitive and beautiful user interfaces that deliver exceptional user experiences."
            />
             <ServiceCard 
                title="API & Integrations"
                description="Developing robust APIs and integrating third-party services to create a seamless software ecosystem."
            />
        </div>
    </PageLayout>
);
