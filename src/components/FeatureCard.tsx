import React from "react";

const FeatureCard = ({
  icon,
  title,
  subtitle,
  bgColor,
}: {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  bgColor: string;
}) => {
  const styles : React.CSSProperties = {
    backgroundColor: bgColor,
    textAlign:"center",
    flexGrow:"1",
    padding: "1.5rem",
  };

  return (
    <div style={styles}>
      <div className="py-3 mx-auto">{icon}</div>
      <h3 className="py-3">{title}</h3>
      <p className="py-3">{subtitle}</p>
    </div>
  );
};

export default FeatureCard;
