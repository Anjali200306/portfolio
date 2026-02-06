import "../styles/experience.css";
import { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Sapphire Infocom Pvt. Ltd",
    duration: "Aug 2025 – Nov 2025",
    location: "Virtual Internship",
    description: "Working on software development, debugging, and enhancing application performance.",
    highlights: [
      "Software development and application debugging",
      "Performance optimization and enhancement",
      "Collaborating in a remote development team",
      "Implementing modern software engineering practices"
    ],
    tags: ["Remote", "Software Engineering", "Performance"],
    icon: "💻",
    color: "#38bdf8",
    certificate: "/certificates/sapphire_certificate.pdf"
  },
  {
    role: "MERN Stack Developer",
    company: "Swish",
    duration: "2024",
    location: "Real-World Full-stack Project",
    description: "Developed Swish, a real-world campus social media platform that enables students to connect, share posts, and interact securely within their institution using the MERN stack.",
    highlights: [
      "Designed and developed a real-world campus social media platform using MERN stack",
      "Built a responsive and interactive React frontend for student engagement",
      "Developed scalable Node.js & Express REST APIs",
      "Implemented MongoDB for user profiles, posts, likes, and comments",
      "Integrated secure user authentication with JWT and role-based access",
      "Implemented features like post creation, feed display, and user interactions"
    ],
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB", "Social Media"],
    icon: "🎓",
    color: "#bc5692",
    certificate: "/certificates/Mern_certificate.pdf" // Updated certificate path
  },
  {
    role: "Java Developer",
    company: "Virtual Banking System",
    duration: "2024",
    location: "Academic Project",
    description: "Built a complete Java Swing banking system with JDBC, MySQL, and secure transaction features.",
    highlights: [
      "Complete banking system with Java Swing GUI",
      "JDBC & MySQL database integration",
      "Secure transaction processing",
      "User authentication and account management"
    ],
    tags: ["Java", "Swing", "MySQL", "JDBC"],
    icon: "🏦",
    color: "#8b5cf6",
    certificate: "/certificates/Java_certificate.pdf"
  }
];

