import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode, FaServer, FaMobileAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";

// Import project images
import instaVibeImg from "../assets/instavibe.png";
import qrGeneratorImg from "../assets/qr-generator.png";
import speedTypeImg from "../assets/speed-type.png";
import campusPlatformImg from "../assets/campus-platform.png";

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Create stars
  const stars = Array.from({ length: 30 }, (_, i) => i);
  const particles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section id="projects" className="projects">
      {/* Cosmic Background Elements */}
      <div className="projects-stars">
        {stars.map((star) => (
          <div 
            key={star} 
            className="project-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="projects-nebula" />
      
      <div className="floating-particles-projects">
        {particles.map((particle) => (
          <div 
            key={particle} 
            className="floating-particle-project"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="projects-content">
        <div className="title-container">
          <h2 className="section-title">
            <span className="title-text">My Projects</span>
            <span className="title-globe">🚀</span>
          </h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="projects-container">
          {/* PROJECT 1 - Swish Campus Platform */}
          <div 
            className="project-card" 
            ref={el => cardsRef.current[0] = el}
          >
            <div className="project-image-container">
              <img src={campusPlatformImg} alt="Swish Campus Platform" className="project-image" />
              <div className="project-image-overlay"></div>
              <div className="project-badge">Full Stack</div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">
                  <FaServer className="icon" />
                </div>
                <h3 className="project-title">Swish Campus Platform</h3>
              </div>
              
              <p className="project-description">
                Private MERN-based campus social platform with authentication, role-based access, and real-time interactions.
              </p>

              <div className="project-features">
                <span className="feature">🔐 Auth</span>
                <span className="feature">👥 Roles</span>
                <span className="feature">⚡ Real-time</span>
                <span className="feature">🛡️ Admin</span>
              </div>

              <div className="tech-stack">
                <span className="tech-item">
                  <span className="tech-dot react"></span>
                  React
                </span>
                <span className="tech-item">
                  <span className="tech-dot node"></span>
                  Node.js
                </span>
                <span className="tech-item">
                  <span className="tech-dot mongodb"></span>
                  MongoDB
                </span>
              </div>

              <div className="project-links">
                <a 
                  href="https://swish-black.vercel.app/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                <a 
                  href="https://github.com/Sayali2611/SWISH" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
              </div>
            </div>
            
            <div className="project-glow"></div>
          </div>

          {/* PROJECT 2 - InstaVibe Social Media */}
          <div 
            className="project-card" 
            ref={el => cardsRef.current[1] = el}
          >
            <div className="project-image-container">
              <img src={instaVibeImg} alt="InstaVibe Social Media" className="project-image" />
              <div className="project-image-overlay"></div>
              <div className="project-badge">Full Stack</div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">
                  <FaCode className="icon" />
                </div>
                <h3 className="project-title">InstaVibe</h3>
              </div>
              
              <p className="project-description">
                Complete social media app with user profiles (@anjali, @shivani, @Shruti), authentication, posts, likes, comments, and real-time updates.
              </p>

              <div className="project-features">
                <span className="feature">👤 Profiles</span>
                <span className="feature">📱 Posts</span>
                <span className="feature">💬 Comments</span>
                <span className="feature">🔐 Auth</span>
              </div>

              <div className="tech-stack">
                <span className="tech-item">
                  <span className="tech-dot react"></span>
                  React
                </span>
                <span className="tech-item">
                  <span className="tech-dot tailwind"></span>
                  Tailwind
                </span>
                <span className="tech-item">
                  <span className="tech-dot node"></span>
                  Node.js
                </span>
              </div>

              <div className="project-links">
                <a 
                  href="https://insta-vibe-teal.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                <a 
                  href="https://github.com/Anjali200306/InstaVibe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
              </div>
            </div>
            
            <div className="project-glow"></div>
          </div>

          {/* PROJECT 3 - QR Code Generator */}
          <div 
            className="project-card" 
            ref={el => cardsRef.current[2] = el}
          >
            <div className="project-image-container">
              <img src={qrGeneratorImg} alt="QR Code Generator" className="project-image" />
              <div className="project-image-overlay"></div>
              <div className="project-badge">Frontend</div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">
                  <FaMobileAlt className="icon" />
                </div>
                <h3 className="project-title">QR Generator</h3>
              </div>
              
              <p className="project-description">
                Instant QR generation tool with download functionality for text and URLs. Customizable styles.
              </p>

              <div className="project-features">
                <span className="feature">🔗 URL</span>
                <span className="feature">📝 Text</span>
                <span className="feature">💾 Download</span>
                <span className="feature">🎨 Custom</span>
              </div>

              <div className="tech-stack">
                <span className="tech-item">
                  <span className="tech-dot react"></span>
                  React
                </span>
                <span className="tech-item">
                  <span className="tech-dot qr"></span>
                  QR Code
                </span>
                <span className="tech-item">
                  <span className="tech-dot js"></span>
                  JavaScript
                </span>
              </div>

              <div className="project-links">
                <a 
                  href="https://qr-code-generator-zeta-wine.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                <a 
                  href="https://github.com/Anjali200306/qr-code-generator" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
              </div>
            </div>
            
            <div className="project-glow"></div>
          </div>

          {/* PROJECT 4 - Speed-O-Type */}
          <div 
            className="project-card" 
            ref={el => cardsRef.current[3] = el}
          >
            <div className="project-image-container">
              <img src={speedTypeImg} alt="Speed-O-Type" className="project-image" />
              <div className="project-image-overlay"></div>
              <div className="project-badge">Frontend</div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">
                  <FaRocket className="icon" />
                </div>
                <h3 className="project-title">Speed-O-Type</h3>
              </div>
              
              <p className="project-description">
                Fast typing speed test app with real-time analytics. Test your speed, accuracy, and improve skills.
              </p>

              <div className="project-features">
                <span className="feature">⌨️ Test</span>
                <span className="feature">📈 Analytics</span>
                <span className="feature">🏆 Leaderboard</span>
                <span className="feature">📊 Progress</span>
              </div>

              <div className="tech-stack">
                <span className="tech-item">
                  <span className="tech-dot react"></span>
                  React
                </span>
                <span className="tech-item">
                  <span className="tech-dot js"></span>
                  JavaScript
                </span>
                <span className="tech-item">
                  <span className="tech-dot chart"></span>
                  Charts
                </span>
              </div>

              <div className="project-links">
                <a 
                  href="https://speedo-type.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                <a 
                  href="https://github.com/Anjali200306/speedo-type" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
              </div>
            </div>
            
            <div className="project-glow"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;