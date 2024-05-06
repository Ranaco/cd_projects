import * as React from "react";
import "./index.css";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-base">
      <div className="contact-us-tile-base">
        <div className="contact-us-tile-detail">
          <span className="contact-us-title">
            Let`s Upgrade your finances experience <br />
            by using Cryptland
          </span>
          <div className="contact-btn-grp">
            <button>Request Demo</button>
            <button>Watch Video</button>
          </div>
        </div>
        <div className="spacer" />
        <img src="/images/contact-us-image.png" alt="ContactUs" />
      </div>
    </div>
  );
};

export default ContactUs;
