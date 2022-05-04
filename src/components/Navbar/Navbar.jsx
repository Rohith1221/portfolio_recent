import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div>
        {/* <img src={images.logo} alt="logo"></img> */}
        <h1 className="portfolio_name">ROHITH</h1>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "skills", "Contact", "Resume"].map(
          (item) => {
            return (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                {item === "Resume" ? (
                  <a
                    href="https://drive.google.com/file/d/1G955qQ5g_llxOUR8DxdAPzaESQODkZ9k/view?usp=sharing"
                    target="_blank"
                  >
                    {item}
                  </a>
                ) : (
                  <a href={`#${item}`}>{item}</a>
                )}
              </li>
            );
          }
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Work", "skills", "Contact", "Resume"].map(
                (item) => {
                  return (
                    <li key={item}>
                      {item === "Resume" ? (
                        <a
                          href="https://drive.google.com/file/d/1G955qQ5g_llxOUR8DxdAPzaESQODkZ9k/view?usp=sharing"
                          target="_blank"
                          onClick={() => setToggle(false)}
                        >
                          {item}
                        </a>
                      ) : (
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      )}
                    </li>
                  );
                }
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
