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
    globalThis.addEventListener('mousemove', handleMouseMove);
    return () => globalThis.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'],
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
    <div className="min-h-screen bg-darker text-white">
      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-nav border-b border-accent-20">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="code-font text-xl font-bold gradient-text">
              &lt;Jahnavi /&gt;
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md-flex gap-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md-hidden text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md-hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link text-left ${activeSection === section ? 'active' : ''}`}
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
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container-md text-center relative z-10">
          <div className="animate-fade-in">
            <div className="code-font text-accent mb-4 text-sm md-text-base">
              &lt;!-- Hello World --&gt;
            </div>
            
            <h1 className="text-5xl md-text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Jahnavi</span>
            </h1>
            
            <p className="text-2xl md-text-3xl text-gray-300 mb-4">
              MERN Stack Developer
            </p>
            
            <p className="text-lg md-text-xl text-gray-400 mb-8 container-sm">
              Frontend-focused Full-Stack Engineer building responsive web applications 
              with clean code and beautiful user experiences
            </p>

            <div className="flex gap-6 justify-center mb-8">
              <a href="https://github.com/Janvi-0620" target="_blank" rel="noopener noreferrer"
                className="social-icon glow-effect">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jahnavi2003" target="_blank" rel="noopener noreferrer"
                className="social-icon glow-effect">
                <Linkedin size={24} />
              </a>
              <a href="mailto:kokkiligaddajahnavi@gmail.com"
                className="social-icon glow-effect">
                <Mail size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center text-sm code-font text-gray-400">
              <span className="px-4 py-2 rounded-full bg-white-5 border border-accent-20">
                📍 Vijayawada, India
              </span>
              <span className="px-4 py-2 rounded-full bg-white-5 border border-accent-20">
                🌐 Open to Remote (Global)
              </span>
              <span className="px-4 py-2 rounded-full bg-white-5 border border-accent-20">
                🗣️ English • Hindi • Telugu
              </span>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 code-font text-accent-20 text-sm animate-float hidden lg-block">
          const skills = ['React', 'Node', 'MongoDB'];
        </div>
        <div className="absolute bottom-20 right-10 code-font text-accent-secondary-20 text-sm animate-float hidden lg-block" style={{ animationDelay: '2s', color: 'rgba(254, 202, 87, 0.2)' }}>
          function buildAmazingThings() &#123;
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container-md">
          <h2 className="text-4xl md-text-5xl font-bold mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="grid md-grid-cols-2 gap-12">
            <div className="flex-col gap-6 animate-slide-in">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Frontend-focused MERN Stack Developer with hands-on internship and project experience 
                building responsive, full-stack web applications using React.js, Node.js, Express.js, 
                and MongoDB.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Proficient in RESTful API design, JWT authentication, and full-stack CRUD operations. 
                Experienced with modern CSS, Docker, and modern deployment pipelines.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionate about clean UI design, performance optimization, and scalable architecture. 
                Eager to contribute to a collaborative engineering team as a junior developer.
              </p>
            </div>

            <div className="flex-col gap-6">
              <div className="gradient-border rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-accent" size={28} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-gray-300 font-semibold">Bachelor of Technology (B.Tech)</p>
                <p className="text-gray-400">Computer Science & Engineering</p>
                <p className="text-gray-400">Vishnu Institute of Technology, India</p>
                <p className="text-accent font-semibold mt-2">CGPA: 8.9 / 10 • 2024</p>
              </div>

              <div className="gradient-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Currently Learning</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Advanced React Hooks</span>
                  <span className="tech-tag">Performance Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-dark">
        <div className="container-lg">
          <h2 className="text-4xl md-text-5xl font-bold mb-12 gradient-text">
            Technical Skills
          </h2>

          <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
            <div className="skill-card">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-accent" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex-col gap-2">
                {skills.frontend.map((skill, idx) => (
                  <div key={skill} className="text-gray-400 text-sm mb-2">{skill}</div>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-accent-secondary" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex-col gap-2">
                {skills.backend.map((skill, idx) => (
                  <div key={skill} className="text-gray-400 text-sm mb-2">{skill}</div>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <div className="flex items-center gap-3 mb-4">
                <svg className="text-accent-tertiary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <div className="flex-col gap-2">
                {skills.database.map((skill, idx) => (
                  <div key={skill} className="text-gray-400 text-sm mb-2">{skill}</div>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-accent-quaternary" size={24} />
                <h3 className="text-xl font-semibold">DevOps & Tools</h3>
              </div>
              <div className="flex-col gap-2">
                {skills.tools.map((skill, idx) => (
                  <div key={skill} className="text-gray-400 text-sm mb-2">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="container-md">
          <h2 className="text-4xl md-text-5xl font-bold mb-12 gradient-text">
            Experience
          </h2>

          {experience.map((exp, idx) => (
            <div key={exp.company} className="gradient-border rounded-lg p-8 mb-6 animate-fade-in">
              <div className="flex flex-col md-flex-row md-items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">{exp.role}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <div className="mt-2 md-mt-0 text-gray-400 code-font text-sm">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              
              <ul className="mt-6 flex-col gap-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={achievement} className="flex gap-3 text-gray-300 mb-3">
                    <span className="text-accent mt-1_5">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-dark">
        <div className="container-lg">
          <h2 className="text-4xl md-text-5xl font-bold mb-12 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md-grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={project.title} className="project-card">
                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3">Key Highlights:</h4>
                  <ul className="flex-col gap-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={highlight} className="flex gap-2 text-sm text-gray-400 mb-2">
                        <span className="text-accent-secondary">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={tech} className="tech-tag code-font">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover-text-accent-secondary transition-colors group"
                >
                  <span>View Live Demo</span>
                  <ExternalLink size={16} className="group-hover-translate transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container-md text-center">
          <h2 className="text-4xl md-text-5xl font-bold mb-8 gradient-text">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 container-sm">
            I'm currently open to new opportunities and exciting projects. 
            Feel free to reach out if you'd like to discuss how we can work together!
          </p>

          <div className="flex flex-col md-flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:kokkiligaddajahnavi@gmail.com"
              className="btn-primary"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/jahnavi2003"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex gap-6 justify-center text-gray-400 code-font text-sm">
            <a href="tel:+919966636833" className="hover-text-accent transition-colors">
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
      <footer className="py-8 px-6 border-t border-accent-20 text-center">
        <div className="container-lg">
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
