import * as React from "react";
import Intro from "./Intro";
import Detail from "./Detail";
import Features from "./Features";
import Founders from "./Founders";
import Plans from "./Plans";
import Feedback from "./Feedback";
import ContactUs from "./ContactUs";

const Landing: React.FC = () => {
  return (
    <div className="landing-page">
      <Intro />
      <Detail />
      <Features />
      <Founders />
      <Plans />
      <Feedback />
      <ContactUs />
    </div>
  );
};

export default Landing;
