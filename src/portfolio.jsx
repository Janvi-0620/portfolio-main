import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, Menu, X, Code2, Terminal, Briefcase, GraduationCap } from 'lucide-react';
import { GitHub as Github, Linkedin } from 'react-feather';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'JWT Auth', 'bcrypt'],
    database: ['MongoDB', 'SQL', 'Mongoose'],
    tools: ['Docker', 'Git', 'Vercel', 'Render', 'Postman', 'VS Code']
  };

  const projects = [
    {
      title: 'Full-Stack API Testing Client',
      description: 'A Postman-inspired API testing tool with JWT authentication, collection management, and request history. Features 3-tier rate limiting, Docker containerization, and comprehensive security measures.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'JWT'],
      link: 'https://full-stack-api-testing-client.vercel.app/',
      highlights: ['5 MongoDB data models', 'Bearer token auto-attachment', 'Public collection sharing', 'Request history replay']
    },
    {
      title: 'Full-Stack E-Commerce Platform',
      description: 'Architected a modular backend following Clean Architecture with an atomic order processing system using Mongoose Transactions and a high-conversion frontend.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Redux Toolkit', 'Redis'],
      link: 'https://e-commerce-nxwj.vercel.app/',
      highlights: [
        'Atomic order processing using Mongoose Transactions',
        'Robust security with JWT, RBAC, and Email 2FA',
        'Redis caching & MongoDB indexing for sub-200ms searches',
        'High-conversion UI with Framer Motion & Redux Toolkit'
      ]
    }
  ];

  const experience = [
    {
      role: 'Frontend Developer Intern',
      company: 'Thrikaal Verse Private Limited',
      period: 'Oct 2025 – Jan 2026',
      location: 'India',
      achievements: [
        'Developed internal web application using React.js',
        'Designed responsive UI components with modern CSS frameworks',
        'Collaborated with cross-functional teams',
        'Optimized performance and user experience',
        'Gained production experience with MERN stack'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #0a0a0a;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-effect {
          box-shadow: 0 0 30px rgba(255, 107, 107, 0.3);
        }

        .code-font {
          font-family: 'JetBrains Mono', monospace;
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 107, 107, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 107, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .skill-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 107, 107, 0.2);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 107, 107, 0.6);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.2);
        }

        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(254, 202, 87, 0.05));
          border: 1px solid rgba(255, 107, 107, 0.1);
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 107, 107, 0.4);
          box-shadow: 0 20px 50px rgba(255, 107, 107, 0.15);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b6b, #feca57);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .tech-tag {
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.3);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(255, 107, 107, 0.2);
          border-color: rgba(255, 107, 107, 0.5);
          transform: scale(1.05);
        }

        .gradient-border {
          position: relative;
          background: #0a0a0a;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          border-radius: inherit;
        }

        .cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 50;
          transition: opacity 0.3s ease;
        }

        @media (max-width: 768px) {
          .cursor-glow {
            display: none;
          }
        }
      `}</style>

      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#ff6b6b]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="code-font text-xl font-bold gradient-text">
              &lt;Jahnavi /&gt;
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link capitalize ${activeSection === section ? 'active text-[#ff6b6b]' : 'text-gray-400'}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#ff6b6b]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left ${activeSection === section ? 'text-[#ff6b6b]' : 'text-gray-400'}`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="code-font text-[#ff6b6b] mb-4 text-sm md:text-base">
              &lt;!-- Hello World --&gt;
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Jahnavi</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              MERN Stack Developer
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Frontend-focused Full-Stack Engineer building responsive web applications 
              with clean code and beautiful user experiences
            </p>

            <div className="flex gap-6 justify-center mb-8">
              <a href="https://github.com/Janvi-0620" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-[#ff6b6b]/30 hover:border-[#ff6b6b] hover:bg-white/10 transition-all glow-effect">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jahnavi2003" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-[#ff6b6b]/30 hover:border-[#ff6b6b] hover:bg-white/10 transition-all glow-effect">
                <Linkedin size={24} />
              </a>
              <a href="mailto:kokkiligaddajahnavi@gmail.com"
                className="p-3 rounded-lg bg-white/5 border border-[#ff6b6b]/30 hover:border-[#ff6b6b] hover:bg-white/10 transition-all glow-effect">
                <Mail size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center text-sm code-font text-gray-400">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-[#ff6b6b]/20">
                📍 Vijayawada, India
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-[#ff6b6b]/20">
                🌐 Open to Remote (Global)
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-[#ff6b6b]/20">
                🗣️ English • Hindi • Telugu
              </span>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 code-font text-[#ff6b6b]/20 text-sm animate-float hidden lg:block">
          const skills = ['React', 'Node', 'MongoDB'];
        </div>
        <div className="absolute bottom-20 right-10 code-font text-[#feca57]/20 text-sm animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
          function buildAmazingThings() &#123;
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-in">
              <p className="text-gray-300 leading-relaxed text-lg">
                Frontend-focused MERN Stack Developer with hands-on internship and project experience 
                building responsive, full-stack web applications using React.js, Node.js, Express.js, 
                and MongoDB.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Proficient in RESTful API design, JWT authentication, and full-stack CRUD operations. 
                Experienced with TypeScript, Tailwind CSS, Docker, and modern deployment pipelines.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionate about clean UI design, performance optimization, and scalable architecture. 
                Eager to contribute to a collaborative engineering team as a junior developer.
              </p>
            </div>

            <div className="space-y-6">
              <div className="gradient-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-[#ff6b6b]" size={28} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-gray-300 font-semibold">Bachelor of Technology (B.Tech)</p>
                <p className="text-gray-400">Computer Science & Engineering</p>
                <p className="text-gray-400">Vishnu Institute of Technology, India</p>
                <p className="text-[#ff6b6b] font-semibold mt-2">CGPA: 8.9 / 10 • 2024</p>
              </div>

              <div className="gradient-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Currently Learning</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-3 py-1 rounded-full text-sm">Advanced React Hooks</span>
                  <span className="tech-tag px-3 py-1 rounded-full text-sm">Performance Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="skill-card rounded-lg p-6 bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-[#ff6b6b]" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="space-y-2">
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="text-gray-400 text-sm">{skill}</div>
                ))}
              </div>
            </div>

            <div className="skill-card rounded-lg p-6 bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-[#feca57]" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="space-y-2">
                {skills.backend.map((skill, idx) => (
                  <div key={idx} className="text-gray-400 text-sm">{skill}</div>
                ))}
              </div>
            </div>

            <div className="skill-card rounded-lg p-6 bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="text-[#48dbfb]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <div className="space-y-2">
                {skills.database.map((skill, idx) => (
                  <div key={idx} className="text-gray-400 text-sm">{skill}</div>
                ))}
              </div>
            </div>

            <div className="skill-card rounded-lg p-6 bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#ee5a6f]" size={24} />
                <h3 className="text-xl font-semibold">DevOps & Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, idx) => (
                  <div key={idx} className="text-gray-400 text-sm">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Experience
          </h2>

          {experience.map((exp, idx) => (
            <div key={idx} className="gradient-border rounded-lg p-8 mb-6 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#ff6b6b] mb-2">{exp.role}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400 code-font text-sm">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-[#ff6b6b] mt-1.5">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#ff6b6b] mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-400">
                        <span className="text-[#feca57]">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag px-3 py-1 rounded-full text-xs code-font">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff6b6b] hover:text-[#feca57] transition-colors group"
                >
                  <span>View Live Demo</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and exciting projects. 
            Feel free to reach out if you'd like to discuss how we can work together!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:kokkiligaddajahnavi@gmail.com"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/jahnavi2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-[#ff6b6b] text-white font-semibold hover:bg-[#ff6b6b]/10 transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex gap-6 justify-center text-gray-400 code-font text-sm">
            <a href="tel:+919966636833" className="hover:text-[#ff6b6b] transition-colors">
              +91-99666 36833
            </a>
            <span>•</span>
            <span>Vijayawada, India</span>
            <span>•</span>
            <span>Remote (Global)</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#ff6b6b]/20 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 code-font text-sm mb-4">
            &lt;/&gt; Designed & Built by Jahnavi Kokkiligadda
          </p>
          <p className="text-gray-500 text-xs">
            © 2026 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
