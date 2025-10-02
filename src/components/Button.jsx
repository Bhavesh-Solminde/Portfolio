import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById("counter");
        if (element && id) {
          const offset = window.innerWidth * 0.15;
          const top =
            element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" }); // Scrolls to the element with a smooth behavior
        }
      }}
      href="#"
      className={`${className ?? ""} cta-warapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
