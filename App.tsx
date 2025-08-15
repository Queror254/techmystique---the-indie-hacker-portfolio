import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'work':
                return <ProjectsPage />;
            case 'blog':
                return <BlogPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-[#111111] text-gray-300 font-sans flex flex-col">
            <div className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-4">
                    <Header currentPage={currentPage} onNavigate={handleNavigate} />
                </div>
            </div>

            <main className="flex-grow">
                {renderPage()}
            </main>

            <Footer />
        </div>
    );
};

export default App;