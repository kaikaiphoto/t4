/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  User, 
  Briefcase, 
  MessageSquare,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

// --- Mock Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI 写作助手",
    description: "一个强大的工具，利用先进的 LLM 帮助作者生成创意并润色文章。",
    tags: ["React", "TypeScript", "Tailwind", "Gemini API"],
    link: "#",
    image: "https://picsum.photos/seed/writing/800/600"
  },
  {
    id: 2,
    title: "EcoTrack 仪表盘",
    description: "为智能城市设计的实时环境监测仪表盘，用于追踪空气质量和能源消耗。",
    tags: ["Next.js", "D3.js", "PostgreSQL", "IoT"],
    link: "#",
    image: "https://picsum.photos/seed/eco/800/600"
  },
  {
    id: 3,
    title: "极简电商平台",
    description: "专注于高端生活方式产品的、高性能且易用的购物体验。",
    tags: ["React", "Shopify API", "Framer Motion"],
    link: "#",
    image: "https://picsum.photos/seed/shop/800/600"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '关于我', href: '#about' },
    { name: '项目案例', href: '#projects' },
    { name: '联系我', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white text-sm">JD</div>
          <span>康康无损伴奏</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all"
          >
            进群交流
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-neutral-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full py-3 bg-neutral-900 text-white text-center rounded-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            开放合作中
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-8">
            打造有<span className="italic">温度</span>的数字体验。
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl">
            我是一名设计师兼开发者，专注于创造简洁、实用且以用户为中心的应用。目前正在探索 AI 与人类创造力的结合点。
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-neutral-900 text-white rounded-full font-medium flex items-center gap-2 group"
            >
              查看项目
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="#" className="p-3 text-neutral-400 hover:text-neutral-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 text-neutral-400 hover:text-neutral-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 text-neutral-400 hover:text-neutral-900 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100">
            <img 
              src="https://picsum.photos/seed/portrait/800/1000" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900 rounded-full flex items-center justify-center text-white text-center p-4 transform rotate-12 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-tighter">5+ 年行业经验</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-serif font-medium mb-8">关于我</h2>
          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p>
              我的职业生涯始于平面设计，这为我在视觉层次和排版方面打下了坚实的基础。多年来，我转型为全栈开发人员，将这些设计变为现实。
            </p>
            <p>
              我的哲学很简单：技术应该是隐形的。我努力构建感觉自然直观的工具，消除用户与其目标之间的摩擦。
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4">核心技能</h4>
                <ul className="space-y-2 text-sm">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4">设计工具</h4>
                <ul className="space-y-2 text-sm">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>动效设计</li>
                  <li>原型制作</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif font-medium mb-4">精选案例</h2>
            <p className="text-neutral-500 max-w-md">一系列定义了我设计和工程方法的项目。</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neutral-500 transition-colors">
            查看全部 <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 px-2 py-1 border border-neutral-200 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900 text-white rounded-[3rem] mx-4 mb-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8">让我们一起 <br /> 创造精彩。</h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto">
          我随时准备讨论新项目、创意想法或成为您愿景一部分的机会。
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          <Mail size={24} />
          打个招呼
        </a>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-500 text-sm">© 2026 张三. 保留所有权利。</p>
          <div className="flex gap-8">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
