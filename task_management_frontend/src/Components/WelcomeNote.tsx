import React from "react";
import Header from "./Header";

const WelcomeNote: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="h1 text-center mt-5" style={{ fontFamily: "cursive" }}>
        Welcome to <br /> Task Management System
      </div>
    </div>
  );
};

export default WelcomeNote;
