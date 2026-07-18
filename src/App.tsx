import "./App.css";
import { useState } from "react";
import gradPic from "./assets/images/GradPic.png";
import gmail from "./assets/images/gmail.png";
import facebook from "./assets/images/facebook.png";
import linkedin from "./assets/images/linkedin.png";

import typescript from "./assets/skills/typescript.png";
import csharp from "./assets/skills/c-sharp.png";
import cpp from "./assets/skills/c++.png";
import r from "./assets/skills/r.png";
import reactNative from "./assets/skills/reactnative.png";
import flutter from "./assets/skills/flutter.png";
import unity from "./assets/skills/unity.png";
import oracle from "./assets/skills/oracle.png";
import mysql from "./assets/skills/mysql.png";
import html from "./assets/skills/html.png";
import css from "./assets/skills/css-3.png";
import javascript from "./assets/skills/java-script.png";
import php from "./assets/skills/php.png";
import xml from "./assets/skills/xml.png";

import kulture from "./assets/images/projects/kulture.jpg";
import carebridge from "./assets/images/projects/carebridge.jpg";

import kulture1 from "./assets/images/projects/kulture/1.jpg";
import kulture2 from "./assets/images/projects/kulture/2.jpg";
import kulture3 from "./assets/images/projects/kulture/3.jpg";
import kulture4 from "./assets/images/projects/kulture/4.jpg";
import kulture5 from "./assets/images/projects/kulture/5.jpg";
import kulture6 from "./assets/images/projects/kulture/6.jpg";
import kulture7 from "./assets/images/projects/kulture/7.jpg";


import care1 from "./assets/images/projects/carebridge/1.png";
import care2 from "./assets/images/projects/carebridge/2.png";
import care3 from "./assets/images/projects/carebridge/3.png";
import care4 from "./assets/images/projects/carebridge/4.png";
import care5 from "./assets/images/projects/carebridge/5.png";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaDownload,
} from "react-icons/fa";



function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

const kultureImages = [
  kulture1,
  kulture2,
  kulture3,
  kulture4,
  kulture5,
  kulture6,
  kulture7,
];

const carebridgeImages = [
  care1,
  care2,
  care3,
  care4,
  care5,
];
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="hero-content">
            <p className="greeting">Hi, I am</p>

            <h1>John Mikhail F. Lorenzo</h1>

            <h2>
              Front-End Developer
              <br />
              Mobile Application Developer
            </h2>

            <div className="socials">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=miko.lorenzo2327@gmail.com">
                <img src={gmail} alt="gmail" />
              </a>

              <a
                href="https://www.facebook.com/miko.lorenzo23"
                target="_blank"
              >
                <img src={facebook} alt="facebook" />
              </a>

              <a
                href="https://www.linkedin.com/in/john-mikhail-lorenzo-41965b36a/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <nav className="navbar">
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>

            <a
              className="cv-btn"
              href="/John_Mikhail_Lorenzo_Resume.pdf"
              download
            >
              Download CV
            </a>
          </nav>

          <img
  src={gradPic}
  alt="Graduation Picture"
  className="hero-image"
