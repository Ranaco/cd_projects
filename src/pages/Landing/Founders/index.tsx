import * as React from "react";
import "./index.css";

const Founders: React.FC = () => {
  return (
    <div className="founder-base">
      <div className="founder-header">
        <span className="founder-header-title">
          Modern Companies are <br /> built on Capital.
        </span>
        <span className="founder-header-sub">
          We provide software for the financial and operational needs of today`s
          <br />
          founders so they can get back to doing what they do best-building/
        </span>
      </div>
      <div className="founder-image-grp">
        <div>
          <img src="/images/founder_1.png" alt="Founder 1" />
          <div>
            <span>Benjamin McDonald</span>
            <span>Founder, CEO</span>
          </div>
        </div>
        <div>
          <img src="/images/founder_2.png" alt="Founder 2" />
          <div>
            <span>Jett Yagan</span>
            <span>Founder, CEO</span>
          </div>
        </div>
        <div>
          <img src="/images/founder_3.png" alt="Founder 3" />
          <div>
            <span>Layla Cramp</span>
            <span>Founder, CEO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
