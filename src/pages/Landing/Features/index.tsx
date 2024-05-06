import * as React from "react";
import "./index.css";

const Features: React.FC = () => {
  return (
    <section title="Features" className="features-section">
      <span className="features-header">
        Bossting Business. Today <br />
        and Tommorow
      </span>
      <div className="features-first">
        <div className="img-group">
          <div className="img-group-flex">
            <img
              src="/images/total_expense.png"
              alt="Total expense"
              style={{
                height: "139px",
                width: "346px",
                zIndex: 1,
              }}
            />
            <img
              src="/images/monthly_limit.png"
              alt="Monthly limit"
              style={{
                width: "346px",
                height: "349px",
                zIndex: 1,
              }}
            />
          </div>
          <img
            src="/images/monthly_limit_2.png"
            alt="Monthly limit 2"
            style={{
              width: "346px",
              height: "349px",
              zIndex: 1,
            }}
          />
          <img src="/images/wave.png" alt="Waves" className="waves-img" />
        </div>
        <div className="features-first-detail">
          <span className="features-first-header">
            Optimise expense
            <br />
            Management as a team
          </span>
          <span className="features-first-description">
            Bring harmony to team expenses with budget limits and
            <br /> real-time monitiring. Freedom for your staff. Peace of<br/> mind
            for you.
          </span>
          <button className="explore-more-btn">Explore more</button>
        </div>
      </div>
      <div className="features-first second">
        <div className="features-first-detail">
          <span className="features-first-header">
            Real-time accounting
            <br />
            at your fingertips.
          </span>
          <span className="features-first-description">
            Take the pain out of book keeping! Wave goodbye to
            <br /> mountains of paperwork and endless email reminders.
            <br /> There`s now a new way of accounting.
          </span>
          <button className="explore-more-btn">Explore more</button>
        </div>
        <div className="img-group">
          <img
            src="/images/recipt.png"
            alt="Recipt"
            style={{
              width: "346px",
              height: "423px",
              zIndex: 1,
              marginTop: "auto",
            }}
          />
          <div className="img-group-flex">
            <img
              src="/images/monthly_limit.png"
              alt="Monthly limit"
              style={{
                width: "346px",
                height: "349px",
                zIndex: 1,
              }}
            />
            <img
              src="/images/total_expense.png"
              alt="Total expense"
              style={{
                height: "139px",
                width: "346px",
                zIndex: 1,
              }}
            />
            <img
              src="/images/arrow.png"
              alt="Arrow"
              style={{
                width: "100px",
                height: "70px",
              }}
            />
          </div>
          <img src="/images/wave_2.png" alt="Waves" className="waves-2-img" />
        </div>
      </div>
    </section>
  );
};

export default Features;