/>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2 className="section-title">ABOUT ME</h2>

        <p className="about-text">
          Recent Information Technology graduate with experience in React
          Native development, UI design, and mobile application development.
          Passionate about building user-friendly and efficient applications
          while continuously learning modern technologies.
        </p>

        <div className="services">
          <div className="service-card">
            <h3>Front-End Development</h3>
            <p>
              Building responsive and interactive user interfaces using modern
              web technologies.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile Development</h3>
            <p>
              Developing mobile applications using React Native and cross-platform solutions.
            </p>
          </div>

          <div className="service-card">
            <h3>UI / UX Design</h3>
            <p>
              Designing clean and user-friendly interfaces with Figma.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section className="section" id="skills">
  <h2 className="section-title">SKILLS</h2>

  <div className="skills-wrapper">

    {/* Programming */}
    <div className="skill-group">
      <h3 className="skill-heading">PROGRAMMING</h3>

      <div className="skills-grid">

        <div className="skill-item">
          <img src={typescript} alt="TypeScript" />
          <p>TypeScript</p>
        </div>

        <div className="skill-item">
          <img src={csharp} alt="C#" />
          <p>C#</p>
        </div>

        <div className="skill-item">
          <img src={cpp} alt="C++" />
          <p>C++</p>
        </div>

        <div className="skill-item">
          <img src={r} alt="R" />
          <p>R</p>
        </div>

      </div>
    </div>

    {/* Framework */}
    <div className="skill-group">
      <h3 className="skill-heading">FRAMEWORK</h3>

      <div className="skills-grid">

        <div className="skill-item">
          <img src={reactNative} alt="React Native" />
          <p>React Native</p>
        </div>

        <div className="skill-item">
          <img src={flutter} alt="Flutter" />
          <p>Flutter</p>
        </div>

        <div className="skill-item">
          <img src={unity} alt="Unity" />
          <p>Unity</p>
        </div>

      </div>
    </div>

    {/* Database */}
    <div className="skill-group">
      <h3 className="skill-heading">DATABASE MANAGEMENT</h3>

      <div className="skills-grid">

        <div className="skill-item">
          <img src={oracle} alt="Oracle" />
          <p>Oracle</p>
        </div>

        <div className="skill-item">
          <img src={mysql} alt="MySQL" />
          <p>MySQL</p>
        </div>

      </div>
    </div>

    {/* Web */}
    <div className="skill-group">
      <h3 className="skill-heading">WEB DEVELOPMENT</h3>

      <div className="skills-grid">

        <div className="skill-item">
          <img src={html} alt="HTML5" />
          <p>HTML5</p>
        </div>

        <div className="skill-item">
          <img src={css} alt="CSS3" />
          <p>CSS3</p>
        </div>

        <div className="skill-item">
          <img src={javascript} alt="JavaScript" />
          <p>JavaScript</p>
        </div>

        <div className="skill-item">
          <img src={php} alt="PHP" />
          <p>PHP</p>
        </div>

        <div className="skill-item">
          <img src={xml} alt="XML" />
          <p>XML</p>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* EXPERIENCE */}
      <section className="section">
        <h2 className="section-title">EDUCATION & EXPERIENCE</h2>

        <div className="timeline-card">
          <h3>Technological Institute of the Philippines</h3>
          <p>Bachelor of Science in Information Technology</p>
          <span>2021 - 2025</span>
        </div>

        <div className="timeline-card">
          <h3>Consolidated Matrix Inc.</h3>
          <p>Front-End Developer Intern</p>
          <span>500 Hours OJT</span>
        </div>
      </section>

      {/* PORTFOLIO */}
<section className="section" id="portfolio">
  <h2 className="section-title">PORTFOLIO</h2>

  <div className="portfolio-grid">

    {/* Kulture */}
<div
  className="project-card"
  onClick={() => setSelectedProject("kulture")}
>
  <div className="project-image">
  <img src={kulture} alt="Kulture Project" />
</div>

  <div className="project-content">

    <span className="project-type">
      CAPSTONE PROJECT
    </span>

    <h3>Kulture</h3>

    <p>
      A 3D educational mobile application developed as a capstone project
      that teaches traditional Filipino cultural games through interactive
      gameplay and physics-based mechanics.
    </p>

    <div className="project-tech">
      <span>Unity</span>
      <span>C#</span>
      <span>Android</span>
    </div>

    <div className="project-buttons">
  <button
  onClick={(e) => {
    e.stopPropagation();
    window.open(
      "https://drive.google.com/file/d/10oY9ppAqP1P2GEhqDAKULrdEOgkBXxv7/view?usp=drive_link",
      "_blank"
    );
  }}
