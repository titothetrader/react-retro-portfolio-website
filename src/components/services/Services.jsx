import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I Do</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Flow</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Intuitive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Product Lifecycle</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business Strategy</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Service Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Marketing Funnel</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>FinTech Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Algorithmic Trading</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Technical Analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bitcoin and cryptocurrency Consulting TBD</p>
            </li>
          </ul>
        </article>
        {/* END OF FINTECH DEVELOPMENT */}
      </div>
    </section>
  );
};

export default services;
