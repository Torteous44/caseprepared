import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/landing page/Hero.module.css";
import InsightSequence from "./InsightSequence";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Crack the case with AI mock interviews",
  subtitle = "Practice makes perfect. Successful consulting candidates often have over 30 mock interviews before the real one.",
}) => {
  const navigate = useNavigate();

  const handleTryInterview = () => {
    navigate("/interview/1"); // Navigate directly to McKinsey interview
  };

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-text"]}>
          <div className={styles["stats-pill"]}>
            <span>We've helped students get into top MBB firms</span>
            <span className={styles["divider"]}></span>
            <Link to="/about" className={styles["read-more"]}>
              Read more
            </Link>
          </div>

          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button
            onClick={handleTryInterview}
            className={styles["button-primary"]}
          >
            Try an Interview
          </button>
        </div>
        <div className={styles["hero-image"]}>
          <img
            src="/assets/HeroCall.avif"
            alt="AI-powered mock interview interface"
            className={styles["video-call-image"]}
          />
          <div className={styles["insight-card-container"]}>
            <InsightSequence />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
