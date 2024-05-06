import * as React from "react";
import "./index.css";

interface FeedbackCardProps {
  feedback: string;
  profileImage: string;
  name: string;
  stars: number;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  feedback,
  name,
  profileImage,
  stars,
}) => {
  return (
    <div className="feedback-card-base">
      <span>{feedback}</span>
      <div className="person-detail">
        <img src={profileImage} alt={name} />
        <div>
          <span className="person-name">{name}</span>
          <span className="star-span">
            {Array(stars)
              .fill("")
              .map((_, index) => (
                <img src="/images/star.png" alt={index.toString()} />
              ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
