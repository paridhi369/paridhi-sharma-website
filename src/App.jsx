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
    text: "Professional beauty model collaborations for makeup artists, salons, beauty professionals and brands.",
    image: "/images/02_service_beauty_model_4x5.png",
  },
  {
    number: "02",
    title: "Manicure & Pedicure",
    text: "Model-based before, process and after content to showcase your nail and beauty work.",
    image: "/images/02_Manicure_Pedicure_Service.png",
    naturalImage: true,
  },
  {
    number: "03",
    title: "Bridal Makeup",
    text: "Bridal makeup model collaborations for professional photos, videos, reels and portfolios.",
    image: "/images/03_service_bridal_makeup_4x5.png",
  },
  {
    number: "04",
    title: "Party & Occasion Makeup",
    text: "Creative makeup model shoots for portfolios, social media campaigns and promotional content.",
    image: "/images/04_service_occasion_makeup_4x5.png",
  },
];

const portfolio = [
  {
    title: "Bridal Editorial",
    category: "Bridal Makeup",
    image: "/images/05_portfolio_bridal_look_01_4x5.png",
  },
  {
    title: "Bridal Look",
    category: "Bridal",
    image: "/images/06_portfolio_bridal_look_02_4x5.png",
  },
  {
    title: "Beauty Portrait",
    category: "Beauty",
    image: "/images/07_portfolio_beauty_look_03_4x5.png",
  },
  {
    title: "Creative Beauty",
    category: "Makeup",
    image: "/images/08_portfolio_beauty_look_04_4x5.png",
  },
  {
    title: "Editorial Look",
    category: "Beauty",
    image: "/images/09_portfolio_beauty_look_05_4x5.png",
  },
  {
    title: "Signature Look",
    category: "Beauty",
    image: "/images/10_portfolio_beauty_look_06_4x5.png",
  },
];

