import * as React from "react";
import "./index.css";

const Intro: React.FC = () => {
  const [search, setSearch] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <section className="intro-wrapper" title="Intro">
      <div title="Intro" className="intro-section">
        <span className="intro-title">
          The Finance Solutions
          <br />
          For Your Business
        </span>
        <span className="intro-description">
          Empower your finance team. The onestop plateform for all financial
          <br />
          management of small and medium-sized business.
        </span>
        <div className="search-input-wrapper">
          <input onChange={onChange} placeholder="Enter your email address" />
          <button>Book a demo</button>
        </div>
      </div>
      <div className="dashboard-img-wrapper">
        <img
          src="/images/dashboard.png"
          alt="Dashboard"
          className="dashboard-image"
        />
      </div>
    </section>
  );
};

export default Intro;
