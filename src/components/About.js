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
      <div>
        <h2>ABOUT ME</h2>
        <span>
          Here you will find more information about me, what I do. <br /> My
          current skills mostly in terms of programming and technology
        </span>
      </div>
      <div className={styles.skills}>
        <div>
          <h2>Get to know me!</h2>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section. I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my Linkedin where I
            post useful content related to Web Development and Programming I'm
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
        </div>
        <div>
          <h3>My Skills</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
