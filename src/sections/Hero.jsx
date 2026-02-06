import "../styles/hero.css";
import { useEffect } from "react";
import ProfileImg from "../assets/Profile.jpg";

const Hero = () => {
  useEffect(() => {
    // Create enhanced stars with color variations
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
      for (let i = 0; i < 70; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random() * 0.7 + 0.2;
        star.style.setProperty('--duration', `${Math.random() * 6 + 4}s`);
        star.style.animationDelay = `${Math.random() * 8}s`;
        
        // Add random color variation to stars
        if (Math.random() > 0.7) {
          const colors = ['#38bdf8', '#8b5cf6', '#ec4899'];
          star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          star.style.boxShadow = `0 0 ${size * 3}px currentColor`;
        }
        
        starsContainer.appendChild(star);
      }
    }

    // Create enhanced shooting stars with trail
    for (let i = 0; i < 4; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.animationDelay = `${Math.random() * 20}s`;
      shootingStar.style.animationDuration = `${Math.random() * 2 + 2}s`;
      shootingStar.style.top = `${Math.random() * 80 + 10}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      
      // Add size variation
      const size = Math.random() * 2 + 1;
      shootingStar.style.width = `${size}px`;
      shootingStar.style.height = `${size}px`;
      
      if (starsContainer) starsContainer.appendChild(shootingStar);
    }

    // Create enhanced orbital ring system
    const orbContainer = document.querySelector('.image-container');
    if (orbContainer) {
      // Main orbital ring
      const ring = document.createElement('div');
      ring.className = 'orbital-ring';
      ring.style.width = '500px';
      ring.style.height = '500px';
      
      // Orbital particle
      const particle = document.createElement('div');
      particle.className = 'orbital-particle';
      ring.appendChild(particle);
      
      orbContainer.appendChild(ring);
      
      // Create additional orbital rings
      for (let i = 0; i < 2; i++) {
        const extraRing = document.createElement('div');
        extraRing.className = 'orbital-ring';
        extraRing.style.width = `${400 + i * 100}px`;
        extraRing.style.height = `${400 + i * 100}px`;
        extraRing.style.animationDuration = `${15 + i * 5}s`;
        extraRing.style.borderColor = `rgba(${i === 0 ? '139, 92, 246' : '236, 72, 153'}, 0.1)`;
        
        const extraParticle = document.createElement('div');
        extraParticle.className = 'orbital-particle';
        extraParticle.style.width = `${6 - i * 2}px`;
        extraParticle.style.height = `${6 - i * 2}px`;
        extraRing.appendChild(extraParticle);
        
        orbContainer.appendChild(extraRing);
      }
    }

    // Create floating particles around the hero
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      // Randomize particle color
      const colors = ['#38bdf8', '#8b5cf6', '#ec4899'];
      particle.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${
        colors[Math.floor(Math.random() * colors.length)]
      })`;
      
      particlesContainer.appendChild(particle);
    }
    
    document.querySelector('.hero')?.appendChild(particlesContainer);

    // Add scroll-based parallax effect
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const scrollY = window.scrollY;
      
      if (heroSection && scrollY < window.innerHeight) {
        const scrollProgress = scrollY / window.innerHeight;
        
        // Parallax effect for stars
        const stars = document.querySelector('.stars');
        if (stars) {
          stars.style.transform = `translateY(${scrollProgress * 50}px)`;
        }
        
        // Parallax effect for nebula
        const nebula = document.querySelector('.nebula');
        if (nebula) {
          nebula.style.transform = `translate(${scrollProgress * 30}px, ${-scrollProgress * 20}px)`;
        }
        
        // Parallax effect for content
        const content = document.querySelector('.hero-content');
        if (content) {
          content.style.transform = `translateY(${scrollProgress * 30}px)`;
          content.style.opacity = `${1 - scrollProgress * 0.5}`;
        }
        
        // Parallax effect for image
        const image = document.querySelector('.hero-image');
        if (image) {
          image.style.transform = `translateY(${scrollProgress * 40}px) scale(${1 - scrollProgress * 0.1})`;
          image.style.opacity = `${1 - scrollProgress * 0.3}`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add mouse move interaction for stars
    const handleMouseMove = (e) => {
      const stars = document.querySelectorAll('.star');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      stars.forEach((star, index) => {
        const speed = (index % 3) * 0.5 + 0.5;
        star.style.transform = `translate(${mouseX * speed * 10}px, ${mouseY * speed * 10}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleImageError = (e) => {
    console.error("Failed to load profile image, using fallback");
    e.target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  };

  return (
    <section id="home" className="hero">
      {/* Enhanced Background Elements */}
      <div className="stars"></div>
      <div className="nebula"></div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="title">
          Hi, I'm <span className="highlight">Anjali</span>
        </h1>

        <h2 className="subtitle">
          Passionate full-stack developer building real-world, production-ready applications.
        </h2>

        {/* UPDATED: Added inline styles to make description visible */}
        <p className="description" style={{
          color: '#e2e8f0',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '1.5rem auto',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          opacity: 0.9
        }}>
          I’m a full-stack developer with hands-on experience in building real-world projects using modern web technologies. I’m passionate about creating scalable applications, improving my skills, and growing every day with an always learning attitude.
        </p>

        <a href="#contact" className="button">
          Contact Me <span className="arrow">→</span>
        </a>
      </div>

      {/* Profile Image with Enhanced Effects */}
      <div className="hero-image">
        <div className="image-container">
          <div className="cosmic-orb"></div>
          <img 
            src={ProfileImg}
            alt="Anjali Profile" 
            className="profile-image"
            onError={handleImageError}
            onLoad={() => console.log("Profile image loaded successfully")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;