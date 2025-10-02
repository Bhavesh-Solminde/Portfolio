import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [isScroll, setIsScroll] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`navbar     z-30 ${isScroll ? "scrolled" : "not-scrolled"}`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="inner">
        <a href="#hero" className="logo">
          Bhavesh Solminde
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <a href={`${link.link}`}>
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
