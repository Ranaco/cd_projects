import * as React from "react";
import "./index.css";
import FeedbackCard from "../../../components/Cards/FeebackCard";

const Feedback: React.FC = () => {
  const feedbackData = [
    {
      name: "Ashley Cooper",
      feedback:
        "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
      profileImage: "/images/profile.png",
      stars: 5,
    },
    {
      name: "Noah Jack",
      feedback:
        "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
      profileImage: "/images/profile_2.png",
      stars: 4,
    },
    {
      name: "Ashley Cooper",
      feedback:
        "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
      profileImage: "/images/profile.png",
      stars: 5,
    },
    {
      name: "Gabrile Jackson",
      feedback:
        "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
      profileImage: "/images/profile_2.png",
      stars: 5,
    },
    {
      name: "Ashley Cooper",
      feedback:
        "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
      profileImage: "/images/profile.png",
      stars: 3,
    },
    {
      name: "William Leo",
      feedback:
        "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
      profileImage: "/images/profile_2.png",
      stars: 5,
    },
  ];

  return (
    <div className="feedback-base">
      <span className="feedback-title">What our customers say</span>
      <span className="feedback-description">
        "Thank you for your trust in Crypt Land! We are grateful for your
        feedback and are commit
        ted to providing <br />
        the best [products/services offered]. Read what our clients have to say
        about their experience with us."
      </span>
      <div className="feedback-grid">
        {feedbackData.map((feedback, index) => (
          <FeedbackCard {...feedback} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
