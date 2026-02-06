import "../styles/about.css";
import { useEffect, useRef } from "react";

const About = () => {
  const cardsRef = useRef([]);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Create background stars
    const createStars = () => {
      const aboutSection = document.querySelector('.about');
      if (!aboutSection) return;

      const starsContainer = document.createElement('div');
      starsContainer.className = 'about-stars';
      aboutSection.prepend(starsContainer);

      // Create stars with different sizes and animations
      for (let i = 0; i < 40; i++) {
        const star = document.createElement('div');
        star.className = 'about-star';
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random() * 0.5 + 0.2;
        star.style.setProperty('--duration', `${Math.random() * 8 + 4}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }

      // Create floating particles
      const floatingParticles = document.createElement('div');
      floatingParticles.className = 'floating-particles';
      aboutSection.appendChild(floatingParticles);

      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--delay', `${Math.random() * 10}s`);
        particle.style.setProperty('--duration', `${Math.random() * 12 + 18}s`);
        floatingParticles.appendChild(particle);
      }
    };

    createStars();

    // Add intersection observer for card animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated");
              
              // Add particle effect to cards on first appearance
              if (!entry.target.dataset.particlesAdded) {
                addParticlesToCard(entry.target);
                entry.target.dataset.particlesAdded = "true";
              }
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Function to add particles to cards
  const addParticlesToCard = (card) => {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'card-particles';
    
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'card-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particlesContainer.appendChild(particle);
    }
    
    card.appendChild(particlesContainer);
  };

  // Handle card hover effects
  const handleCardHover = (e) => {
    const card = e.currentTarget;
    const scanLine = document.createElement('div');
    scanLine.className = 'card-scan-line';
    card.appendChild(scanLine);
    
    // Remove scan line after animation completes
    setTimeout(() => {
      if (scanLine.parentNode) {
        scanLine.parentNode.removeChild(scanLine);
      }
    }, 2000);
  };

  return (
    <section id="about" className="about">
      {/* Background Elements */}
      <div className="about-nebula"></div>
      
      {/* Content */}
      <div className="about-content">
        <h1 className="about-title">
          <span className="title-line">
            About <span className="highlight">Me</span>
          </span>
        </h1>

        <p className="about-intro">
          I'm <span className="name-highlight">Anjali Bhalkhede</span>, a passionate MERN Stack Developer with a strong
          interest in building real-world, user-centric web applications.
          I enjoy turning complex problems into simple, elegant solutions.
        </p>

        <div className="about-grid">
          <div 
            className="about-card"
            ref={el => cardsRef.current[0] = el}
            onMouseEnter={handleCardHover}
            onMouseLeave={(e) => {
              const scanLines = e.currentTarget.querySelectorAll('.card-scan-line');
              scanLines.forEach(line => {
                if (line.parentNode) {
                  line.parentNode.removeChild(line);
                }
              });
            }}
          >
            <div className="card-icon">👩‍💻</div>
            <h3>What I Do</h3>
            <p>
              I design and develop full-stack web applications using React,
              Node.js, Express, and MongoDB, with a focus on clean UI and
              scalable backend logic.
            </p>
          </div>

          <div 
            className="about-card"
            ref={el => cardsRef.current[1] = el}
            onMouseEnter={handleCardHover}
            onMouseLeave={(e) => {
              const scanLines = e.currentTarget.querySelectorAll('.card-scan-line');
              scanLines.forEach(line => {
                if (line.parentNode) {
                  line.parentNode.removeChild(line);
                }
              });
            }}
          >
            <div className="card-icon">🎓</div>
            <h3>Education</h3>
            <p>
              <span className="degree">Bachelor of Engineering (B.E.)</span>
              <span className="institution">
                Smt. Indira Gandhi College of Engineering, Navi Mumbai
              </span>
            </p>
          </div>

          <div 
            className="about-card"
            ref={el => cardsRef.current[2] = el}
            onMouseEnter={handleCardHover}
            onMouseLeave={(e) => {
              const scanLines = e.currentTarget.querySelectorAll('.card-scan-line');
              scanLines.forEach(line => {
                if (line.parentNode) {
                  line.parentNode.removeChild(line);
                }
              });
            }}
          >
            <div className="card-icon">🚀</div>
            <h3>Career Goal</h3>
            <p>
              To work as a software developer where I can continuously
              learn, contribute to impactful products, and grow as a
              full-stack engineer.
            </p>
          </div>
        </div>

        {/* Connecting lines between cards */}
        <div className="connecting-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;