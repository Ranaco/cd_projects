import * as React from "react";
import "./index.css";

interface PlanCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  index: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  description,
  features,
  price,
  title,
  index,
}) => {
  return (
    <div className="plan-card-base">
      <span className={`plan-card-title ${index === 0 && "first"}`}>
        {title}
      </span>
      <span className="plan-card-price">${price}</span>
      <span className="plan-card-description">{description}</span>
      <div className="plan-card-features-base">
        {features.map((feature, index) => (
          <span key={index}>{feature}</span>
        ))}
      </div>
      <div className="flex-item" />
      <button className={`sel-plan-btn ${index === 2 && "contact"}`}>
        {index === 2 ? "Contact us" : "Select Plan"}
      </button>
    </div>
  );
};

export default PlanCard;
