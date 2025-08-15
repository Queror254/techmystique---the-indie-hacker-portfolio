import React from 'react';

interface PageLayoutProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => {
    return (
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
                    {title}
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                    {subtitle}
                </p>
            </div>
            {children && (
                <div className="mt-12 max-w-4xl mx-auto">
                    {children}
                </div>
            )}
        </div>
    );
};

export default PageLayout;
