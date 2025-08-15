import React from 'react';
import PageLayout from './PageLayout';

const CaseStudyCard: React.FC<{title: string, industry: string, description: string}> = ({title, industry, description}) => (
     <div className="bg-[#1C1C1C] p-6 rounded-2xl border border-gray-700/50 overflow-hidden text-left">
        <p className="text-sm font-medium text-indigo-400">{industry}</p>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
        <p className="text-gray-400 mt-3 text-sm">{description}</p>
        <a href="#" className="text-white font-semibold text-sm mt-6 inline-block hover:text-indigo-400 transition-colors">Read case study &rarr;</a>
    </div>
);

export const CaseStudiesPage: React.FC = () => (
    <PageLayout
        title="Our Work in Action"
        subtitle="See how we've helped businesses transform and scale."
    >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
                industry="FinTech"
                title="Scaling a Payment Gateway for a Premier E-commerce Platform"
                description="We re-architected a monolithic payment system into a microservices-based architecture, improving transaction throughput by 500% and reducing downtime to zero."
            />
             <CaseStudyCard
                industry="Healthcare"
                title="Developing a HIPAA-Compliant Telehealth Mobile Application"
                description="Built a cross-platform mobile app enabling secure video consultations, which onboarded 100,000+ patients in its first six months."
            />
             <CaseStudyCard
                industry="SaaS"
                title="AI-Powered Analytics for a Leading Project Management Tool"
                description="Integrated a machine learning model to provide predictive project completion dates and resource allocation suggestions, increasing user engagement by 35%."
            />
             <CaseStudyCard
                industry="Logistics"
                title="Real-Time Fleet Tracking and Optimization Dashboard"
                description="Created a custom web dashboard with live GPS tracking and route optimization algorithms, resulting in a 15% reduction in fuel costs for our client."
            />
        </div>
    </PageLayout>
);
