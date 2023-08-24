import styles from '../styles/contact.module.css';
import linkedInIcon from '../photo/social-icons/linkedin.png';
import githubIcon from '../photo/social-icons/github.png';

function Contact() {
  return (
    <footer className={styles.blackfooter}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.socialinfo}>
            <h2>Tornike Altunashvili</h2>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div>
            <h4>SOCIAL</h4>
            <div className={styles.icons}>
              <a href="https://www.linkedin.com/in/tornike-altunashvili-204a67246/" target="blank">
                <img src={linkedInIcon} alt="linkedin icon" />
              </a>
              <a href="https://github.com/TornikeALT" target="blank">
                <img src={githubIcon} alt="github icon" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.lowerFooter}>
          <p>
            © Copyright 2023. Made By
            <a href="/#" target="blank">
              Tornike Altunashvili
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