const faqs = [
  {
    question: "Who can book Paridhi?",
    answer:
      "Makeup artists, beauty parlours, salons, nail artists, bridal makeup artists, beauty brands, photographers and influencers can book a collaboration.",
  },
  {
    question: "What does Paridhi provide?",
    answer:
      "Paridhi joins the collaboration as the beauty model. The client or beauty professional generally provides the makeup, costume, location and overall shoot setup.",
  },
  {
    question: "Who arranges the photographer or videographer?",
    answer:
      "The client or professional can arrange their own photographer or videographer. Photographer or videographer support can also be arranged through our available contacts if required.",
  },
  {
    question: "Can I book reels or video content?",
    answer:
      "Yes. Beauty reels, short-form videos and planned video content can be included as part of the collaboration.",
  },
  {
    question: "Where is Paridhi available?",
    answer:
      "Paridhi is based in Indore and is available anywhere in Indore. Selected outstation cities currently include Bhopal, Jhansi and Lalitpur. Other cities may also be possible depending on schedule and travel requirements.",
  },
  {
    question: "How does booking work?",
    answer:
      "Booking can be requested through WhatsApp, call or the website enquiry form. The date is confirmed according to availability and schedule.",
  },
  {
    question: "How long is a booking?",
    answer:
      "A single service booking generally takes around 2 to 5 hours depending on the shoot and content requirement.",
  },
  {
    question: "Is pricing displayed on the website?",
    answer:
      "Pricing is provided on enquiry. Please contact us with your shoot requirement, preferred date and location for pricing details.",
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

  const openWhatsApp = (message = "") => {
    const whatsappUrl = `https://wa.me/919569947645${
      message ? `?text=${encodeURIComponent(message)}` : ""
    }`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const business = formData.get("business")?.trim();
    const phone = formData.get("phone")?.trim();
    const city = formData.get("city")?.trim();
    const service = formData.get("service");
    const date = formData.get("date");
    const message = formData.get("message")?.trim();

    const whatsappMessage = `Hello Paridhi,

I would like to enquire about a collaboration with Fashnora.

Name: ${name}
Business / Professional Name: ${business || "Not provided"}
WhatsApp / Phone: ${phone}
City: ${city || "Not provided"}
Service: ${service}
Preferred Date: ${date || "Not specified"}

Shoot Requirement:
${message || "Not provided"}

I understand that booking is subject to date and schedule availability.

Thank you.`;

    openWhatsApp(whatsappMessage);

    form.reset();
  };

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <div className="container nav">

          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Fashnora Home"
          >
            <img
              src="/images/01_Fashnora_Logo.png"
              alt="Fashnora India"
              className="brand-logo"
            />

            <span className="brand-person">
              <strong>PARIDHI SHARMA</strong>
              <small>Beauty Model & Creative Collaborator</small>
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
              href="https://www.instagram.com/paridhi_9140"
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

      <main>

        {/* HERO */}
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
              FASHNORA · BEAUTY MODEL & CREATIVE COLLABORATOR
            </p>

            <h1>
              Your Art.
              <br />
              <em>My Expression.</em>
            </h1>

            <p className="hero-text">
              Professional beauty model collaborations for makeup artists,
              salons, beauty professionals, brands and creators.
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
                Great beauty work deserves professional visual content.
                Paridhi Sharma collaborates as a beauty model so makeup
                artists and beauty professionals can showcase their work
                through photographs, reels and videos.
              </p>

              <p>
                Through Fashnora, collaborations are available for beauty
                model shoots, bridal makeup, occasion makeup, manicure and
                pedicure content, reels and commercial beauty projects.
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
                <article
                  className="service-card"
                  key={service.number}
                >

                  <div
                    className="service-image-wrap"
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      marginBottom: "22px",
                      borderRadius: "2px",
                      background: "#f4efeb",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Sparkles size={20} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <button onClick={() => scrollTo("contact")}>
                    Enquire Now
                    <ArrowRight size={15} />
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
                <p className="eyebrow">
                  CONTENT THAT TELLS THE STORY
                </p>

                <h2>
                  Before.
                  <br />
                  <em>Process. After.</em>
                </h2>
              </div>

              <p>
                Show the complete beauty journey — from the natural starting
                point, through the professional makeup process, to the finished
                look.
              </p>
            </div>

            <div
              className="transformation-grid"
              style={{
                alignItems: "start",
              }}
            >

              <div className="transformation-card">
                <span>01</span>

                <div
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "2px",
                    background: "#f4efeb",
                  }}
                >
                  <img
                    src="/images/03_Transformation_Before.png"
                    alt="Before beauty transformation"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              <div className="transformation-card">
                <span>02</span>

                <div
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "2px",
                    background: "#f4efeb",
                  }}
                >
                  <img
                    src="/images/04_Transformation_Process.png"
                    alt="Beauty makeup process"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              <div className="transformation-card">
                <span>03</span>

                <div
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "2px",
                    background: "#f4efeb",
                  }}
                >
                  <img
                    src="/images/05_Transformation_After.png"
                    alt="After beauty transformation"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
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
                Collaborate With Me
                <ArrowRight size={16} />
              </button>

            </div>

            <div className="portfolio-grid">

              {portfolio.map((item, index) => (
                <article
                  className={`portfolio-item portfolio-item-${index + 1}`}
                  key={item.title}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

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
                  onClick={() =>
                    alert(
                      "Video portfolio will be added soon."
                    )
                  }
                  aria-label="Video portfolio"
                >
                  <Play size={25} fill="currentColor" />
                </button>

                <div className="video-label">
                  <span>VIDEO PORTFOLIO</span>
                  <strong>
                    Beauty · Reels · Content
                  </strong>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process section" id="process">
          <div className="container">

            <div className="section-heading centered">

              <p className="eyebrow">
                SIMPLE COLLABORATION
              </p>

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
                  Share your service, concept, city and preferred shoot date.
                </p>
              </div>

              <div className="process-step">
                <span>02</span>
                <h3>Discuss the requirement</h3>
                <p>
                  Tell us about the makeup, content and shoot requirement.
                </p>
              </div>

              <div className="process-step">
                <span>03</span>
                <h3>Check availability</h3>
                <p>
                  We check the requested date and schedule before confirming.
                </p>
              </div>

              <div className="process-step">
                <span>04</span>
                <h3>Create together</h3>
                <p>
                  Paridhi collaborates as the model for your planned shoot.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="arrange section">
          <div className="container arrange-grid">

            <div>
              <p className="eyebrow">
                WHERE PARIDHI IS AVAILABLE
              </p>

              <h2>
                Available for
                <br />
                <em>your shoot.</em>
              </h2>

              <p className="arrange-intro">
                Based in Indore, Paridhi is available for beauty model
                collaborations locally and in selected outstation cities.
              </p>
            </div>

            <div className="check-list">

              <div className="check-item">
                <span>
                  <Check size={14} />
                </span>
                Anywhere in Indore
              </div>

              <div className="check-item">
                <span>
                  <Check size={14} />
                </span>
                Bhopal
              </div>

              <div className="check-item">
                <span>
                  <Check size={14} />
                </span>
                Jhansi
              </div>

              <div className="check-item">
                <span>
                  <Check size={14} />
                </span>
                Lalitpur
              </div>

              <div className="check-item">
                <span>
                  <Check size={14} />
                </span>
                Other cities on availability
              </div>

            </div>
          </div>
        </section>

        {/* COLLABORATION PHILOSOPHY */}
        <section className="testimonial section">
          <div className="container testimonial-inner">

            <p className="eyebrow">
              THE COLLABORATION
            </p>

            <blockquote>
              “Beautiful work deserves beautiful presentation — and the right
              model can help your creativity come alive.”
            </blockquote>

            <span>— FASHNORA</span>

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
                <div
                  className="faq-item"
                  key={faq.question}
                >

                  <button
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index ? null : index
                      )
                    }
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={18}
                      className={
                        activeFaq === index
                          ? "rotate"
                          : ""
                      }
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

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="container contact-grid">

            <div className="contact-copy">

              <p className="eyebrow">
                LET'S CREATE TOGETHER
              </p>

              <h2>
                Ready to
                <br />
                <em>collaborate?</em>
              </h2>

              <p>
                Tell us about your beauty service and the content you want to
                create. Send your enquiry directly through WhatsApp and we
                will discuss the collaboration.
              </p>

              <button
                className="whatsapp-button"
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "Hello Paridhi, I would like to enquire about a collaboration with Fashnora."
                  )
                }
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
              </button>

              <div
                style={{
                  marginTop: "24px",
                }}
              >
                <p style={{ marginBottom: "8px" }}>
                  <strong>
                    Call / WhatsApp:
                  </strong>{" "}
                  9569947645
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  info@fashnora369.com
                </p>
              </div>

            </div>

            <form
              className="lead-form"
              onSubmit={handleEnquirySubmit}
            >

              <div className="form-row">

                <label>
                  Your Name

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>

                <label>
                  Business / Professional Name

                  <input
                    type="text"
                    name="business"
                    placeholder="Studio, Salon, Brand, etc."
                  />
                </label>

              </div>

              <div className="form-row">

                <label>
                  WhatsApp / Phone

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your number"
                    required
                  />
                </label>

                <label>
                  City

                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    required
                  />
                </label>

              </div>

              <label>
                Collaboration Type

                <select
                  name="service"
                  defaultValue=""
                  required
                >
                  <option
                    value=""
                    disabled
                  >
                    Select a service
                  </option>

                  <option value="Beauty Model Shoot">
                    Beauty Model Shoot
                  </option>

                  <option value="Bridal Makeup Model Shoot">
                    Bridal Makeup Model Shoot
                  </option>

                  <option value="Party / Occasion Makeup Model Shoot">
                    Party / Occasion Makeup Model Shoot
                  </option>

                  <option value="Manicure / Pedicure Model Shoot">
                    Manicure / Pedicure Model Shoot
                  </option>

                  <option value="Beauty Reels / Video Shoot">
                    Beauty Reels / Video Shoot
                  </option>

                  <option value="Commercial / Brand Collaboration">
                    Commercial / Brand Collaboration
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </label>

              <label>
                Preferred Date

                <input
                  type="date"
                  name="date"
                />
              </label>

              <label>
                Tell us about your shoot

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your makeup look, shoot idea, content requirement or collaboration..."
                />
              </label>

              <button
                className="button button-dark form-submit"
                type="submit"
              >
                Send Collaboration Enquiry
                <ArrowRight size={17} />
              </button>

              <p className="form-note">
                Your enquiry will open in WhatsApp. Booking is subject to
                date and schedule availability.
              </p>

            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-top">

          <div>
            <img
              src="/images/01_Fashnora_Logo.png"
              alt="Fashnora India"
              style={{
                width: "110px",
                height: "110px",
                objectFit: "contain",
                display: "block",
                marginBottom: "14px",
              }}
            />

            <p>
              Paridhi Sharma
              <br />
              Beauty Model & Creative Collaborator
            </p>
          </div>

          <div className="footer-links">

            <button onClick={() => scrollTo("services")}>
              Services
            </button>

            <button onClick={() => scrollTo("portfolio")}>
              Portfolio
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>

          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexDirection: "column",
            }}
          >

            <a
              href="https://www.instagram.com/paridhi_9140"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <Instagram size={18} />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/people/Pari-Sharma/pfbid02wtSYwfkSUunarZQYFxxGUdSozsiEubJJd5XCmpAWtHHknjUgsRmPDAdzhvTBkYq4l/"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              Facebook
            </a>

            <a
              href="https://www.youtube.com/@paridhisharma6022"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              YouTube
            </a>

          </div>

        </div>

        <div className="container footer-bottom">

          <span>
            © {new Date().getFullYear()} Fashnora · Paridhi Sharma
          </span>

          <span>
            Beauty Model & Creative Collaborator
          </span>

        </div>

      </footer>

      {/* MOBILE BOTTOM NAV */}
      <div className="mobile-bottom-nav">

        <button onClick={() => scrollTo("home")}>
          Home
        </button>

        <button onClick={() => scrollTo("portfolio")}>
          Work
        </button>

        <button
          className="mobile-book"
          onClick={() => scrollTo("contact")}
        >
          Book
        </button>

        <button onClick={() => scrollTo("services")}>
          Services
        </button>

        <button onClick={() => scrollTo("contact")}>
          Contact
        </button>

      </div>

    </div>
  );
}

export default App;
