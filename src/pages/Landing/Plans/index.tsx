import * as React from "react";
import PlanCard from "../../../components/Cards/PlanCard";
import "./index.css";

const Plans: React.FC = () => {
  const planData = [
    {
      title: "Basic",
      price: 0,
      description:
        "Get a professional website designed according to your needs.",
      features: [
        "Get a fully designed Website.",
        "Webflow Development",
        "Limited Support",
      ],
    },
    {
      title: "Pro",
      price: 499,
      description:
        "Get a professional website designed according to your needs.",
      features: [
        "Get a fully designed Website.",
        "Webflow Development",
        "Limited Support",
        "Get a fully designed Website",
        "Webflow Development",
        "24/7 Support system",
      ],
    },
    {
      title: "Enterprise",
      price: 999,
      description:
        "Get a professional website designed according to your needs.",
      features: [
        "Get a fully designed Website.",
        "Webflow Development",
        "Limited Support",
        "Get a fully designed Website",
        "Webflow Development",
        "24/7 Support system",
      ],
    },
  ];

  return (
    <div className="plans-base">
      <span className="plans-header">Find the right plan</span>
      <span className="plans-sub">
        "Invest in your company's future with our comprehensive financial
        solution. Contact us for pricing details
        <br /> and see how we can help you streamline your finances and reach
        your business goals."
      </span>
      <div className="plan-grp">
        {planData.map((plan, index) => (
          <PlanCard {...plan} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
