import * as React from "react";
import "./index.css";

const Detail: React.FC = () => {
  return (
    <div className="detail-section">
      <span className="detail-header">
        Working with world class partners.
        <br />
        We`re partner first!
      </span>
      <div className="detail-carousel">
        <img src="images/cambrian.png" alt="Cabrian" />
        <img src="images/commvault.png" alt="Commvault" />
        <img src="images/crompton.png" alt="Crompton" />
        <img src="images/seclock.png" alt="Seclock" />
        <img src="images/software.png" alt="Software" />
        <img src="images/aumni.png" alt="Aumni" />
      </div>
    </div>
  );
};

export default Detail;
