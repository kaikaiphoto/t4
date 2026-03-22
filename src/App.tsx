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
  ArrowUpRight,
  Layout,
  Server,
  Palette,
  Wrench,
  Music,
  Mic2,
  Headphones,
  Speaker,
  Volume2,
  Disc
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
    title: "无损伴奏提取案例",
    description: "利用 AI 技术从复杂音轨中完美分离人声与伴奏，保留极致音质细节。",
    tags: ["无损提取", "AI 分离", "音质增强"],
    link: "#",
    image: "https://picsum.photos/seed/music1/800/600"
  },
  {
    id: 2,
    title: "流行单曲后期混音",
    description: "为多位独立音乐人提供专业的人声修音与混音服务，打造商业级听感。",
    tags: ["混音工程", "人声修音", "母带处理"],
    link: "#",
    image: "https://picsum.photos/seed/music2/800/600"
  },
  {
    id: 3,
    title: "古典乐谱数字化重制",
    description: "将手写或老旧乐谱数字化，并重新编排伴奏，赋予经典新的生命。",
    tags: ["乐谱重制", "伴奏编排", "古典音乐"],
    link: "#",
    image: "https://picsum.photos/seed/music3/800/600"
  }
];

// --- Components ---

const MusicBackground = () => {
  const symbols = [
    { icon: <Music size={40} />, top: '10%', left: '5%', rotate: 15 },
    { icon: <Mic2 size={32} />, top: '25%', left: '85%', rotate: -10 },
    { icon: <Headphones size={48} />, top: '60%', left: '10%', rotate: -20 },
    { icon: <Speaker size={36} />, top: '75%', left: '80%', rotate: 10 },
    { icon: <Volume2 size={28} />, top: '15%', left: '70%', rotate: 5 },
    { icon: <Disc size={56} />, top: '85%', left: '15%', rotate: -5 },
    { text: "∮", top: '40%', left: '90%', size: 'text-6xl', rotate: 10 },
    { text: "♫", top: '50%', left: '5%', size: 'text-5xl', rotate: -15 },
    { text: "♭", top: '20%', left: '20%', size: 'text-4xl', rotate: 5 },
    { text: "♯", top: '70%', left: '92%', size: 'text-4xl', rotate: -10 },
    { text: "♩", top: '30%', left: '75%', size: 'text-3xl', rotate: 15 },
    { text: "𝄞", top: '5%', left: '40%', size: 'text-7xl', rotate: -5 },
    { text: "𝄢", top: '80%', left: '60%', size: 'text-6xl', rotate: 12 },
    { text: "𝅘𝅥𝅮", top: '45%', left: '25%', size: 'text-4xl', rotate: -8 },
    { text: "𝄐", top: '15%', left: '45%', size: 'text-5xl', rotate: 0 },
    { text: "𝄫", top: '65%', left: '35%', size: 'text-4xl', rotate: -12 },
    { text: "𝄪", top: '35%', left: '65%', size: 'text-4xl', rotate: 10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-[0.08]">
      {/* Digital Nodes & Connections */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Connecting Lines */}
        <motion.path
          d="M100,100 L300,200 L150,400 L500,300 L700,500 L900,200 L1100,400"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-indigo-400 opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Pulsing Nodes */}
        {[
          { x: '10%', y: '10%' }, { x: '85%', y: '25%' }, 
          { x: '10%', y: '60%' }, { x: '80%', y: '75%' },
          { x: '70%', y: '15%' }, { x: '15%', y: '85%' },
          { x: '40%', y: '5%' }, { x: '60%', y: '80%' }
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="2"
            className="fill-indigo-400"
            filter="url(#glow)"
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              r: [2, 4, 2]
            }}
            transition={{ 
              duration: 3 + i % 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </svg>

      {/* Animated Wave Background */}
      <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <motion.path
          animate={{
            d: [
              "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          fill="#1e1b4b"
          fillOpacity="0.08"
        />
      </svg>

      {/* Animated Staff Lines */}
      <div className="absolute top-1/3 left-0 w-full flex flex-col gap-2 transform -rotate-2 opacity-50">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="music-line"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="absolute top-2/3 left-0 w-full flex flex-col gap-2 transform rotate-3 opacity-50">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="music-line"
            animate={{ x: [100, -100] }}
            transition={{ duration: 12 + i, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {symbols.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size || ''} font-serif text-indigo-950`}
          style={{ 
            top: item.top, 
            left: item.left,
            textShadow: '0 0 10px rgba(99, 102, 241, 0.2)'
          }}
          initial={{ opacity: 0, rotate: item.rotate }}
          animate={{ 
            opacity: 1, 
            y: [0, -30, 0],
            rotate: [item.rotate, item.rotate + 10, item.rotate]
          }}
          transition={{ 
            duration: 6 + i % 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.1
          }}
        >
          {item.icon || item.text}
        </motion.div>
      ))}
    </div>
  );
};

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
    { name: '技能', href: '#skills' },
    { name: '项目案例', href: '#projects' },
    { name: '联系我', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-950 rounded-full flex items-center justify-center text-white text-sm">
            <Music size={16} />
          </div>
          <span>康康无损伴奏</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-neutral-600 hover:text-indigo-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-indigo-950 text-white text-sm font-medium rounded-full hover:bg-indigo-900 transition-all"
          >
            开始聊聊
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
            className="absolute top-full left-0 right-0 bg-white border-b border-indigo-50 p-6 flex flex-col gap-4 md:hidden shadow-xl"
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
              className="w-full py-3 bg-indigo-950 text-white text-center rounded-xl font-medium"
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
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <MusicBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            开放合作中
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-8 md:whitespace-nowrap tracking-tight">
            还原纯净，重塑听觉盛宴。
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl">
            我是康康，专注于高品质无损伴奏制作与后期混音。通过先进技术与敏锐听感，为您提供最纯净的音乐伴奏体验。
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-indigo-950 text-white rounded-full font-medium flex items-center gap-2 group"
            >
              查看项目
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="#" className="p-3 text-neutral-400 hover:text-indigo-950 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 text-neutral-400 hover:text-indigo-950 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 text-neutral-400 hover:text-indigo-950 transition-colors">
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
    <section id="about" className="relative py-24 px-6 bg-white border-y border-indigo-50 overflow-hidden">
      <MusicBackground />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-indigo-50">
            <img 
              src="https://picsum.photos/seed/portrait/800/1000" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-950 rounded-full flex items-center justify-center text-white text-center p-4 transform rotate-12 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-tighter">5+ 年行业经验</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-serif font-medium mb-8">关于康康</h2>
          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p>
              我的音乐之旅始于对纯净音质的执着追求。作为一名音频工程师，我深知伴奏对于演唱者的重要性。
            </p>
            <p>
              我的目标是利用最先进的音频处理技术，从任何音轨中提取出最真实、最无损的伴奏。无论是流行、古典还是爵士，我都能为您还原最纯粹的旋律。
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-4">核心技能</h4>
                <ul className="space-y-2 text-sm">
                  <li>无损提取</li>
                  <li>消音伴奏</li>
                  <li>人声修音</li>
                  <li>混音工程</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-4">专业工具</h4>
                <ul className="space-y-2 text-sm">
                  <li>Cubase / FL Studio</li>
                  <li>iZotope RX</li>
                  <li>Adobe Audition</li>
                  <li>Melodyne</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "伴奏制作",
      icon: <Music className="text-blue-500" size={24} />,
      skills: ["无损提取", "消音伴奏", "升降调", "节奏校准", "音质增强"]
    },
    {
      title: "后期处理",
      icon: <Mic2 className="text-green-500" size={24} />,
      skills: ["人声修音", "混音工程", "母带处理", "降噪修复", "音效添加"]
    },
    {
      title: "乐理知识",
      icon: <Palette className="text-purple-500" size={24} />,
      skills: ["和弦分析", "曲式结构", "节奏型设计", "调式识别", "扒谱能力"]
    },
    {
      title: "专业工具",
      icon: <Wrench className="text-orange-500" size={24} />,
      skills: ["Cubase", "FL Studio", "Adobe Audition", "iZotope RX", "Melodyne"]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 bg-indigo-50/50 overflow-hidden">
      <MusicBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium mb-4">专业技能</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            在多年的实践中，我积累了涵盖设计到开发的全栈技术能力，致力于打造高质量的数字产品。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-indigo-50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 p-3 bg-indigo-50 w-fit rounded-2xl">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <MusicBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif font-medium mb-4">精选案例</h2>
            <p className="text-neutral-500 max-w-md">一系列定义了我设计和工程方法的项目。</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-indigo-950 transition-colors">
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-indigo-50 mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
    <section id="contact" className="relative py-24 px-6 bg-indigo-950 text-white rounded-[3rem] mx-4 mb-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <MusicBackground />
      </div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8">让您的歌声 <br /> 拥有最完美的衬托。</h2>
        <p className="text-indigo-200 text-lg mb-12 max-w-xl mx-auto">
          如果您需要高品质的伴奏制作、人声后期或音频修复，欢迎随时联系我，让我们共同打造极致的音乐作品。
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-950 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          <Mail size={24} />
          交个朋友
        </a>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-500 text-sm">© 2026 康康无损伴奏. 保留所有权利。</p>
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
      <div className="scanline" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