const Experiences = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [showCertificate, setShowCertificate] = useState(null);

  useEffect(() => {
    // Create stars background
    const starsContainer = document.querySelector('.experience-stars');
    if (starsContainer) {
      starsContainer.innerHTML = '';
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 10}s`;
        star.style.animationDuration = `${Math.random() * 5 + 3}s`;
        starsContainer.appendChild(star);
      }
    }

    // Create floating particles
    const particlesContainer = document.querySelector('.experience-particles');
    if (particlesContainer) {
      particlesContainer.innerHTML = '';
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particlesContainer.appendChild(particle);
      }
    }

    // Intersection Observer for card animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
              
              // Add sequential animation for child elements
              const points = entry.target.querySelectorAll('.experience-points li');
              points.forEach((point, i) => {
                point.style.animationDelay = `${i * 0.15}s`;
              });
              
              const tags = entry.target.querySelectorAll('.experience-tag');
              tags.forEach((tag, i) => {
                tag.style.animationDelay = `${i * 0.1}s`;
              });
              
              const icon = entry.target.querySelector('.role-icon');
              if (icon) {
                icon.classList.add('icon-float');
              }
            }, index * 200);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      
      const cards = sectionRef.current.querySelectorAll('.experience-card');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      cards.forEach((card, index) => {
        const speed = (index % 3) * 0.2 + 0.3;
        const x = (mouseX - 0.5) * 15 * speed;
        const y = (mouseY - 0.5) * 15 * speed;
        
        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotateY(${x * 0.1}deg) rotateX(${-y * 0.1}deg)`;
      });
      
      // Update glow position
      const glows = document.querySelectorAll('.card-glow-exp');
      glows.forEach(glow => {
        glow.style.setProperty('--mouse-x', `${mouseX * 100}%`);
        glow.style.setProperty('--mouse-y', `${mouseY * 100}%`);
      });
    };

    // Click ripple effect
    const handleCardClick = (e, index) => {
      const card = e.currentTarget;
      setActiveCard(activeCard === index ? null : index);
      
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.background = `radial-gradient(circle, ${card.dataset.color}40 0%, transparent 70%)`;
      
      card.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    // Add click listeners
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.dataset.color = experienceData[index]?.color || '#38bdf8';
        card.addEventListener('click', (e) => handleCardClick(e, index));
      }
    });

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Create orbiting satellites
    const createOrbitingElements = () => {
      const orbitContainer = document.querySelector('.orbit-container');
      if (!orbitContainer) return;
      
      for (let i = 0; i < 3; i++) {
        const satellite = document.createElement('div');
        satellite.className = 'satellite';
        satellite.style.animationDelay = `${i * 2}s`;
        satellite.style.animationDuration = `${15 + i * 5}s`;
        orbitContainer.appendChild(satellite);
      }
    };
    
    createOrbitingElements();

    // Cleanup
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener('click', handleCardClick);
        }
      });
      window.removeEventListener('mousemove', handleMouseMove);
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [activeCard]);

  const handleCertificateClick = (e, certificateUrl, index) => {
    e.stopPropagation();
    window.open(certificateUrl, '_blank');
  };

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      {/* Cosmic Background */}
      <div className="experience-stars"></div>
      <div className="experience-nebula"></div>
      <div className="experience-particles"></div>
      <div className="orbit-container"></div>
      
      {/* Space Objects */}
      <div className="space-objects-exp">
        <div className="satellite-exp">
          <div className="satellite-body"></div>
          <div className="satellite-panel"></div>
        </div>
        <div className="planet">
          <div className="planet-ring"></div>
          <div className="planet-core"></div>
        </div>
        <div className="comet">
          <div className="comet-head"></div>
          <div className="comet-tail"></div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="experience-content">
        {/* Section Header */}
        <div className="section-header-exp">
          <div className="title-container-exp">
            <h2 className="section-title-exp">
              <span className="title-text-exp">Experience</span>
              <span className="title-globe-exp">🚀</span>
            </h2>
            <div className="title-underline-exp"></div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="experience-container">
          {experienceData.map((exp, index) => (
            <div 
              className={`experience-card ${activeCard === index ? 'active' : ''}`}
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                '--card-color': exp.color
              }}
              data-color={exp.color}
            >
              {/* Card Background Glow */}
              <div className="card-glow-exp" style={{ background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${exp.color}20 0%, transparent 70%)` }}></div>
              
              {/* Animated Border */}
              <div className="card-border-animated">
                <div className="border-line line-top"></div>
                <div className="border-line line-right"></div>
                <div className="border-line line-bottom"></div>
                <div className="border-line line-left"></div>
              </div>
              
              {/* Card Header */}
              <div className="experience-header-exp">
                <div className="header-icon-exp">
                  <div className="role-icon-exp" style={{ background: exp.color }}>
                    <div className="icon-3d">
                      {exp.icon}
                    </div>
                    <div className="icon-aura-exp" style={{ borderColor: exp.color }}></div>
                  </div>
                </div>
                
                <div className="header-content-exp">
                  <div className="header-main-exp">
                    <h3 className="role-title-exp">{exp.role}</h3>
                    <div className="duration-badge-exp" style={{ background: exp.color }}>
                      <span className="duration-exp">{exp.duration}</span>
                    </div>
                  </div>
                  
                  <div className="company-info-exp">
                    <span className="company-name-exp">{exp.company}</span>
                    <span className="location-badge-exp">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Description */}
              <div className="description-container-exp">
                <p className="experience-description-exp">{exp.description}</p>
                <div className="description-line" style={{ background: exp.color }}>
                  <div className="line-mover"></div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="experience-tags-exp">
                {exp.tags.map((tag, i) => (
                  <span 
                    className="experience-tag-exp" 
                    key={i}
                    style={{ 
                      '--tag-color': exp.color,
                      '--tag-glow': `${exp.color}40`
                    }}
                  >
                    <span className="tag-text">{tag}</span>
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="highlights-container">
                <ul className="experience-points-exp">
                  {exp.highlights.map((point, i) => (
                    <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="point-icon-container">
                        <div className="point-icon-exp" style={{ background: exp.color }}>
                          <span className="point-icon-symbol">→</span>
                        </div>
                      </div>
                      <span className="point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Card Footer with Certificate Button */}
              <div className="card-footer-exp">
                <div className="action-container-exp">
                  <button 
                    className="action-button-exp"
                    onClick={(e) => handleCertificateClick(e, exp.certificate, index)}
                    style={{ 
                      '--btn-color': exp.color,
                      '--btn-glow': `${exp.color}40`
                    }}
                  >
                    <span className="btn-text">Certificate</span>
                    <div className="btn-arrow">
                      <div className="arrow-line"></div>
                      <div className="arrow-head"></div>
                    </div>
                    <div className="btn-glow"></div>
                  </button>
                </div>
              </div>
              
              {/* Card Particle Effects */}
              <div className="card-particles">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="card-particle"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      background: exp.color
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;