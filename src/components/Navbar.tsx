import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "../styles/navbar-dark.css"
import "../styles/navbar-light.css";
import { useThemeContext } from "../contexts/theme-context-utils";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbMenu2 } from "react-icons/tb";

function Navbar() {
  const navRef = useRef<HTMLElement | null>(null); // Initialize as null

  const { contextTheme, setContextTheme } = useThemeContext();
  const [themeChecked, setThemeChecked] = useState(false);

  const handleTheme = () => {
    setContextTheme((state) => (state === "light" ? "dark" : "light"));
    setThemeChecked(!themeChecked);
  };

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <div>
      <header className={`header-${contextTheme}`}>
        <nav ref={navRef} className={`navbar ${contextTheme}`}>
          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <AiOutlineClose />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <TbMenu2 className={`navbar-icon ${contextTheme}`} />
        </button>

        <button onClick={handleTheme} className={`mode-btn ${contextTheme}`}>
          {contextTheme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
        {/* 
        <DarkModeButton />
         */}
        </header>
    </div>
  );
}

export default Navbar;
