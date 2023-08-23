import styles from '../styles/MyContact.module.css'
import { BiCurrentLocation, BiMailSend } from 'react-icons/bi'


function MyContact() {
    return (
        <div className={styles.container}>
            <h4 className={styles.finger_contact}>CONTACT</h4>
            <div className={styles.finger}>
                Don't be shy! Hit me up! 👇
            </div>
            <div className={styles.locationAndMail}>
                <div className={styles.location}>
                    <div className={styles.social_icon_bg}>
                        <BiCurrentLocation color='#facf0f' size={60} />
                    </div>
                    <div className={styles.location_content}>
                        <h3>Location</h3>
                        <span>Georgia, Tbilisi</span>
                    </div>
                </div>
                <div className={styles.location}>
                    <div className={styles.social_icon_bg}>
                        <BiMailSend color='#facf0f' size={60} />
                    </div>
                    <div className={styles.location_content}>
                        <h3>Mail</h3>
                        <span>tornikealtunashvili@yahoo.com</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MyContact;