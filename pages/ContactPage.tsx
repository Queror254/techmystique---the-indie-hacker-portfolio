import React from 'react';
import PageLayout from './PageLayout';

const InputField: React.FC<{id: string, label: string, type?: string, placeholder: string}> = ({id, label, type="text", placeholder}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 text-left mb-2">{label}</label>
        <input 
            type={type} 
            id={id}
            name={id}
            className="w-full bg-[#1C1C1C] border border-gray-600/80 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder={placeholder}
        />
    </div>
);

export const ContactPage: React.FC = () => {
    return (
        <PageLayout
            title="Get in Touch"
            subtitle="Have a project in mind or just want to say hello? We'd love to hear from you."
        >
            <div className="bg-[#1C1C1C] border border-gray-700/50 rounded-2xl p-8 md:p-12">
                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField id="name" label="Full Name" placeholder="John Doe" />
                        <InputField id="email" label="Email Address" type="email" placeholder="john.doe@example.com" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 text-left mb-2">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={6}
                            className="w-full bg-[#1C1C1C] border border-gray-600/80 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            placeholder="Tell us about your project..."
                        ></textarea>
                     </div>
                     <div className="text-right">
                         <button type="submit" className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2 text-sm ml-auto">
                            <span>Send Message</span>
                        </button>
                     </div>
                </form>
            </div>
        </PageLayout>
    );
};
