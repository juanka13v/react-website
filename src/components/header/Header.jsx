import React, { useEffect } from "react";
import "./Header.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import Button from "../UI/button/Button";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>THE WORLD'S lEADING</span>
            <span>CROSS-PLATFORM SECURE</span>
            <span>MESSAGING SYSTEN</span>
          </h1>
          <p className="u-text-small u-text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et!
            Atque quam praesentium doloribus ducimus, omnis tenetur similique
            commodi aperiam eius perspiciatis enim, laborum.
          </p>
          <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button
              text={"How It Works"}
              btnClass={"btn-orange"}
              href={"#faq"}
            />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#FFF" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
