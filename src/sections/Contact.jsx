import { useState, useEffect, useRef } from "react";
import "../styles/contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaComment } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const starsRef = useRef(null);
  const particlesRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("DT_gLr4pOoiFpPd5R");

    // Create stars background
    const createStars = () => {
      if (!starsRef.current) return;
      starsRef.current.innerHTML = '';
      
      for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'contact-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        star.style.animationDuration = `${Math.random() * 4 + 2}s`;
        starsRef.current.appendChild(star);
      }
    };

    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      particlesRef.current.innerHTML = '';
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'contact-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
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

    // Create floating messages
    const createFloatingMessages = () => {
      const messagesContainer = document.querySelector('.contact-floating-messages');
      if (!messagesContainer) return;
      
      messagesContainer.innerHTML = '';
      
      const messages = ['💬', '📧', '✨', '🚀'];
      messages.forEach((msg, i) => {
        const msgEl = document.createElement('div');
        msgEl.className = 'contact-floating-message';
        msgEl.textContent = msg;
        msgEl.style.left = `${15 + i * 20}%`;
        msgEl.style.animationDelay = `${i * 3}s`;
        msgEl.style.animationDuration = `${12 + i * 3}s`;
        messagesContainer.appendChild(msgEl);
      });
    };

    createStars();
    createParticles();
    createFloatingMessages();

    // Add input focus effects
    const inputs = document.querySelectorAll('.contact-input, .contact-textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', handleInputFocus);
      input.addEventListener('blur', handleInputBlur);
    });

    function handleInputFocus(e) {
      const input = e.target;
      const label = input.parentElement.querySelector('.contact-input-label');
      if (label) {
        label.classList.add('active');
      }
      
      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'input-ripple';
      input.parentElement.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    function handleInputBlur(e) {
      const input = e.target;
      const label = input.parentElement.querySelector('.contact-input-label');
      if (label && !input.value) {
        label.classList.remove('active');
      }
    }

    // Cleanup
    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleInputFocus);
        input.removeEventListener('blur', handleInputBlur);
      });
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await emailjs.send(
        "service_zrhizfk",
        "template_vvxkbeh",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "anjalibhalkhede@gmail.com",
          to_name: "Anjali Bhalkhede",
          reply_to: formData.email
        },
        "DT_gLr4pOoiFpPd5R"
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Show success animation
      const form = formRef.current;
      if (form) {
        form.classList.add('submitted');
        setTimeout(() => form.classList.remove('submitted'), 3000);
      }
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError("Failed to send message. Please try again or email me directly.");
      setIsSubmitting(false);
      
      // Show error animation
      const form = formRef.current;
      if (form) {
        form.classList.add('error');
        setTimeout(() => form.classList.remove('error'), 3000);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  return (
    <section id="contact" className="contact">
      {/* Cosmic Background */}
      <div ref={starsRef} className="contact-stars"></div>
      <div className="contact-nebula"></div>
      <div ref={particlesRef} className="contact-particles"></div>
      <div className="contact-orbit-container"></div>
      
      {/* Space Objects */}
      <div className="contact-space-objects">
        <div className="contact-satellite">
          <div className="contact-satellite-body"></div>
          <div className="contact-satellite-panel"></div>
        </div>
        <div className="contact-floating-messages"></div>
        <div className="contact-comet">
          <div className="contact-comet-head"></div>
          <div className="contact-comet-tail"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="contact-content">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-title-container">
            <h2 className="contact-title">
              <span className="contact-title-text">Get In Touch</span>
              <span className="contact-title-icon">💫</span>
            </h2>
            <div className="contact-title-underline"></div>
          </div>
          
          {/* Removed project intro container */}
        </div>

        {/* Contact Container */}
        <div className="contact-container">
          {/* LEFT - Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <SiMinutemailer className="contact-info-icon-svg" />
                  <div className="contact-info-aura"></div>
                  <div className="contact-info-pulse"></div>
                </div>
                <h3>Let's Connect</h3>
                <div className="contact-status">
                  <div className="status-dot active"></div>
                  <span className="status-text">Available for opportunities</span>
                </div>
              </div>
              
              <p className="contact-info-text">
                Feel free to reach out for opportunities, discussions, or collaborations.
                I'm always open to exploring new ideas and working on exciting projects.
              </p>
              
              <div className="contact-links">
                <a 
                  href="mailto:anjalibhalkhede@gmail.com" 
                  className="contact-link"
                  data-tooltip="Send me an email"
                >
                  <div className="contact-link-icon">
                    <FaEnvelope />
                    <div className="contact-link-glow"></div>
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-title">Email</span>
                    <span className="contact-link-detail">anjalibhalkhede@gmail.com</span>
                  </div>
                  <div className="contact-link-arrow">→</div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/anjali-bhalkhede-b80275330/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  data-tooltip="Connect on LinkedIn"
                >
                  <div className="contact-link-icon">
                    <FaLinkedin />
                    <div className="contact-link-glow"></div>
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-title">LinkedIn</span>
                    <span className="contact-link-detail">Anjali Bhalkhede</span>
                  </div>
                  <div className="contact-link-arrow">→</div>
                </a>
                
                <a 
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  data-tooltip="Check my GitHub"
                >
                  <div className="contact-link-icon">
                    <FaGithub />
                    <div className="contact-link-glow"></div>
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-title">GitHub</span>
                    <span className="contact-link-detail">View my projects</span>
                  </div>
                  <div className="contact-link-arrow">→</div>
                </a>
              </div>
              
              <div className="contact-info-footer">
                <div className="contact-response-time">
                  <div className="response-icon">⚡</div>
                  <span>Typically replies within 24 hours</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements around contact info */}
            <div className="contact-info-particles">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="contact-info-particle"
                  style={{ animationDelay: `${i * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="contact-form-container">
            <form 
              className="contact-form"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              {/* Form Glow */}
              <div className="form-glow"></div>
              
              {/* Animated Border */}
              <div className="form-border">
                <div className="border-line top"></div>
                <div className="border-line right"></div>
                <div className="border-line bottom"></div>
                <div className="border-line left"></div>
              </div>
              
              {/* Form Header */}
              <div className="form-header">
                <div className="form-header-icon">
                  <FaComment className="form-icon" />
                  <div className="form-icon-aura"></div>
                </div>
                <h3>Send a Message</h3>
                <p>Fill out the form below and I'll get back to you soon</p>
              </div>
              
              {/* Error Message */}
              {error && (
                <div className="error-message">
                  <div className="error-icon">⚠️</div>
                  <div className="error-content">
                    <h4>Failed to Send</h4>
                    <p>{error}</p>
                  </div>
                  <button 
                    type="button" 
                    className="error-dismiss"
                    onClick={() => setError(null)}
                  >
                    ×
                  </button>
                </div>
              )}
              
              {/* Form Fields - Compact */}
              <div className="form-fields">
                <div className="form-group">
                  <div className="input-container">
                    <div className="input-icon">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                      required
                      placeholder=" "
                      disabled={isSubmitting}
                    />
                    <label className="contact-input-label">Your Name</label>
                    <div className="input-underline"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-container">
                    <div className="input-icon">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                      required
                      placeholder=" "
                      disabled={isSubmitting}
                    />
                    <label className="contact-input-label">Your Email</label>
                    <div className="input-underline"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-container textarea-container">
                    <div className="input-icon">
                      <FaComment />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-textarea"
                      required
                      placeholder=" "
                      rows="3"
                      disabled={isSubmitting}
                    />
                    <label className="contact-input-label">Your Message</label>
                    <div className="input-underline"></div>
                  </div>
                </div>
              </div>
              
              {/* Form Footer */}
              <div className="form-footer">
                <button 
                  type="submit" 
                  className="contact-button"
                  disabled={isSubmitting}
                >
                  <span className="button-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="button-icon">
                    <FaPaperPlane />
                    <div className="button-glow"></div>
                  </div>
                  <div className="button-particles">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i}
                        className="button-particle"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                  <div className="button-rings">
                    <div className="button-ring ring-1"></div>
                    <div className="button-ring ring-2"></div>
                  </div>
                </button>
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <div className="success-content">
                      <h4>Message Sent Successfully!</h4>
                      <p>I'll get back to you soon. Thank you!</p>
                    </div>
                    <div className="success-sparkles">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="success-sparkle"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Form Particles */}
              <div className="form-particles">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="form-particle"
                    style={{ 
                      animationDelay: `${i * 0.3}s`,
                      background: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'
                    }}
                  ></div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;