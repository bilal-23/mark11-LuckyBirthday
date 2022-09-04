import React from 'react';
import styles from "./PrivacyPopup.module.css";

const PrivacyPopup = ({ closePopup }) => {
    return <>
        <div className={styles.modal}>
            <p>We do not store your data</p>
            <button className='button' onClick={closePopup}>Ok</button>
        </div>
        <div className={styles.overlay}></div>
    </>

}

export default PrivacyPopup;