import styles from '../styles/about.module.css';
import html from '../photo/icons/html.png';
import css from '../photo/icons/css.png';
import js from '../photo/icons/js.png';
import reactIcon from '../photo/icons/react.png';
import gitIcon from '../photo/icons/git.png';
import gitHubIcon from '../photo/icons/github.png';
import graphQlIcon from '../photo/icons/graphql.png';
import reduxIcon from '../photo/icons/redux.png';
import tailwindIcon from '../photo/icons/tailwind.png';

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.yellow_brik_box}>
        <h2 className={styles.aboutMe}>ABOUT ME</h2>
        <div className={styles.yellowbrik}></div>
        <span className={styles.information}>
          Here you will find more information about me, what I do. <br /> My
          current skills mostly in terms of programming and technology
        </span>
      </div>
      <div className={styles.skills}>
        <div className={styles.information_aboutme}>
          <h2>Get to know me!</h2>
          <p>
            I'm Tornike Altunashvili, a dedicated front-end developer with a passion for React. I specialize in creating dynamic, user-friendly web applications that harness the power of this cutting-edge library.
          </p>
          <h4>What I offer</h4>
          <ul>
            <li>
              React Mastery: I excel in developing interactive, component-based web applications using React.
            </li>
            <li>
              Responsive Design: Your web app will look and perform flawlessly across all devices.
            </li>
            <li>
              Performance Optimization: I prioritize fast loading times and cross-browser compatibility.
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.my_skills}>My Skills</h3>
          <div className={styles.skill_box}>
            <div className={styles.skill}>
              <img src={html} alt="html" />
              <span>HTML</span>
            </div>
            <div className={styles.skill}>
              <img src={css} alt="css" />
              <span>CSS</span>
            </div>
            <div className={styles.skill}>
              <img src={js} alt="javascript" />
              <span>JAVASCRIPT</span>
            </div>
            <div className={styles.skill}>
              <img src={reactIcon} alt="javascript" />
              <span>REACT</span>
            </div>
            <div className={styles.skill}>
              <img src={reduxIcon} alt="redux" />
              <span>REDUX</span>
            </div>
            <div className={styles.skill}>
              <img src={tailwindIcon} alt="tailwind" />
              <span>TAILWIND</span>
            </div>
            <div className={styles.skill}>
              <img src={gitHubIcon} alt="github" />
              <span>GITHUB</span>
            </div>
            <div className={styles.skill}>
              <img src={graphQlIcon} alt="graphql" />
              <span>GRAPHQL</span>
            </div>
            <div className={styles.skill}>
              <img src={gitIcon} alt="git" />
              <span>GIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
