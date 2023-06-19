import styles from '../styles/projects.module.css';
import satesto from '../photo/satesto.jpeg';

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projects_box}>
        <h2 className={styles.projects_title}>PROJECTS</h2>
        <div className={styles.yellowbrik}></div>
        <h3>
          Here you will find personal projects, which i created with my own
          studies.
        </h3>
        <h3>Each project is unique peace of development</h3>
      </div>
      <div className="projects_box">
        <div className={styles.project}>
          <div>
            <img src={satesto} alt="" className={styles.img} />
          </div>
          <div className={styles.porfolioContent}>
            <h3>DOPEFOLIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              illo sapiente eos veniam reprehenderit quasi mollitia inventore
              dolor, doloribus odio!
            </p>
            <button>LIVE DEMO</button>
          </div>
        </div>
        <div className={styles.project}>
          <div>
            <img src={satesto} alt="" className={styles.img} />
          </div>
          <div className={styles.porfolioContent}>
            <h3>DOPEFOLIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              illo sapiente eos veniam reprehenderit quasi mollitia inventore
              dolor, doloribus odio!
            </p>
            <button>LIVE DEMO</button>
          </div>
        </div>
        <div className={styles.project}>
          <div>
            <img src={satesto} alt="" className={styles.img} />
          </div>
          <div className={styles.porfolioContent}>
            <h3>DOPEFOLIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              illo sapiente eos veniam reprehenderit quasi mollitia inventore
              dolor, doloribus odio!
            </p>
            <button>LIVE DEMO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
