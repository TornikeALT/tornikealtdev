import pin from '../photo/pin.png';
import styles from '../styles/home.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Home() {
  return (

    <>
      <div className={styles.home}>
        <h1>I AM FRONT-END REACT DEVELOPER</h1>
        <p>
          Hey ! I am Tornike Altunashvili. Front-end focused developer based in
          Tbilisi, Georgia
          <img src={pin} alt="red pin" className={styles.pin} />
        </p>
        <div className={styles.projects_box}>
          <a href="./#projects" className={styles.projects_btn}>
            PROJECTS
          </a>
        </div>

      </div>
      <div className={styles.side_social_icons}>
        <a href="https://github.com/TornikeALT?tab=repositories" target='blank'>
          <FaGithub size={50} color='black' />
        </a>
        <a href="https://github.com/TornikeALT?tab=repositories" target='blank'>
          <FaLinkedin size={50} color='black' />
        </a>
      </div>
    </>

  );
}

export default Home;
