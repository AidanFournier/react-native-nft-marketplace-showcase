import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse, video }) => {
  return (
    <div className={`
      min-h-screen 
      ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}
    `}>
      <div className={`
        flex items-center 
        w-11/12 
        sm:w-full 
        minmd:w-3/4 
        ${reverse ? styles.boxReverseClass : styles.boxClass}
      `}>
        <div className={`
          ${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"} 
          ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
            ${styles.h1Text}
            ${reverse ? styles.blackText : styles.whiteText}
          `}>{title}</h1>
          <p className={`
            ${styles.descriptionText}
            ${reverse ? styles.blackText : styles.whiteText}
          `}>{description}</p>
          {showBtn && (
            <Button 
              assetUrl={assets.expo}
              Link="https://expo.dev/@aidoufou"
            />
          )}
        </div>
        <div className={`flex-1 p-8 sm:px-0 ${styles.flexCenter}`}>
          {mockupImg && <img src={mockupImg} alt="mockup" className={`
            ${reverse ? " fadeLeftMini" : " fadeRightMini"} 
            ${styles.sectionImg}`
          } />}
          {video && <video width="844" height="390" autoPlay loop muted >
            <source src={video} type="video/mp4" alt="App running on mobile device" className={`
            ${reverse ? " fadeLeftMini" : " fadeRightMini"}`
            } /> Your browser does not support the video tag.
          </video>}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper