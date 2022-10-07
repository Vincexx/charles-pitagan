import React from "react";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <div className="bg-card text-center py-6">
      <p className="text-sub text-sm">
        Copyright {currentYear} &copy; Charles Pitagan
      </p>
    </div>
  );
};

export default Footer;
