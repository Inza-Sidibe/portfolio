"use client";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
];

const AchievementsSection = () => {
  return (
    <div>
     
    </div>
  );
};

export default AchievementsSection;
