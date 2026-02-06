import { useEffect, useRef } from "react";
import "../styles/DownloadCV.css";

const DownloadCV = () => {
  const starsRef = useRef(null);
  const particlesRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Create stars background
    const createStars = () => {
      if (!starsRef.current) return;
      starsRef.current.innerHTML = '';
      
      for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'cv-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 4}px`;
        star.style.height = star.style.width;
        star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        star.style.animationDuration = `${Math.random() * 5 + 3}s`;
        starsRef.current.appendChild(star);
      }
    };

    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      particlesRef.current.innerHTML = '';
      
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'cv-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 15 + 8}s`;
        particle.style.background = getRandomColor();
        particlesRef.current.appendChild(particle);
      }
    };

    const getRandomColor = () => {
      const colors = [
        'linear-gradient(135deg, #38bdf8, #0ea5e9)',
        'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        'linear-gradient(135deg, #ec4899, #db2777)',
        'linear-gradient(135deg, #10b981, #059669)'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Button hover effects
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', handleButtonHover);
      button.addEventListener('mouseleave', handleButtonLeave);
    }

    function handleButtonHover() {
      const button = this;
      
      // Create sparkles
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'cv-sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${i * 0.1}s`;
        button.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
      }
    }

    function handleButtonLeave() {
      const button = this;
      const waves = button.querySelectorAll('.cv-wave');
      waves.forEach(wave => wave.remove());
    }

    // Create orbiting elements
    const createOrbits = () => {
      const orbitContainer = document.querySelector('.cv-orbit-container');
      if (!orbitContainer) return;
      
      orbitContainer.innerHTML = '';
      
      for (let i = 0; i < 4; i++) {
        const orbit = document.createElement('div');
        orbit.className = 'cv-orbit';
        orbit.style.width = `${80 + i * 40}px`;
        orbit.style.height = `${80 + i * 40}px`;
        orbit.style.animationDuration = `${30 - i * 5}s`;
        orbit.style.animationDelay = `${i * 2}s`;
        orbitContainer.appendChild(orbit);
        
        const orbiter = document.createElement('div');
        orbiter.className = 'cv-orbiter';
        orbiter.style.animationDuration = `${15 - i * 3}s`;
        orbiter.style.animationDelay = `${i}s`;
        orbit.appendChild(orbiter);
      }
    };

    // Create floating documents
    const createFloatingDocs = () => {
      const docsContainer = document.querySelector('.cv-floating-docs');
      if (!docsContainer) return;
      
      docsContainer.innerHTML = '';
      
      const docs = ['📄', '📊', '📑', '📋'];
      docs.forEach((doc, i) => {
        const docEl = document.createElement('div');
        docEl.className = 'cv-floating-doc';
        docEl.textContent = doc;
        docEl.style.left = `${10 + i * 25}%`;
        docEl.style.animationDelay = `${i * 2}s`;
        docEl.style.animationDuration = `${8 + i * 2}s`;
        docsContainer.appendChild(docEl);
      });
    };

    createStars();
    createParticles();
    createOrbits();
    createFloatingDocs();

    // Cleanup
    return () => {
      if (button) {
        button.removeEventListener('mouseenter', handleButtonHover);
        button.removeEventListener('mouseleave', handleButtonLeave);
      }
    };
  }, []);

  return (
    <section id="download-cv" className="download-cv">
      {/* Cosmic Background */}
      <div ref={starsRef} className="cv-stars"></div>
      <div className="cv-nebula"></div>
      <div ref={particlesRef} className="cv-particles"></div>
      <div className="cv-orbit-container"></div>
      
      {/* Space Objects */}
      <div className="cv-space-objects">
        <div className="cv-doc-satellite">
          <div className="cv-doc-satellite-body"></div>
          <div className="cv-doc-satellite-panel"></div>
        </div>
        <div className="cv-floating-docs"></div>
        <div className="cv-comet">
          <div className="cv-comet-head"></div>
          <div className="cv-comet-tail"></div>
        </div>
      </div>

      {/* Content */}
      <div className="cv-container">
        {/* Animated Section Header */}
        <div className="cv-header">
          <div className="cv-title-container">
            <h2 className="cv-title">
              <span className="cv-title-text">Download Resume</span>
              <span className="cv-title-icon">📄</span>
            </h2>
            <div className="cv-title-underline"></div>
          </div>
        </div>

        {/* Animated Description */}
        <div className="cv-description">
          <p className="cv-text">
            Want a detailed look at my experience, skills, and projects?
            <span className="cv-highlight"> Download my resume</span> to learn more about my professional journey.
            <span className="cv-sparkle-icon">✨</span>
          </p>
          <div className="cv-text-line">
            <div className="cv-line-mover"></div>
          </div>
        </div>

        {/* Animated Download Button */}
        <div className="cv-button-container">
          <a
            href="/Anjali_Bhalkhede_Resume.pdf"
            download
            className="cv-button"
            ref={buttonRef}
          >
            <span className="cv-btn-text">Download CV</span>
            <div className="cv-btn-icon">
              <div className="cv-btn-arrow"></div>
              <div className="cv-btn-arrow-2"></div>
            </div>
            <div className="cv-btn-glow"></div>
            <div className="cv-btn-sparkles"></div>
            <div className="cv-btn-rings">
              <div className="cv-btn-ring cv-btn-ring-1"></div>
              <div className="cv-btn-ring cv-btn-ring-2"></div>
            </div>
          </a>
          
          {/* Button particles */}
          <div className="cv-button-particles">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="cv-button-particle"
                style={{
                  animationDelay: `${i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* File info */}

      </div>
    </section>
  );
};

export default DownloadCV;