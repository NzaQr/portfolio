import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import "./Header.css";
const DARK_CLASS = "dark";

export default function Header({ handleClickAbout, handleClickProjects }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );

  const [isDark, setIsDark] = useState(systemPrefersDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  const handleToggle = (event) => {
    setIsDark(event.target.checked);
  };

  return (
    <div className="header-container">
      <div className="dark-mode-container">
        <label className="switch">
          <input type="checkbox" checked={isDark} onClick={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="nav">
        <div className="menu-icons">
          {sidebar ? (
            <MdClose alt="close menu" onClick={showSidebar} />
          ) : (
            <FaBars alt="open menu" onClick={showSidebar} />
          )}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="item">
              <p onClick={handleClickAbout}>SOBRE MI</p>
            </li>
            <li className="item">
              <p onClick={handleClickProjects}>PROYECTOS</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-item-container">
        <p className="nav-item" onClick={handleClickAbout}>
          SOBRE MI
        </p>
        <p className="nav-item" onClick={handleClickProjects}>
          PROYECTOS
        </p>
      </div>
    </div>
  );
}