>
  APK
</button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      setSelectedProject("kulture");
      setCurrentImage(0);
    }}
  >
    Case Study
  </button>
</div>

  </div>
</div>

    {/* CareBridge */}
<div

  className="project-card"
  onClick={() => setSelectedProject("carebridge")}
>
  <div className="project-image">
  <img src={carebridge} alt="CareBridge Project" />
</div>

  <div className="project-content">

    <span className="project-type">
      FREELANCE PROJECT
    </span>

    <h3>CareBridge</h3>

    <p>
      A responsive healthcare website developed as a freelance project,
      featuring an AI-powered chat assistant to improve user interaction
      and accessibility.
    </p>

    <div className="project-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>

    <div className="project-buttons">
  <button
    onClick={(e) => {
      e.stopPropagation();
      window.open(
        "https://github.com/okimness27/CareBridge",
        "_blank"
      );
    }}
  >
    GitHub
  </button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      window.open(
        "https://okimness27.github.io/CareBridge/",
        "_blank"
      );
    }}
  >
    Live Demo
  </button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      setSelectedProject("carebridge");
      setCurrentImage(0);
    }}
  >
    Case Study
  </button>
</div>

  </div>
</div>

  </div>
</section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <h2 className="section-title">CERTIFICATIONS & SEMINARS</h2>

        <div className="timeline-card">
          <h3>Building Cyber Resilience</h3>
          <p>UST Frassati Building Auditorium</p>
        </div>

        <div className="timeline-card">
          <h3>Cybersecurity Buff</h3>
          <p>SQL Injection & Brute Force Defense</p>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="contact">
  <div className="section-title">
    <h2>CONTACT</h2>
    <div className="title-line"></div>
  </div>

  <div className="contact-container">
    <div className="contact-header">
      <h3>Let's Connect</h3>

      <p>
        I'm currently seeking entry-level opportunities as a Mobile App
        Developer, Front-End Developer, or UI/UX Designer. Whether you have a
        job opportunity, freelance project, or simply want to connect, I'd love
        to hear from you.
      </p>
    </div>

    <div className="contact-grid">

      {/* Email */}
      <a
        href="mailto:miko.lorenzo2327@gmail.com"
        className="contact-card"
      >
        <div className="contact-icon">
          <FaEnvelope />
        </div>

        <div>
          <h4>Email</h4>
          <p>miko.lorenzo2327@gmail.com</p>
        </div>
      </a>

      {/* Phone */}
      <a
        href="tel:09107532700"
        className="contact-card"
      >
        <div className="contact-icon">
          <FaPhoneAlt />
        </div>

        <div>
          <h4>Phone</h4>
          <p>0910-753-2700</p>
        </div>
      </a>

      {/* Location */}
      <div className="contact-card">
        <div className="contact-icon">
          <FaMapMarkerAlt />
        </div>

        <div>
          <h4>Location</h4>
          <p>Pasig City, Metro Manila</p>
        </div>
      </div>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/john-mikhail-lorenzo-41965b36a/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <div className="contact-icon">
          <FaLinkedin />
        </div>

        <div>
          <h4>LinkedIn</h4>
          <p>View Profile</p>
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/okimness27"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <div className="contact-icon">
          <FaGithub />
        </div>

        <div>
          <h4>GitHub</h4>
          <p>github.com/okimness27</p>
        </div>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/miko.lorenzo23"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <div className="contact-icon">
          <FaFacebookF />
        </div>

        <div>
          <h4>Facebook</h4>
          <p>facebook.com/miko.lorenzo23</p>
        </div>
      </a>

    </div>

    <div className="contact-actions">

      <a
        href="/John_Mikhail_Lorenzo_Resume.pdf"
        download
        className="btn btn-primary"
      >
        <FaDownload />
        <span>Download Resume</span>
      </a>

      <a
  href="https://mail.google.com/mail/?view=cm&to=miko.lorenzo2327@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-secondary"
