import React from 'react';
import PageLayout from './PageLayout';
import { AnalyticsArrowIcon } from '../constants';

const IndustryCard: React.FC<{title: string, description: string}> = ({title, description}) => (
    <div className="bg-[#1C1C1C] p-6 rounded-xl border border-gray-700/50">
        <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white text-xl">{title}</h3>
            <AnalyticsArrowIcon className="w-6 h-6 text-gray-400" />
        </div>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
    </div>
);

export const IndustriesPage: React.FC = () => (
    <PageLayout
        title="Industries We Serve"
        subtitle="Applying our technical expertise to solve challenges across various sectors."
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <IndustryCard title="FinTech" description="Building secure, compliant, and high-performance financial products, from payment gateways to trading platforms." />
            <IndustryCard title="Healthcare" description="Developing HIPAA-compliant software for telehealth, patient management, and medical data analysis." />
            <IndustryCard title="E-commerce & Retail" description="Creating scalable online storefronts, recommendation engines, and supply chain management tools." />
            <IndustryCard title="SaaS" description="Architecting and building multi-tenant, cloud-native Software-as-a-Service products for B2B and B2C markets." />
            <IndustryCard title="Logistics & Supply Chain" description="Implementing real-time tracking, inventory management, and route optimization solutions." />
            <IndustryCard title="Startups" description="Partnering with early-stage companies to build MVPs, scale infrastructure, and achieve product-market fit." />
        </div>
    </PageLayout>
);