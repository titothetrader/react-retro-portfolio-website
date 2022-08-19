import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { GiTechnoHeart, GiProgression } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiProgression className="about__icon" />
              <h5>Experience</h5>
              <small>10+ years IT professional</small>
              <br />
              <small>4+ years FullStack Developer</small>
            </article>
            <article className="about__card">
              <BsBuilding className="about__icon" />
              <h5>Companies</h5>
              <small>LPL Financial</small>
              <br />
              <small>Syntax</small>
              <br />
              <small>Freudenberg IT</small>
              <br />
              <small>T-Systems</small>
            </article>
            <article className="about__card">
              <GiTechnoHeart className="about__icon" />
              <h5>Tech Stack</h5>
              <small>Frontend Web Dev</small>
              <br />
              <small>Backend DB & Data Science</small>
              <br />
              <small>Bitcoin & Blockchain TBD</small>
              <br />
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certified</h5>
              <small>Agile/SAFe</small>
              <br />
              <small>Six Sigma</small>
              <br />
              <small>ITIL+</small>
              <br />
            </article>
          </div>
        </div>
      </div>
      <div className="about__description">
        <p>
          IT professional with 10+ years of experience in a variety of roles,
          such as Senior Developer, Project Manager and ITSM Team Lead. With a
          passion for Machine Learning and Data Science in FinTech and starting
          in Blockchain development, as well as algorithmic trading strategies
          for the financial markets. I thrive in a collaborative big-room
          planning environment where I can wear different hats, and enjoy
          drilling down from big picture to the necessary detail of technical
          implementation. Self-motivated, adaptable, quick-learning and
          award-winning, with proven global experience helping companies to
          achieve their revenue-generation goals within scope, quality, time,
          and cost constraints. Multi-lingual (English, Spanish, Japanese,
          German, French).
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
