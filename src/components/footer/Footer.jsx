import "./footer.css";
import LOGO_FULL from "../../assets/Tensai-logo-stacked-digital.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__img">
        <img src={LOGO_FULL} alt="Tensai Digital" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="services#">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/hector.sanchezjn/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/titorgyen/">
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com/titorgyen">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Tensai Digital. All Rights Reserved. {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
