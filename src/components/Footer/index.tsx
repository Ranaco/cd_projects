import * as React from "react";
import "./index.css";

interface FooterData {
  [key: string]: string[];
}

const footerData: FooterData = {
  Platform: [
    "Why Cloudwise",
    "Expense Management",
    "Automatic bookkeeping",
    "Integration",
  ],
  Company: ["About us", "Platform", "Solution", "Customer", "Pricing"],
  Resources: ["Blog", "Help Center", "Webinar", "FAQ's", "Status"],
  Solutions: ["Self-Employed", "Email Business", "Sims & Startups"],
};

const Footer: React.FC = () => {
  return (
    <div className="footer-base">
      <div className="footer-content">
        <div className="footer-intro">
          <div className="logo">
            <img src="/images/logo.png" alt={"Logo"} />
            <span>Crypt Land</span>
          </div>
          <span>
            Empower your finance team. The
            <br /> one-stop platform for all financial <br />
            management of small and medium- <br />
            sized businesses.
          </span>
          <div className="footer-intro-img">
            <img src="/images/twitter.png" alt="Twitter" />
            <img src="/images/facebook.png" alt="Facebook" />
            <img src="/images/linkedin.png" alt="LinkedIn" />
            <img src="/images/youtube.png" alt="Youtube" />
          </div>
        </div>
        <div className="footer-section-row">
          {Object.keys(footerData).map((section, index) => (
            <div className="footer-section" key={index}>
              <span className="footer-section-title">{section}</span>
              <div className="footer-section-body">
                {footerData[section].map((item, idx) => (
                  <span key={idx} className="footer-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "85%",
          height: "2px",
          minWidth: "200px",
          backgroundColor: "#DFDFDF",
        }}
      />
      <div className="footer-bottom">
        <span>© 2023 Crypt Land. All rights reserved</span>
        <span>|</span>
        <span>
          Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice, and
          Responsible Disclosure
        </span>
      </div>
    </div>
  );
};

export default Footer;
