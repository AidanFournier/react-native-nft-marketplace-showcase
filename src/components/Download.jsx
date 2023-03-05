import React from 'react'

import styles from '../styles/Global';
import { scene } from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Checkout the full source code on GitHub</p>
        </div>
        <button onClick={() => window.open("https://github.com/AidanFournier/react-native-nft-marketplace", "_blank")} className={`${styles.btnPrimary}`}>Source Code</button>
        <div className={styles.flexCenter}>
          <img src={scene} alt="Assortment of mockups" className={styles.fullImg} />
        </div>
      </div>
    </div>
  )
}

export default Download