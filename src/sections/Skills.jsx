import "../styles/skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaCode, FaServer, FaTools } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiPostman, SiTypescript } from "react-icons/si";
import { useEffect, useRef } from "react";

const Skills = () => {
  const categoriesRef = useRef([]);
  const skillItemsRef = useRef([]);

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

    categoriesRef.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    skillItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  // Create stars and particles
  const stars = Array.from({ length: 80 }, (_, i) => i);
  const particles = Array.from({ length: 25 }, (_, i) => i);
  const shootingStars = Array.from({ length: 3 }, (_, i) => i);
  const asteroids = Array.from({ length: 15 }, (_, i) => i);

  return (
    <section id="skills" className="skills">
      {/* Enhanced Solar System Background */}
      <div className="skills-stars">
        {stars.map((star) => (
          <div 
            key={star} 
            className="skill-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 4}px`,
              height: `${1 + Math.random() * 4}px`,
              animationDuration: `${3 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="skills-nebula" />
      
      {/* Floating Particles */}
      <div className="floating-particles-skills">
        {particles.map((particle) => (
          <div 
            key={particle} 
            className="floating-particle-skill"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="shooting-stars-container">
        {shootingStars.map((star) => (
          <div 
            key={star}
            className="shooting-star"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Solar System */}
      <div className="solar-system">
        {/* Sun with Flares */}
        <div className="sun">
          <div className="sun-core">
            <div className="sun-surface"></div>
          </div>
          <div className="sun-flare flare-1"></div>
          <div className="sun-flare flare-2"></div>
          <div className="sun-flare flare-3"></div>
        </div>

        {/* Planet Orbits */}
        <div className="planet-orbit orbit-1">
          <div className="orbit-line"></div>
          <div className="planet mercury">
            <div className="planet-surface">
              <div className="crater crater-1"></div>
              <div className="crater crater-2"></div>
            </div>
          </div>
        </div>

        <div className="planet-orbit orbit-2">
          <div className="orbit-line"></div>
          <div className="planet venus">
            <div className="planet-atmosphere"></div>
            <div className="planet-surface">
              <div className="cloud cloud-1"></div>
              <div className="cloud cloud-2"></div>
            </div>
          </div>
        </div>

        <div className="planet-orbit orbit-3">
          <div className="orbit-line"></div>
          <div className="planet earth">
            <div className="planet-surface">
              <div className="landmass land-1"></div>
              <div className="landmass land-2"></div>
              <div className="landmass land-3"></div>
              <div className="cloud cloud-1"></div>
              <div className="cloud cloud-2"></div>
            </div>
          </div>
          <div className="moon-orbit">
            <div className="moon"></div>
          </div>
        </div>

        <div className="planet-orbit orbit-4">
          <div className="orbit-line"></div>
          <div className="planet mars">
            <div className="planet-surface">
              <div className="volcano volcano-1"></div>
              <div className="canyon canyon-1"></div>
            </div>
          </div>
        </div>

        {/* Asteroid Belt */}
        <div className="asteroid-belt">
          {asteroids.map((asteroid, index) => (
            <div 
              key={index} 
              className="asteroid"
              style={{
                left: `${(index / asteroids.length) * 100}%`,
                animationDelay: `${index * 0.3}s`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.3 + Math.random() * 0.7})`,
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`
              }}
            />
          ))}
        </div>

        <div className="planet-orbit orbit-5">
          <div className="orbit-line"></div>
          <div className="planet jupiter">
            <div className="planet-stripes">
              <div className="stripe stripe-1"></div>
              <div className="stripe stripe-2"></div>
              <div className="stripe stripe-3"></div>
            </div>
            <div className="great-red-spot"></div>
          </div>
          <div className="moon-orbit-1">
            <div className="moon europa"></div>
          </div>
          <div className="moon-orbit-2">
            <div className="moon ganymede"></div>
          </div>
        </div>

        {/* Comet */}
        <div className="comet">
          <div className="comet-core"></div>
          <div className="comet-tail"></div>
        </div>
      </div>

      {/* Content */}
      <div className="skills-content">
        <h2 className="section-title">
          <span className="title-text">Skills</span>
          <span className="title-decoration">✧</span>
        </h2>
        
        <p className="skills-intro">
          A dynamic showcase of the tools and technologies I master to build modern,
          scalable, and high-performance applications across the digital universe.
          <span className="intro-emoji">🚀</span>
        </p>

        <div className="skills-container">
          {/* FRONTEND */}
          <div 
            className="skill-category" 
            ref={el => categoriesRef.current[0] = el}
            onMouseEnter={() => {
              const earth = document.querySelector('.earth');
              if (earth) earth.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={() => {
              const earth = document.querySelector('.earth');
              if (earth) earth.style.transform = 'scale(1)';
            }}
          >
            <div className="category-header">
              <div className="category-icon frontend-icon">
                <FaCode />
              </div>
              <h3>Frontend Development</h3>
            </div>
            
            <div className="skills-grid">
              {[
                { icon: <FaHtml5 className="icon" />, name: "HTML5" },
                { icon: <FaCss3Alt className="icon" />, name: "CSS3" },
                { icon: <FaJs className="icon" />, name: "JavaScript" },
                { icon: <FaReact className="icon" />, name: "React" },
                { icon: <span className="icon-text">📱</span>, name: "Responsive" }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="skill-item"
                  ref={el => skillItemsRef.current.push(el)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div 
            className="skill-category"
            ref={el => categoriesRef.current[1] = el}
            onMouseEnter={() => {
              const jupiter = document.querySelector('.jupiter');
              if (jupiter) jupiter.style.transform = 'scale(1.3)';
            }}
            onMouseLeave={() => {
              const jupiter = document.querySelector('.jupiter');
              if (jupiter) jupiter.style.transform = 'scale(1)';
            }}
          >
            <div className="category-header">
              <div className="category-icon backend-icon">
                <FaServer />
              </div>
              <h3>Backend Development</h3>
            </div>
            
            <div className="skills-grid">
              {[
                { icon: <FaNodeJs className="icon" />, name: "Node.js" },
                { icon: <SiExpress className="icon" />, name: "Express.js" },
                { icon: <SiMongodb className="icon" />, name: "MongoDB" },
                { icon: <span className="icon-text">API</span>, name: "REST APIs" },
                { icon: <span className="icon-text">🔐</span>, name: "Auth/JWT" },
                { icon: <span className="icon-text">☕</span>, name: "Java" },
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="skill-item"
                  ref={el => skillItemsRef.current.push(el)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS & PLATFORMS */}
          <div 
            className="skill-category"
            ref={el => categoriesRef.current[2] = el}
            onMouseEnter={() => {
              const sun = document.querySelector('.sun-core');
              if (sun) sun.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={() => {
              const sun = document.querySelector('.sun-core');
              if (sun) sun.style.transform = 'scale(1)';
            }}
          >
            <div className="category-header">
              <div className="category-icon tools-icon">
                <FaTools />
              </div>
              <h3>Tools & Platforms</h3>
            </div>
            
            <div className="skills-grid">
              {[
                { icon: <FaGitAlt className="icon" />, name: "Git & GitHub" },
                { icon: <SiPostman className="icon" />, name: "Postman" },
                { icon: <SiFirebase className="icon" />, name: "Firebase" },
                { icon: <span className="icon-text">🐳</span>, name: "Docker" },
                { icon: <span className="icon-text">VS</span>, name: "VS Code" },
                { icon: <span className="icon-text">☁️</span>, name: "Cloud" }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="skill-item"
                  ref={el => skillItemsRef.current.push(el)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;