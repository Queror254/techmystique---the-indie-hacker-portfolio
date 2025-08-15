import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-24 mb-8">
            <div className="max-w-5xl mx-auto px-4 text-center">
                 <p className="text-sm text-gray-500">© {new Date().getFullYear()} techmystique – the indie hacker</p>
            </div>
        </footer>
    );
};

export default Footer;