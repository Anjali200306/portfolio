import { useEffect, useRef } from "react";
// Remove the CSS import since we'll include it inline
// import "../styles/downloadcv.css";

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

      {/* Inline Styles */}
      <style jsx>{`
        /* Download CV Section - Cosmic Theme */
        .download-cv {
          padding: 100px 20px;
          background: 
            radial-gradient(ellipse at top, #000313 0%, #020617 60%),
            radial-gradient(ellipse at bottom, #020617 0%, #020617 70%);
          color: white;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Stars Background */
        .cv-stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .cv-star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: cvStarTwinkle 5s ease-in-out infinite;
        }

        @keyframes cvStarTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        /* Nebula Background */
        .cv-nebula {
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
          filter: blur(80px);
          animation: cvNebulaFloat 60s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes cvNebulaFloat {
          0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          33% { transform: translate(40px, -30px) scale(1.2); opacity: 0.6; }
          66% { transform: translate(-30px, 40px) scale(0.9); opacity: 0.5; }
          100% { transform: translate(50px, 20px) scale(1.1); opacity: 0.7; }
        }

        /* Particles */
        .cv-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .cv-particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          filter: blur(1px);
          animation: cvParticleFloat 15s ease-in-out infinite;
        }

        @keyframes cvParticleFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) rotate(0deg) scale(0.5);
          }
          50% {
            opacity: 0.3;
            transform: translateY(-150px) rotate(180deg) scale(1);
          }
        }

        /* Orbit Container */
        .cv-orbit-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .cv-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 50%;
          animation: cvOrbitSpin linear infinite;
        }

        .cv-orbiter {
          position: absolute;
          top: 0;
          left: 50%;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: cvOrbitSpin linear infinite reverse;
        }

        @keyframes cvOrbitSpin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Space Objects */
        .cv-space-objects {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .cv-doc-satellite {
          position: absolute;
          top: 25%;
          left: 15%;
          animation: cvDocSatelliteMove 40s linear infinite;
        }

        .cv-doc-satellite-body {
          width: 30px;
          height: 40px;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          border-radius: 6px;
          position: relative;
          box-shadow: 0 5px 15px rgba(56, 189, 248, 0.3);
        }

        .cv-doc-satellite-body::before {
          content: '📄';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          opacity: 0.8;
        }

        .cv-doc-satellite-panel {
          width: 40px;
          height: 8px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          position: absolute;
          top: 50%;
          right: -45px;
          transform: translateY(-50%);
          border-radius: 3px;
          animation: cvPanelRotate 8s linear infinite;
        }

        @keyframes cvDocSatelliteMove {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(0, -40px) rotate(180deg);
          }
          75% {
            transform: translate(-30px, -20px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        @keyframes cvPanelRotate {
          0% { transform: translateY(-50%) rotate(0deg); }
          100% { transform: translateY(-50%) rotate(360deg); }
        }

        /* Floating Documents */
        .cv-floating-docs {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cv-floating-doc {
          position: absolute;
          font-size: 24px;
          animation: cvDocFloat 10s ease-in-out infinite;
          opacity: 0.4;
          filter: drop-shadow(0 5px 15px rgba(56, 189, 248, 0.3));
        }

        @keyframes cvDocFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 0.6;
          }
        }

        /* Comet */
        .cv-comet {
          position: absolute;
          bottom: 30%;
          right: 10%;
          animation: cvCometFly 45s linear infinite;
        }

        .cv-comet-head {
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, #ec4899, #db2777);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
        }

        .cv-comet-tail {
          width: 120px;
          height: 5px;
          background: linear-gradient(90deg, #ec4899, transparent);
          position: absolute;
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          border-radius: 2px;
          animation: cvTailPulse 1.5s ease-in-out infinite;
        }

        @keyframes cvCometFly {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(-120vw, -100vh);
            opacity: 0;
          }
        }

        @keyframes cvTailPulse {
          0%, 100% { width: 120px; opacity: 0.7; }
          50% { width: 180px; opacity: 1; }
        }

        /* Container */
        .cv-container {
          position: relative;
          z-index: 10;
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          padding: 40px 20px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 100px rgba(56, 189, 248, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: cvContainerFloat 6s ease-in-out infinite;
        }

        @keyframes cvContainerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Header */
        .cv-header {
          margin-bottom: 30px;
        }

        .cv-title-container {
          margin-bottom: 20px;
        }

        .cv-title {
          font-size: 3rem;
          margin-bottom: 15px;
          display: inline-flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          animation: cvFadeInUp 1s ease forwards 0.3s;
        }

        .cv-title-text {
          background: linear-gradient(135deg, #ffffff 0%, #38bdf8 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .cv-title-icon {
          font-size: 2.5rem;
          animation: cvIconFloat 3s ease-in-out infinite;
        }

        @keyframes cvIconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(10deg); }
        }

        .cv-title-underline {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #38bdf8, #8b5cf6, #ec4899);
          margin: 0 auto;
          border-radius: 2px;
          opacity: 0;
          animation: cvFadeInUp 1s ease forwards 0.5s;
          position: relative;
          overflow: hidden;
        }

        .cv-title-underline::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
          animation: cvUnderlineShine 3s ease-in-out infinite;
        }

        @keyframes cvUnderlineShine {
          0%, 100% { left: -100%; }
          50% { left: 100%; }
        }

        /* Description */
        .cv-description {
          margin-bottom: 40px;
          opacity: 0;
          animation: cvFadeInUp 1s ease forwards 0.7s;
        }

        .cv-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #e2e8f0;
          max-width: 550px;
          margin: 0 auto 20px;
          padding: 25px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          animation: cvTextGlow 4s ease-in-out infinite;
        }

        .cv-highlight {
          color: #38bdf8;
          font-weight: 600;
          position: relative;
          display: inline-block;
        }

        .cv-highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #38bdf8;
          animation: cvHighlightExpand 3s ease-in-out infinite;
        }

        @keyframes cvHighlightExpand {
          0%, 100% { width: 0; }
          50% { width: 100%; }
        }

        .cv-sparkle-icon {
          display: inline-block;
          margin-left: 10px;
          animation: cvSparkleTwinkle 2s ease-in-out infinite;
        }

        @keyframes cvSparkleTwinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }

        .cv-text-line {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #38bdf8, transparent);
          margin: 0 auto;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .cv-line-mover {
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 100%;
          background: white;
          animation: cvLineMove 2s ease-in-out infinite;
          filter: blur(1px);
        }

        @keyframes cvTextGlow {
          0%, 100% { 
            box-shadow: 0 5px 25px rgba(56, 189, 248, 0.1); 
          }
          50% { 
            box-shadow: 0 10px 35px rgba(56, 189, 248, 0.2); 
          }
        }

        @keyframes cvFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cvLineMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(70px); }
        }

        /* Button Container */
        .cv-button-container {
          position: relative;
          display: inline-block;
          margin-bottom: 40px;
        }

        /* Button */
        .cv-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 18px 45px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #020617;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9, #22d3ee);
          border-radius: 50px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          z-index: 2;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 20px 40px rgba(56, 189, 248, 0.3),
            0 0 60px rgba(56, 189, 248, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          animation: cvButtonPulse 3s ease-in-out infinite;
        }

        .cv-button:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 
            0 30px 60px rgba(56, 189, 248, 0.4),
            0 0 100px rgba(56, 189, 248, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .cv-button:active {
          transform: translateY(-3px) scale(1.02);
        }

        @keyframes cvButtonPulse {
          0%, 100% { 
            box-shadow: 
              0 20px 40px rgba(56, 189, 248, 0.3),
              0 0 60px rgba(56, 189, 248, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          50% { 
            box-shadow: 
              0 25px 50px rgba(56, 189, 248, 0.4),
              0 0 80px rgba(56, 189, 248, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
          }
        }

        /* Button Text */
        .cv-btn-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Button Icon */
        .cv-btn-icon {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cv-btn-arrow {
          width: 12px;
          height: 2px;
          background: #020617;
          position: absolute;
          transition: all 0.3s ease;
        }

        .cv-btn-arrow::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-left: 6px solid #020617;
          transition: all 0.3s ease;
        }

        .cv-button:hover .cv-btn-arrow {
          width: 0;
        }

        .cv-button:hover .cv-btn-arrow::after {
          transform: translate(6px, -50%);
        }

        .cv-btn-arrow-2 {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #020617;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
        }

        .cv-button:hover .cv-btn-arrow-2 {
          opacity: 0.3;
          transform: scale(1);
        }

        /* Button Glow */
        .cv-btn-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          filter: blur(20px);
          opacity: 0.5;
          z-index: 1;
          animation: cvBtnGlowPulse 2s ease-in-out infinite;
        }

        @keyframes cvBtnGlowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        /* Button Sparkles */
        .cv-btn-sparkles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .cv-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: cvSparklePop 1s ease-out forwards;
        }

        @keyframes cvSparklePop {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(var(--tx, 50px), var(--ty, -50px)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx, 100px), var(--ty, -100px)) scale(0);
            opacity: 0;
          }
        }

        /* Button Rings */
        .cv-btn-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
        }

        .cv-btn-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: cvBtnRingExpand 2s ease-out infinite;
        }

        .cv-btn-ring-1 {
          width: 100px;
          height: 100px;
          animation-delay: 0s;
        }

        .cv-btn-ring-2 {
          width: 150px;
          height: 150px;
          animation-delay: 0.5s;
        }

        @keyframes cvBtnRingExpand {
          0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        /* Button Particles */
        .cv-button-particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .cv-button-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          border-radius: 50%;
          opacity: 0;
          animation: cvButtonParticleFloat 3s ease-in-out infinite;
        }

        @keyframes cvButtonParticleFloat {
          0%, 100% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
          50% {
            opacity: 0.4;
            transform: translate(var(--tx, 100px), var(--ty, -100px)) scale(1);
          }
        }

        /* File Info */
        .cv-file-info {
          opacity: 0;
          animation: cvFadeInUp 1s ease forwards 0.9s;
        }

        .cv-file-details {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
          padding: 15px 25px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .cv-file-icon {
          font-size: 2rem;
          animation: cvFileIconFloat 4s ease-in-out infinite;
        }

        @keyframes cvFileIconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(10deg); }
        }

        .cv-file-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }

        .cv-file-name {
          font-weight: 600;
          color: #f1f5f9;
          font-size: 1rem;
        }

        .cv-file-size {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .cv-file-stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .cv-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 25px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          min-width: 80px;
          transition: all 0.3s ease;
        }

        .cv-stat:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(56, 189, 248, 0.3);
        }

        .cv-stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 5px;
        }

        .cv-stat-label {
          font-size: 0.85rem;
          color: #cbd5f5;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .download-cv {
            padding: 60px 20px;
          }
          
          .cv-container {
            padding: 30px 20px;
          }
          
          .cv-title {
            font-size: 2.2rem;
            flex-direction: column;
            gap: 10px;
          }
          
          .cv-title-icon {
            font-size: 2rem;
          }
          
          .cv-text {
            font-size: 1rem;
            padding: 20px;
          }
          
          .cv-button {
            padding: 16px 35px;
            font-size: 1rem;
          }
          
          .cv-file-details {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
          
          .cv-file-text {
            align-items: center;
          }
          
          .cv-file-stats {
            gap: 15px;
          }
          
          .cv-stat {
            padding: 12px 20px;
            min-width: 70px;
          }
          
          .cv-doc-satellite,
          .cv-comet {
            opacity: 0.3;
            transform: scale(0.7);
          }
        }

        @media (max-width: 480px) {
          .download-cv {
            padding: 50px 15px;
          }
          
          .cv-title {
            font-size: 1.8rem;
          }
          
          .cv-button {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
          }
          
          .cv-file-stats {
            flex-direction: column;
            align-items: center;
          }
          
          .cv-space-objects {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default DownloadCV;