>
  <FaEnvelope />
  <span>Email Me</span>
</a>

    </div>
  </div>
</section>

      {/* PROJECT MODAL */}

{selectedProject && (
  <div
    className="modal-overlay"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-modal"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>

      {/* ================= KULTURE ================= */}

      {selectedProject === "kulture" && (
  <div className="case-study">

    <div className="case-header">
      <h2>KULTURE</h2>

      <p>
        Kinematics-Based Physics 3D Mobile Application for Learning
        Philippine Cultural Games
      </p>

      <div className="project-tags">
        <span>Capstone Project</span>
        <span>Unity</span>
        <span>C#</span>
        <span>Android</span>
      </div>
    </div>

    {/* IMAGE GALLERY */}

    <div className="gallery">

      <div className="gallery-image-container">

        <img
          src={kultureImages[currentImage]}
          className="gallery-image"
          alt="Kulture"
        />

        <button
          className="gallery-btn gallery-prev"
          onClick={() =>
            setCurrentImage((prev) =>
              prev === 0 ? kultureImages.length - 1 : prev - 1
            )
          }
        >
          ❮
        </button>

        <button
          className="gallery-btn gallery-next"
          onClick={() =>
            setCurrentImage((prev) =>
              prev === kultureImages.length - 1 ? 0 : prev + 1
            )
          }
        >
          ❯
        </button>

      </div>

    </div>

    {/* PROJECT SNAPSHOT */}

    <div className="project-snapshot">

      <div className="snapshot-card">
        <h4>Role</h4>
        <p>Unity Developer</p>
      </div>

      <div className="snapshot-card">
        <h4>Platform</h4>
        <p>Android</p>
      </div>

      <div className="snapshot-card">
        <h4>Engine</h4>
        <p>Unity</p>
      </div>

      <div className="snapshot-card">
        <h4>Language</h4>
        <p>C#</p>
      </div>

      <div className="snapshot-card">
        <h4>Duration</h4>
        <p>6 Months</p>
      </div>

      <div className="snapshot-card">
        <h4>Team Size</h4>
        <p>3 Members</p>
      </div>

    </div>

    <div className="case-section">
      <h3>About the Project</h3>

      <p>
        Kulture is a 3D educational mobile application developed using Unity
        and C# that teaches traditional Filipino cultural games through
        interactive gameplay and realistic physics simulations for Grade 5
        students aligned with the DepEd MAPEH curriculum.
      </p>
    </div>

    <div className="case-section">
      <h3>Key Features</h3>

      <div className="feature-grid">

        <div className="feature-card">
          🎮 Interactive 3D Gameplay
        </div>

        <div className="feature-card">
          ⚙️ Physics-Based Simulation
        </div>

        <div className="feature-card">
          📚 Educational Learning
        </div>

        <div className="feature-card">
          🏃 Traditional Filipino Games
        </div>

        <div className="feature-card">
          📱 Android Application
        </div>

        <div className="feature-card">
          🎨 Student-Friendly Interface
        </div>

      </div>
    </div>

    <div className="case-section">

      <h3>Technologies Used</h3>

      <div className="tech-badges">
        <span>Unity</span>
        <span>C#</span>
        <span>Android</span>
        <span>Blender</span>
        <span>Runge-Kutta</span>
        <span>Adaptive Time-Stepping</span>
      </div>

    </div>

    <div className="case-section">

      <h3>My Contributions</h3>

      <ul>
        <li>Developed gameplay mechanics using Unity and C#.</li>
        <li>Implemented Adaptive Time-Stepping and Runge-Kutta algorithms.</li>
        <li>Designed the user interface.</li>
        <li>Integrated educational gameplay.</li>
        <li>Performed testing and debugging.</li>
      </ul>

    </div>

    <div className="case-section">

      <h3>Project Outcome</h3>

      <p>
        Evaluated using the ISO/IEC 25010 Software Quality Model and received
        positive results across functionality, usability, reliability,
        efficiency, and maintainability.
      </p>

    </div>

  </div>
)}

      {/* ================= CAREBRIDGE ================= */}

     {selectedProject === "carebridge" && (
  <div className="case-study">

    <div className="case-header">
      <h2>CAREBRIDGE</h2>

      <p>
        Responsive Healthcare Website with an AI-Powered Chat Assistant
      </p>

      <div className="project-tags">
        <span>Freelance Project</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
    </div>

    {/* IMAGE GALLERY */}

    <div className="gallery">

      <div className="gallery-image-container">

        <img
          src={carebridgeImages[currentImage]}
          className="gallery-image"
          alt="CareBridge"
        />

        <button
          className="gallery-btn gallery-prev"
          onClick={() =>
            setCurrentImage((prev) =>
              prev === 0 ? carebridgeImages.length - 1 : prev - 1
            )
          }
        >
          ❮
        </button>

        <button
          className="gallery-btn gallery-next"
          onClick={() =>
            setCurrentImage((prev) =>
              prev === carebridgeImages.length - 1 ? 0 : prev + 1
            )
          }
        >
          ❯
        </button>

      </div>

    </div>

    {/* PROJECT SNAPSHOT */}

    <div className="project-snapshot">

      <div className="snapshot-card">
        <h4>Role</h4>
        <p>Front-End Developer</p>
      </div>

      <div className="snapshot-card">
        <h4>Project Type</h4>
        <p>Freelance</p>
      </div>

      <div className="snapshot-card">
        <h4>Platform</h4>
        <p>Web</p>
      </div>

      <div className="snapshot-card">
        <h4>Languages</h4>
        <p>HTML, CSS & JavaScript</p>
      </div>

      <div className="snapshot-card">
        <h4>Responsive</h4>
        <p>Desktop & Mobile</p>
      </div>

      <div className="snapshot-card">
        <h4>AI Feature</h4>
        <p>Chat Assistant</p>
      </div>

    </div>

    <div className="case-section">
      <h3>About the Project</h3>

      <p>
        CareBridge is a responsive healthcare website developed as a freelance
        project to provide users with an intuitive platform for accessing
        healthcare services and information. The website features a clean,
        user-friendly interface and an AI-powered chat assistant to improve
        accessibility and user engagement across desktop and mobile devices.
      </p>
    </div>

    <div className="case-section">
      <h3>Key Features</h3>

      <div className="feature-grid">

        <div className="feature-card">
          🩺 Healthcare Website
        </div>

        <div className="feature-card">
          🤖 AI Chat Assistant
        </div>

        <div className="feature-card">
          📱 Responsive Design
        </div>

        <div className="feature-card">
          ⚡ Fast Navigation
        </div>

        <div className="feature-card">
          🎨 Modern Interface
        </div>

        <div className="feature-card">
          ♿ User-Friendly Experience
        </div>

      </div>
    </div>

    <div className="case-section">

      <h3>Technologies Used</h3>

      <div className="tech-badges">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>

    </div>

    <div className="case-section">

      <h3>My Contributions</h3>

      <ul>
        <li>Designed and developed the website interface.</li>
        <li>Created responsive layouts for desktop and mobile devices.</li>
        <li>Integrated the AI-powered chat assistant.</li>
        <li>Optimized navigation and user experience.</li>
        <li>Tested and refined the website before deployment.</li>
      </ul>

    </div>

    <div className="case-section">

      <h3>Project Outcome</h3>

      <p>
        Successfully delivered a responsive healthcare website with an
        AI-powered chat assistant that improves accessibility, enhances user
        interaction, and provides a modern browsing experience across multiple
        devices.
      </p>

    </div>

  </div>
)}

    </div>
  </div>
)}

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 John Mikhail F. Lorenzo. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;