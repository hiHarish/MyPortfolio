import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Menu, X } from 'lucide-react';
import Contact from './Contact';
import img from './myimg.jpg';
function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
      <div className="min-h-screen bg-[#0a0a0a] dark:bg-[#fdf6e3] text-white dark:text-gray-900">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 animate-gradient">
              Web Dev
              </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-fuchsia-400 ${
                    activeSection === item.id 
                      ? 'text-fuchsia-500 animate-neon-text' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
                
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-fuchsia-400 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="glass-morphism mt-4 rounded-lg p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-fuchsia-400'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

     

      {/* Hero Section - Adjusted padding for navbar */}
      <header id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 via-violet-900/20 to-cyan-900/20 animate-gradient" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1)_0%,transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center stagger-animation">
            <h2 className="text-7xl font-bold mb-6 animate-neon-text bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500">
              Harish Kumar Peddi
            </h2>
            <p className="text-3xl text-gray-300 mb-8 font-light"> AI Engineer | Full Stack Developer | Data Engineer</p>
            <h1 className="text-5xl font-bold mb-6 animate-neon-text bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500">Good to see You!</h1>
            
            <div className="flex justify-center gap-6">
              <a href="https://github.com/hiHarish" target='_blank' className="glass-morphism p-4 rounded-full hover:scale-110 transition-all duration-300 group">
                <Github size={24} className="text-fuchsia-400 group-hover:text-fuchsia-300" />
              </a>
              <a href="https://www.linkedin.com/in/harish-kumar-peddi/" target='_blank' className="glass-morphism p-4 rounded-full hover:scale-110 transition-all duration-300 group">
                <Linkedin size={24} className="text-violet-400 group-hover:text-violet-300" />
              </a>
              <a href="mailto:hiharishpeddi@gmail.com" className="glass-morphism p-4 rounded-full hover:scale-110 transition-all duration-300 group">
                <Mail size={24} className="text-cyan-400 group-hover:text-cyan-300" />
              </a>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-gray-400" />
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-8">
  {/* Download Resume Button */}
  <a
    href="/Harish_Kumar_Resume_Dev.pdf" // Place this file in your public folder
    download="Harish_Kumar_Resume.pdf"
    className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
  >
    📄 Download Resume
  </a>

  {/* Hire Me Button */}
  <button
    onClick={() => scrollToSection('contact')}
    className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
  >
    💼 Hire Me
  </button>
</div>
        </div>
      </header>

     {/* About Section */}
<section id="about" className="min-h-screen py-20 relative overflow-hidden">
  {/* Animated background blobs */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
  </div>

  <div className="container mx-auto px-6">
    <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
      About Me
    </h2>

    <div className="flex flex-col md:flex-row items-center gap-16">
      {/* Bigger Profile Image with gradient border */}
      <div className="relative w-[20rem] h-[20rem] md:w-[24rem] md:h-[24rem] rounded-full p-[4px] bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient">
        <img
          src={img}
          alt="Harish Kumar Peddi"
          className="rounded-full object-cover w-full h-full shadow-2xl"
        />
      </div>

      {/* About Card */}
      <div className="md:w-1/2 bg-white/5 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/10">
        <h3 className="text-3xl font-bold text-white mb-4">Harish Kumar Peddi</h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I am a highly motivated, detail-oriented Software Developer & AI Enthusiast. 
          I thrive on building projects that exceed expectations, creating seamless user experiences and robust backend solutions.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          My goal is to design solutions that solve real problems while bringing joy and satisfaction to my users.
        </p>

        {/* Skills tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {["React", "Node.js", "AI", "Tailwind CSS", "Next.js"].map((skill) => (
            <span key={skill} className="px-4 py-2 text-sm bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Work Experience Section */}
<section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div className="container mx-auto px-6">
    <h2 className="text-5xl leading-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-16">
      Work Experience
    </h2>

    <div className="relative border-l-4 border-fuchsia-500">
      {/* Junior Full Stack Developer */}
      <div className="mb-12 ml-6 relative">
        <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full ring-4 ring-gray-900">
          💼
        </span>
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white">Junior Full Stack Developer</h3>
          <p className="text-sm text-gray-400">V Media and Advertising — July 2024 – Present</p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
            <li>Designed, developed, and maintained MERN stack applications.</li>
            <li>Deployed websites on GoDaddy & Razorhost, managing DNS.</li>
            <li>Built responsive, scalable solutions using RESTful APIs.</li>
          </ul>
        </div>
      </div>

      {/* MERN Intern */}
      <div className="mb-12 ml-6 relative">
        <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full ring-4 ring-gray-900">
          💼
        </span>
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white">MERN Intern</h3>
          <p className="text-sm text-gray-400">NoVeg Meat Delivery Startup — April 2025 – June 2025</p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
            <li>Built a full-featured meat ordering platform.</li>
            <li>Worked on frontend, backend, and database integration.</li>
            <li>Collaborated with founders to meet business goals.</li>
          </ul>
        </div>
      </div>

      {/* Python Intern */}
      <div className="mb-12 ml-6 relative">
        <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full ring-4 ring-gray-900">
          💼
        </span>
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white">Python Intern</h3>
          <p className="text-sm text-gray-400">Defence Electronics Research Laboratory — May 2024 – June 2024</p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
            <li>Implemented Fast Fourier Transform improving processing speed by 40%.</li>
            <li>Collaborated with domain experts for development & documentation.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* Skills Section */}
<section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div className="container mx-auto px-6">
    <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-16">
      Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {[
        // Programming Languages
        { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", color: "from-blue-500 to-cyan-500" },
        { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", color: "from-yellow-400 to-green-500" },
        { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", color: "from-yellow-400 to-orange-500" },

        // Web Technologies
        { name: "HTML5", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", color: "from-blue-500 to-cyan-500" },
        { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", color: "from-cyan-500 to-blue-500" },
        { name: "Express.js", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", color: "from-gray-500 to-gray-700" },
        { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", color: "from-green-500 to-emerald-500" },
        { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", color: "from-sky-400 to-cyan-500" },
        { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", color: "from-purple-500 to-indigo-500" },
        { name: "FastAPI", icon: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png", color: "from-green-400 to-teal-500" },
        { name: "RESTful API", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Rest-api-icon.svg", color: "from-yellow-500 to-orange-500" },
        { name: "Flask", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg", color: "from-gray-400 to-gray-700" },
        { name: "Django", icon: "https://static.djangoproject.com/img/logos/django-logo-positive.svg", color: "from-emerald-500 to-green-700" },
        
        // Databases
        { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", color: "from-blue-500 to-cyan-500" },
        { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg", color: "from-orange-400 to-blue-500" },
        { name: "RDBMS", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Database-icon.svg", color: "from-yellow-500 to-orange-500" },
        { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", color: "from-green-400 to-lime-500" },

        // Tools & Technologies
        { name: "DSA", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Algorithm_example.svg", color: "from-pink-500 to-fuchsia-500" },
        { name: "OOP", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/OOjs_UI_logo.svg", color: "from-blue-500 to-indigo-500" },
        { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", color: "from-orange-500 to-red-500" },
        { name: "GitHub", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", color: "from-gray-500 to-black" },
        { name: "JSON", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg", color: "from-yellow-500 to-orange-500" },
        { name: "AI & ML Tools", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", color: "from-fuchsia-500 to-purple-500" },
        { name: "Data Science", icon: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Data_visualization_icon.svg", color: "from-green-500 to-emerald-500" }
      ].map((skill, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${skill.color} p-[2px] rounded-2xl hover:scale-105 transform transition duration-300 shadow-lg`}
        >
          <div className="bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-6 h-full">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
            <h3 className="text-sm font-semibold text-white text-center">{skill.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Projects Section */}
<section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div className="container mx-auto px-6">
    <h2 className="text-5xl leading-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-16">
      Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {[
        {
          title: "MERN Stack Website for Meat Delivery Company",
          desc: "Designed a full-stack website for NoVeg meat delivery company with ordering, backend APIs, and responsive UI.",
          link: "https://github.com/hiHarish/NoVeg", // replace with your repo link
          color: "from-fuchsia-500 to-pink-500"
        },
        {
          title: "AI-Powered Chatbot",
          desc: "Built with React, Flask, and Gemini API — supports chat history, title editing, and mobile-friendly UI.",
          link: "https://ai-chat-botz.vercel.app/",
          color: "from-violet-500 to-purple-500"
        },
        {
          title: "DDoS Protection System for Cloud Architecture",
          desc: "Multi-layered DDoS mitigation system with IP filtering, rate limiting, and anomaly detection in Python.",
          link: "https://github.com/hiHarish/PingsLanding_A_DDoS_Protection_System", // replace with your repo link
          color: "from-purple-500 to-indigo-500"
        },
        {
          title: "Synthetic Dataset Generator",
          desc: "React + Python tool to create synthetic datasets for ML training, with customizable schema.",
          link: "https://syntheticdatagen.vercel.app/",
          color: "from-cyan-500 to-blue-500"
        }
      ].map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-500 group"
        >
          <div className={`mb-4 bg-gradient-to-r ${project.color} p-3 rounded-lg w-fit`}>
            <i className="fas fa-project-diagram text-white text-lg"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400">{project.desc}</p>
          <span className="inline-block mt-4 text-sm text-fuchsia-400 group-hover:underline">
            View Project →
          </span>
        </a>
      ))}
    </div>
  </div><br/><br/>
  <div className='text-2xl font-extrabold text-center '> Checkout All my projects: <a href='https://github.com/hiHarish?tab=repositories' className='underline'>Github</a> </div>
</section>


      {/* Contact Section */}
      <section>
        <Contact />
</section>
      

      {/* Footer */}
      <footer className="py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-violet-900/50 to-gray-900" />
        <div className="container mx-auto px-6 relative">
          <p className="text-center text-gray-400">© 2025 Harish Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
