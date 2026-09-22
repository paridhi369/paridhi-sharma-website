import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Beauty Model Shoots",
    text: "Professional beauty modelling for makeup artists, salons and beauty professionals.",
  },
  {
    number: "02",
    title: "Manicure & Pedicure",
    text: "Before, process and after content that clearly showcases your beauty work.",
  },
  {
    number: "03",
    title: "Bridal Makeup",
    text: "Elegant bridal looks created to be photographed, filmed and showcased beautifully.",
  },
  {
    number: "04",
    title: "Party & Occasion Makeup",
    text: "Creative makeup looks for portfolios, social media campaigns and promotional content.",
  },
];

const portfolio = [
  {
    title: "Bridal Editorial",
    category: "Bridal Makeup",
    image: "/images/05_portfolio_bridal_look_01_4x5.png",
  },
  {
    title: "Beauty Portrait",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Traditional Look",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0b22e4c0a9a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Creative Makeup",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=85",
  },
];

const faqs = [
  {
    question: "Who is this service for?",
    answer:
      "This collaboration is designed for beauty parlours, makeup artists, salons and beauty professionals who want professional model-based photos and videos for their portfolio and social media.",
  },
  {
    question: "Who manages the makeup and shoot setup?",
    answer:
      "The beauty professional generally manages the makeup, costume, location and shoot setup. Paridhi comes as the beauty model and creative collaborator.",
  },
  {
    question: "Can you arrange a professional photographer?",
    answer:
      "Yes. If you need a professional camera person, photographer or videographer, we can help arrange one through available contacts.",
  },
  {
    question: "Can I book a manicure or pedicure content shoot?",
    answer:
      "Yes. The service can include before, process and after content so the transformation can be presented clearly on social media.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brand-mark">PS</span>
            <span>
              <strong>PARIDHI</strong>
              <small>BEAUTY MODEL</small>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("portfolio")}>Portfolio</button>
            <button onClick={() => scrollTo("process")}>How It Works</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <div className="nav-actions">
            <a
              className="instagram-icon"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-image">
           <img
  src="/images/01_homepage_hero_16x9.png"
  alt="Paridhi Sharma — Beauty Model & Creative Collaborator"
/>
          </div>

          <div className="hero-content container">
            <p className="eyebrow">
              <Sparkles size={14} />
              BEAUTY MODEL & CREATIVE COLLABORATOR
            </p>

            <h1>
              Your Art.
              <br />
              <em>My Expression.</em>
            </h1>

            <p className="hero-text">
              Helping beauty artists and salons turn their makeup and beauty
              work into beautiful, professional content.
            </p>

            <div className="hero-buttons">
              <button
                className="button button-dark"
                onClick={() => scrollTo("contact")}
              >
                Book a Collaboration
                <ArrowRight size={17} />
              </button>

              <button
                className="button button-light"
                onClick={() => scrollTo("portfolio")}
              >
                View Portfolio
              </button>
            </div>

            <div className="hero-trust">
              <div>
                <strong>Beauty</strong>
                <span>Focused</span>
              </div>
              <div>
                <strong>Content</strong>
                <span>Ready</span>
              </div>
              <div>
                <strong>Creative</strong>
                <span>Collaboration</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro section">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow">FOR BEAUTY PROFESSIONALS</p>
              <h2>
                Your makeup deserves
                <br />
                <em>to be seen.</em>
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                A great makeup artist creates beautiful work. The right model,
                photography and content help that work become a portfolio that
                attracts the next client.
              </p>
              <p>
                Paridhi collaborates with beauty professionals as a model for
                makeup shoots, beauty content and transformation-focused
                social media creatives.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">COLLABORATION SERVICES</p>
                <h2>
                  Made for your
                  <br />
                  <em>beauty business.</em>
                </h2>
              </div>

              <p>
                Choose the type of collaboration that matches the content you
                want to create.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon">
                    <Sparkles size={20} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <button onClick={() => scrollTo("contact")}>
                    Enquire Now <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMATION */}
        <section className="transformation section">
          <div className="container">
            <div className="transformation-header">
              <div>
                <p className="eyebrow">CONTENT THAT TELLS THE STORY</p>
                <h2>
                  Before.
                  <br />
                  <em>Process. After.</em>
                </h2>
              </div>

              <p>
                Perfect for manicure, pedicure, makeup and beauty
                transformations where the result deserves to be showcased.
              </p>
            </div>

            <div className="transformation-grid">
              <div className="transformation-card">
                <span>01</span>
                <div className="fake-image before-image">
                  <span>BEFORE</span>
                </div>
              </div>

              <div className="transformation-card">
                <span>02</span>
                <div className="fake-image process-image">
                  <span>PROCESS</span>
                </div>
              </div>

              <div className="transformation-card">
                <span>03</span>
                <div className="fake-image after-image">
                  <span>AFTER</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="portfolio section" id="portfolio">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SELECTED WORK</p>
                <h2>
                  Beauty in
                  <br />
                  <em>every frame.</em>
                </h2>
              </div>

              <button
                className="text-button"
                onClick={() => scrollTo("contact")}
              >
                Collaborate With Me <ArrowRight size={16} />
              </button>
            </div>

            <div className="portfolio-grid">
              {portfolio.map((item, index) => (
                <article
                  className={`portfolio-item portfolio-item-${index + 1}`}
                  key={item.title}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="video-section section">
          <div className="container">
            <div className="video-card">
              <div className="video-placeholder">
                <button
                  className="play-button"
                  onClick={() => alert("Video portfolio coming soon.")}
                  aria-label="Play video"
                >
                  <Play size={25} fill="currentColor" />
                </button>

                <div className="video-label">
                  <span>VIDEO PORTFOLIO</span>
                  <strong>Watch the transformation</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process section" id="process">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">SIMPLE COLLABORATION</p>
              <h2>
                From idea
                <br />
                <em>to content.</em>
              </h2>
            </div>

            <div className="process-grid">
              <div className="process-step">
                <span>01</span>
                <h3>Tell us your idea</h3>
                <p>
                  Share your service, makeup concept, city and preferred shoot
                  date.
                </p>
              </div>

              <div className="process-step">
                <span>02</span>
                <h3>Plan the shoot</h3>
                <p>
                  We discuss the look, setup, location and content
                  requirements.
                </p>
              </div>

              <div className="process-step">
                <span>03</span>
                <h3>Create together</h3>
                <p>
                  Paridhi collaborates as your beauty model for the planned
                  shoot.
                </p>
              </div>

              <div className="process-step">
                <span>04</span>
                <h3>Show your work</h3>
                <p>
                  Use your final photos and videos across your portfolio and
                  social media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU ARRANGE */}
        <section className="arrange section">
          <div className="container arrange-grid">
            <div>
              <p className="eyebrow">CLEAR EXPECTATIONS</p>
              <h2>
                You bring the
                <br />
                <em>art.</em>
              </h2>
              <p className="arrange-intro">
                The beauty professional generally manages the makeup, costume,
                location and overall shoot setup.
              </p>
            </div>

            <div className="check-list">
              {[
                "Makeup / beauty service",
                "Shoot location or salon",
                "Costume / styling as required",
                "Creative direction for your service",
                "Professional camera support if required",
              ].map((item) => (
                <div className="check-item" key={item}>
                  <span>
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL PLACEHOLDER */}
        <section className="testimonial section">
          <div className="container testimonial-inner">
            <p className="eyebrow">THE COLLABORATION</p>
            <blockquote>
              “Beautiful content starts with beautiful work — and the right
              collaboration helps your work tell its story.”
            </blockquote>
            <span>— PARIDHI SHARMA</span>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq section">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>
                Before we
                <br />
                <em>collaborate.</em>
              </h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={faq.question}>
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={activeFaq === index ? "rotate" : ""}
                    />
                  </button>

                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / LEAD FORM */}
        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">LET'S CREATE TOGETHER</p>
              <h2>
                Ready to
                <br />
                <em>collaborate?</em>
              </h2>

              <p>
                Tell us about your beauty service and the content you want to
                create. We will get back to you to discuss the collaboration.
              </p>

              <a
                className="whatsapp-button"
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
              </a>
            </div>

            <form
              className="lead-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your enquiry has been received.");
              }}
            >
              <div className="form-row">
                <label>
                  Your Name
                  <input type="text" placeholder="Enter your name" required />
                </label>

                <label>
                  Business / Parlour
                  <input
                    type="text"
                    placeholder="Business name"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Phone Number
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    required
                  />
                </label>

                <label>
                  City
                  <input type="text" placeholder="Your city" required />
                </label>
              </div>

              <label>
                Collaboration Type
                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Beauty Model Shoot</option>
                  <option>Bridal Makeup</option>
                  <option>Party / Occasion Makeup</option>
                  <option>Manicure / Pedicure Content</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Preferred Date
                <input type="date" />
              </label>

              <label>
                Tell us about your shoot
                <textarea
                  rows="4"
                  placeholder="Tell us about your idea, makeup look or content requirement..."
                />
              </label>

              <button className="button button-dark form-submit" type="submit">
                Send Collaboration Enquiry
                <ArrowRight size={17} />
              </button>

              <p className="form-note">
                Your details will only be used to contact you regarding the
                collaboration.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-top">
          <div>
            <div className="footer-brand">PARIDHI SHARMA</div>
            <p>Beauty Model & Creative Collaborator</p>
          </div>

          <div className="footer-links">
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("portfolio")}>Portfolio</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Paridhi Sharma</span>
          <span>Beauty Model & Creative Collaborator</span>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAV */}
      <div className="mobile-bottom-nav">
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("portfolio")}>Work</button>
        <button
          className="mobile-book"
          onClick={() => scrollTo("contact")}
        >
          Book
        </button>
        <button onClick={() => scrollTo("services")}>Services</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>
    </div>
  );
}

export default App;
