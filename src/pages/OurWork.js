import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim } from '../animation';

const OurWork = () => {
  return (
    <StyleWork
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animated='show'
      style={{ background: '#fff' }}
    >
      <StyleMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-athlete'>
          <StyleHide>
            <motion.img variants={photoAnim} src={athlete} alt='The Athlete' />
          </StyleHide>
        </Link>
      </StyleMovie>
      <StyleMovie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-racer'>
          <StyleHide>
            <motion.img src={theracer} alt='The Racer' />
          </StyleHide>
        </Link>
      </StyleMovie>
      <StyleMovie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/good-times'>
          <StyleHide>
            <motion.img src={goodtimes} alt='Good Times' />
          </StyleHide>
        </Link>
      </StyleMovie>
    </StyleWork>
  );
};

const StyleWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyleMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyleHide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
