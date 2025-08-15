import React from 'react';
import PageLayout from './PageLayout';

export const AboutPage: React.FC = () => (
    <PageLayout
        title="Who We Are"
        subtitle="Meet the team building the future of technology infrastructure."
    >
        <div className="bg-[#1C1C1C] border border-gray-700/50 rounded-2xl p-8 md:p-12 text-left space-y-6 text-gray-300">
            <p className="text-lg">
                Founded in 2020, Modall was born from a vision to revolutionize the digital landscape. We are a passionate team of engineers, designers, and strategists dedicated to building robust, scalable, and future-proof technology infrastructure. Our collective experience spans decades across enterprise software, cloud computing, and user-centric design.
            </p>
            <p>
                Our mission is to empower businesses by providing them with the custom tools they need to thrive in an ever-evolving market. We believe in the power of collaboration, innovation, and unwavering quality. We don't just build products; we build partnerships that foster growth and success.
            </p>
            <p>
                From our headquarters in Silicon Valley, we serve a global clientele, helping startups and Fortune 500 companies alike navigate their digital transformation journeys. At Modall, we're not just observing the future—we're building it.
            </p>
        </div>
    </PageLayout>
);
