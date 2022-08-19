import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import LOGO from "../../assets/Tensai-logo-symbol.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header__gradient">
        <div className="container header__container">
          <img src={LOGO} alt="Tensai Digital" className="header__logo" />
          <h5>Hello, I am</h5>
          <h1>Tito Sanchez</h1>
          <h5 className="text-light">
            IT PM, Fullstack Developer & Systems Ninjaneer
          </h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" className="me-img" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
