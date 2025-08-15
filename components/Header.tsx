import React from 'react';
import { HomeIcon, BriefcaseIcon, RssIcon } from '../constants';
import { GiBearFace } from "react-icons/gi";

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    const navItems = [
        { key: 'home', label: 'Home', icon: HomeIcon },
        { key: 'work', label: 'Work', icon: BriefcaseIcon },
        { key: 'blog', label: 'Blog', icon: RssIcon },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, page: string) => {
        e.preventDefault();
        onNavigate(page);
    };

    return (
        <header className="py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
                <GiBearFace className="w-8 h-8 md:w-9 md:h-9 text-white" />
            </div>
            <nav className="flex items-center space-x-1 bg-[#1C1C1C] p-1 rounded-full border border-gray-700/50">
                {navItems.map(item => (
                    <button
                        key={item.key}
                        onClick={(e) => handleNavClick(e, item.key)}
                        className={`transition-colors flex items-center justify-center space-x-2 rounded-full px-4 py-2 text-sm font-medium ${currentPage === item.key ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
                        aria-label={item.label}
                        title={item.label}
                    >
                        <item.icon className="h-5 w-5"/>
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;