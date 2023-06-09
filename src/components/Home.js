import pin from '../photo/pin.png';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <>
      <h1>I AM FRONT-END REACT DEVELOPER</h1>
      <p>
        Hey ! I am Tornike Altunashvili. Front-end focused developer based in
        Tbilisi, Georgia
        <img src={pin} alt="red pin" className={styles.pin} />
      </p>
    </>
  );
}

export default Home;
