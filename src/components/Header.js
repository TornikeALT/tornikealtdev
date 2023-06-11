import myimage from '../photo/toka4.jpg';
import styles from '../styles/header.module.css';
import hamburger from '../photo/icons/hamburger.png';
import cancelIcon from '../photo/icons/cancel.png';

import { useState } from 'react';

function Header() {
  const [show, setShow] = useState(false);

  const handledropDown = () => {
    setShow(show => !show);
  };

  return (
    <header className={styles.header}>
      <div className={styles.image_container}>
        <img
          src={myimage}
          alt="tornike white and black"
          className={styles.my_Image}
        />
        <h2>TornikeDev</h2>
      </div>
      <div>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      {show ? (
        <img
          src={cancelIcon}
          alt="hamburger"
          onClick={handledropDown}
          className={styles.hamburger}
        />
      ) : (
        <img
          src={hamburger}
          alt="hamburger"
          onClick={handledropDown}
          className={styles.hamburger}
        />
      )}

      {show && (
        <div className={styles.dropDown}>
          <ul>
            <li className={styles.lielbotborder}>
              <a href="/">HOME</a>
            </li>
            <li className={styles.lielbotborder}>
              <a href="#about">ABOUT</a>
            </li>
            <li className={styles.lielbotborder}>
              <a href="#projects">PROJECTS</a>
            </li>
            <li className={styles.noborderLastLiel}>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
