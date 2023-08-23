import styles from '../styles/projects.module.css';
import satesto from '../photo/satesto.jpeg';
import tbilisiRent from '../photo/teest.png'
import imafake from '../photo/fake.png'
import pirus from '../photo/pirus.png'


function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projects_box}>
        <h2 className={styles.projects_title}>PROJECTS</h2>
        <div className={styles.yellowbrik_wrapper}>
          <div className={styles.yellowbrik}></div>
          <h3>
            Here you will find personal projects, which i created with my own
            studies.
          </h3>
          <h3>Each project is unique peace of development</h3>
        </div>
      </div>
      <div className={styles.projects_box}>
        <div className={styles.project}>
          <div>
            <img src={tbilisiRent} alt="" className={styles.img} />
          </div>
          <div className={styles.porfolioContent}>
            <h3>Tbilisi Rent</h3>
            <p>
              Welcome to Tbilisi Rent, your go-to destination for hassle-free car rentals! Discover the joy of exploration with our wide selection of well-maintained vehicles, perfectly suited to meet your travel needs. From compact cars for city cruising to spacious SUVs for family trips, we've got you covered. With easy online booking, flexible rental options, and top-notch customer support, your journey begins with Tbilisi Rent. Hit the road with confidence and start your adventure today!
            </p>
            <a
              href="https://tbilisi-rent.netlify.app"
              target="blank"
              className={styles.btn_project}
            >
              LIVE DEMO
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div>
            <img src={imafake} alt="" className={styles.img} />
          </div>
          <div className={styles.porfolioContent}>
            <h3>Fake store</h3>
            <p>
              Welcome to Fake store , your one-stop online shop for the latest in fashion and technology. We offer a wide selection of women's and men's clothing, ranging from casual streetwear to elegant formal attire. Our electronics department showcases the newest smartphones, laptops, and gadgets to keep you at the cutting edge of technology. Additionally, explore our exquisite jewelry collection for the perfect finishing touches to your look. With a seamless shopping experience, secure transactions, and prompt delivery, Fake store is here to cater to all your fashion and tech needs. Happy shopping!
            </p>
            <a
              href="https://imafake-store.netlify.app"
              target="blank"
              className={styles.btn_project}
            >
              LIVE DEMO
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div>
            <img src={pirus} alt="" className={styles.img} />
          </div>
          <div className={styles.porfolioContent}>
            <h3>PIRUS</h3>
            <p>
              "At PIRUS, we're passionate about the digital realm's boundless possibilities. With a dedicated team of creative visionaries and technical experts, we specialize in crafting tailored digital solutions that elevate your brand's online presence. From responsive web design and development to data-driven digital marketing strategies, we're committed to driving your success in the digital landscape. Let us transform your ideas into a compelling digital reality, ensuring your brand stands out in the crowded online world."
            </p>
            <a
              href="https://github.com/TornikeALT?tab=repositories"
              target="blank"
              className={styles.btn_project}
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
