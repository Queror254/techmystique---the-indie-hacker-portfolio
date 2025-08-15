import React from 'react';
import {   ArrowUpRightIcon } from '../constants';
import { FaAws, FaReact, FaNodeJs, FaEnvelope, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGo, SiVercel, SiSolidity, SiSolana } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaYoutube, FaTiktok, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const BuildingProjectCard: React.FC<{ title: string; description: string; status: string; link: string; tech: {icon: React.ReactNode; name: string}[] }> = ({ title, description, status, link, tech }) => (
    <div className="bg-[#1C1C1C] p-6 rounded-lg border border-gray-800/80 flex flex-col w-full h-full hover:border-gray-700 transition-colors">
        <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="bg-sky-900/60 text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">{status}</span>
        </div>
        <p className="mt-3 text-gray-400 flex-grow">
            {description}
        </p>
        <div className="mt-6 flex items-center justify-between">
            <div className="flex space-x-3">
                {tech.map(t => (
                    <div key={t.name} title={t.name} className="text-gray-400 hover:text-white transition-colors">
                        {t.icon}
                    </div>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center space-x-1.5">
                <span>Follow along</span>
                <ArrowUpRightIcon className="w-4 h-4" />
            </a>
        </div>
    </div>
);

const SocialLinkCard: React.FC<{ href: string, icon: React.ReactNode, handle: string, metric: string }> = ({ href, icon, handle, metric }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="bg-[#1C1C1C] p-4 rounded-lg flex justify-between items-center border border-gray-800/80 hover:border-gray-700 transition-colors group">
        <div className="flex items-center space-x-3">
            <div>{icon}</div>
            <div>
                <p className="font-semibold text-white">{handle}</p>
                <p className="text-sm text-gray-400">{metric}</p>
            </div>
        </div>
        <ArrowUpRightIcon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
    </a>
);

const TechIcon: React.FC<{ icon: React.ReactNode, name: string }> = ({ icon, name }) => (
    <div title={name} className="bg-[#1C1C1C] h-12 w-12 flex items-center justify-center rounded-lg border border-gray-800/80 text-gray-400 hover:text-white hover:border-gray-700 transition-colors">
        {icon}
    </div>
);

const HomePage: React.FC = () => {
    const techStack = [
        { icon: <FaAws className="w-6 h-6" />, name: "AWS" },
        { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
        { icon: <FaReact className="w-6 h-6" />, name: "React" },
        { icon: <SiNextdotjs className="w-6 h-6" />, name: "Next.js" },
        { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
        { icon: <SiGo className="w-6 h-6" />, name: "Go" },
        { icon: <SiVercel className="w-6 h-6" />, name: "Vercel" },
        { icon: <SiSolidity className="w-6 h-6" />, name: "Solidity" },
    ];
    
    const currentlyBuilding = [
        {
            title: "TopicfyAI",
            description: "Turns chaotic browsing into organized research. Capture web pages & PDFs, group them into topic libraries, and generate concise AI summaries.",
            status: "In Development",
            link: "#",
            tech: [
                { icon: <SiNextdotjs className="w-5 h-5" />, name: 'Next.js' },
                { icon: <SiTypescript className="w-5 h-5" />, name: 'TypeScript' },
                { icon: <SiVercel className="w-5 h-5" />, name: 'Vercel' },
                { icon: <FaBrain className="w-5 h-5" />, name: 'AI' }
            ]
        }
    ];


    return (
        <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
            <section className="space-y-6">
  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
    hi, i'm techmystique – full stack dev & indie hacker 👨‍💻
  </h1>

  <p className="text-gray-400">
    I’m a self-driven developer obsessed with building <span className="text-white">micro-SaaS tools</span> that solve real, everyday problems.
  </p>

  <p className="text-gray-400">
    By day, I’m refining my craft <span className="text-white">—</span> experimenting with <span className="text-white">new tech stacks</span>, tackling <span className="text-white">challenging projects</span>, and learning from some of the brightest minds in the industry.  
    By night (and often in the early mornings), I’m <span className="text-white">indie hacking</span> <span className="text-white">—</span> turning small, practical ideas into <span className="text-white">products</span> people actually use.
  </p>

  <p className="text-gray-400">
    Right now, my focus is on <span className="text-white">AI-powered applications</span>, <span className="text-white">automation tools</span>, and <span className="text-white">creative digital products</span> <span className="text-white">—</span> designed to make life simpler and more efficient for real people, not just techies.
  </p>

  <p className="text-gray-400">
    I’m still early in my indie hacking journey, but I’m <span className="text-white">sharing the process openly</span>, <span className="text-white">connecting with other makers</span>, and hopefully inspiring others to take the leap into building something of their own.
  </p>

  <p className="text-gray-400">
    If you love <span className="text-white">building</span>, <span className="text-white">experimenting</span>, or just <span className="text-white">geeking out over product ideas</span> <span className="text-white">—</span> we’ll get along just fine.
  </p>
</section>


            <section className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-6">Currently Building 🚀</h2>
                <div className="grid grid-cols-1 gap-6 max-w-full mx-auto">
                    {currentlyBuilding.map((project, index) => (
                        <BuildingProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </section>

            <section className="mt-16 space-y-4">
                 <p className="text-gray-400">
                 I wouldn’t call myself a writer, but I believe in sharing what I learn as I go. Everything here comes from real hands-on work — the small wins, the unexpected challenges, and the little “aha!” moments that might help someone else on a similar path.
                </p>
                <div className="space-y-3">
                    <SocialLinkCard href="https://x.com/techmystique_" icon={<FaXTwitter className="w-7 h-7" />} handle="@techmystique_" metric="follow along" />
                    <SocialLinkCard href="https://www.reddit.com/user/grandmaster_infinite/" icon={<FaReddit className="w-7 h-7 text-white" />} handle="@techmystique_" metric="follow along" />
                </div>
                <p className="text-gray-400">Across these platforms, I openly share my path as an indie hacker and what I’m learning, powered by this tech stack:</p>
            </section>
            
            <section className="mt-6">
                <div className="flex flex-wrap gap-3">
                    {techStack.map(tech => <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />)}
                </div>
            </section>

            <section className="mt-16 text-center">
                 <p className="text-gray-400 mb-4">
                    Want to collaborate or have a question? Let's connect. 👇
                </p>
                <div className="flex items-center justify-center">
                     <a 
                        href="mailto:techmystique.int@gmail.com"
                        className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors"
                    >
                        <FaEnvelope className="w-5 h-5" />
                        <span>Get in Touch</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HomePage;