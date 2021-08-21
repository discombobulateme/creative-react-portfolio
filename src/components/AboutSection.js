import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
// Styles
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../styles';

import home1 from '../img/home1.png';
import Wave from './Wave'

const AboutSection = () => {
  return (
    <StyleAbout>
      <StyleDescription>
        <motion.div className='title'>
          <StyleHide>
            <motion.h2 variant={titleAnim}>We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variant={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variant={titleAnim}>true.</motion.h2>
          </StyleHide>
        </motion.div>
        <motion.p variant={fade}>
          Contact us for any creative job you need. We have professionals that
          will make your wild dreams come true.
        </motion.p>
        <motion.button variant={fade}>Get in touch</motion.button>
      </StyleDescription>
      <StyleImage>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt='Man with a camera'
        ></motion.img>
      </StyleImage>
      <Wave />
    </StyleAbout>
  );
};

export default AboutSection;
