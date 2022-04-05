import React from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phonerFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { featureList } from "./data";

const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Code Features</h2>
          <p className="u-text-small u-text-dark">
            SocialX app has Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Impedit ratione iste itaque iure doloremque?
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
            <img src={phonerFeatures} alt="phone" />
          </div>
          <div className="features-right">
            {featureList.map((item) => {
              const { id, heading, icon, text } = item;
              return <Feature key={id} icon={icon} heading={heading} text={text} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
