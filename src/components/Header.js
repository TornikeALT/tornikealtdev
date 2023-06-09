import myimage from '../photo/toka4.jpg';
import styles from '../styles/header.module.css';

function Header() {
  return (
    <div className={styles.header}>
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
              <a href="./">HOME</a>
            </li>
            <li>
              <a href="./#about">ABOUT</a>
            </li>
            <li>
              <a href="./#projects">PROJECTS</a>
            </li>
            <li>
              <a href="./#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
