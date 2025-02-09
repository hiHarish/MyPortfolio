import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Palette, Database, Globe, ChevronDown, Menu, X } from 'lucide-react';
import Contact from './Contact';
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
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 animate-gradient">
              HP
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

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-fuchsia-500 scale-150 animate-glow'
                : 'bg-gray-500 hover:bg-fuchsia-400'
            }`}
            aria-label={`Navigate to ${item.label} section`}
          />
        ))}
      </div>

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
            <p className="text-3xl text-gray-300 mb-8 font-light">Full Stack Developer</p>
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
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/10 via-violet-900/10 to-cyan-900/10" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-center mb-16 animate-neon-text">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=600"
                  alt="Professional headshot"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="md:w-1/2 glass-morphism p-8 rounded-2xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate Software Developer & AI Enthusiast with a strong background in Full-Stack Development, AI/ML, and IoT-based innovations crafting beautiful and functional web applications. 
                I specialize in creating seamless user experiences and robust backend solutions that help businesses grow.
                With a Bachelor’s degree in Computer Science & Engineering (CSE) and hands-on experience in building impactful projects, I specialize in creating cutting-edge solutions that blend technology with creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-fuchsia-900/10 to-cyan-900/10" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-center mb-16 animate-neon-text">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code2 size={40} />, title: 'Frontend', desc: 'React, TypeScript, HTML, Tailwind CSS, Bootstrap', color: 'from-fuchsia-500 to-pink-500' },
              { icon: <Database size={40} />, title: 'Backend', desc: 'Node.js, Express, Laravel, Django, SQL, MongoDB', color: 'from-violet-500 to-purple-500' },
              { icon: <Palette size={40} />, title: 'Design', desc: 'UI/UX, Figma, Adobe XD', color: 'from-purple-500 to-indigo-500' },
              { icon: <Globe size={40} />, title: 'Other', desc: 'Git, GitHub, AI&ML', color: 'from-cyan-500 to-blue-500' }
            ].map((skill, index) => (
              <div 
                key={index}
                className="glass-morphism p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-border-glow"
              >
                <div className={`mb-6 bg-gradient-to-r ${skill.color} p-4 rounded-xl inline-block`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-violet-900/10 to-fuchsia-900/10" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-center mb-16 animate-neon-text">Projects</h2>
          <h4 className='font-bold text-center mb-16 animate-neon-text'>Check Out my Projects in my Github</h4><br/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI powered News Website using API',
                desc: 'A full-featured online news website with integration of AI using React',
                image: 'https://private-user-images.githubusercontent.com/156064772/322187301-38b9ff32-fc9c-4b66-977d-a7f6e0368ebb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxMDk5MDIsIm5iZiI6MTczOTEwOTYwMiwicGF0aCI6Ii8xNTYwNjQ3NzIvMzIyMTg3MzAxLTM4YjlmZjMyLWZjOWMtNGI2Ni05NzdkLWE3ZjZlMDM2OGViYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwOVQxNDAwMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kN2NkOTI1NDMxN2I4MGIwMTkwMDRhZjg1NjYyYTdjOWFmYjg0OWE2NTU4YThjY2MwZjhjMTMxZWI1ZWZlZGY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.thoDdR_7Rj_rRizPgtiPALxRfNHSL28vXhOMdU0NFnA',
                color: 'from-fuchsia-500 to-pink-500'
              },
              {
                title: 'Blog Management system',
                desc: 'Analytics and management platform for bloggers with curd operations using PHP Laravel.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
                color: 'from-violet-500 to-purple-500'
              },
              {
                title: 'AI Image Generator',
                desc: 'Real-time Image generating platform with AI integration using MERN stack.',
                image: 'https://private-user-images.githubusercontent.com/156064772/411315467-0083804c-8304-491b-a26e-e55cf36f46c4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxMTAxMTMsIm5iZiI6MTczOTEwOTgxMywicGF0aCI6Ii8xNTYwNjQ3NzIvNDExMzE1NDY3LTAwODM4MDRjLTgzMDQtNDkxYi1hMjZlLWU1NWNmMzZmNDZjNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwOVQxNDAzMzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMjYwOGJjYzc0YTU1OWIyM2IzNjE1YjM5ZWYyZGQ3NTIyZDAyODE0MzkyZTFiYzYwZWRkYTZhZGVjNTM0YWNkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dXlbs3MXIju-vKi7GtLpkiz0AwO8U6Mvghy1Pdw0lr4',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'Battery monitoring Software using Python',
                desc: 'Real-time battery monitoring following 80-20 rule using python libraries.',
                image: 'https://th.bing.com/th/id/OIP.2MQYNMJJEAK8mM3VZiFmKgAAAA?rs=1&pid=ImgDetMain',
                color: 'from-violet-500 to-purple-500'
              },
              {
                title: 'Basic Text utility website',
                desc: 'Basic text utilities platform to work on paragraphs words and phrases.',
                image: 'https://github.com/user-attachments/assets/9a8aab49-9126-454e-904b-4cdef2b040ec',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'Basic online Web Code Editor',
                desc: 'Basic online platform to practice HTML, CSS, JS and instantly you can see output in the wepage itself.',
                image: 'https://github.com/hiHarish/React-WebCodeEditor/blob/main/Screenshot_2-5-2024_2045_localhost.jpeg?raw=true',
                color: 'from-fuchsia-500 to-pink-500'
              }
              
            ].map((project, index) => (
              <div 
                key={index}
                className="glass-morphism rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-75 transition-all duration-500 flex items-center justify-center`}>
                    {/*<ExternalLink className="text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" size={32} />
                  */}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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