import React from 'react';
//Styles
import { StyleAbout, StyleDescription, StyleImage } from '../styles';
import styled from 'styled-components';
// Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
  return (
    <StyleServices>
      <StyleDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyleCards>
          <StyleCard>
            <div className='icon'>
              <img src={clock} alt='Clock icon' />
              <h3>Efficient</h3>
            </div>
            <p>Service description</p>
          </StyleCard>
          <StyleCard>
            <div className='icon'>
              <img src={teamwork} alt='2 people together icon' />
              <h3>Team Work</h3>
            </div>
            <p>Service description</p>
          </StyleCard>
          <StyleCard>
            <div className='icon'>
              <img src={diaphragm} alt='A camera diafragm icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Service description</p>
          </StyleCard>
          <StyleCard>
            <div className='icon'>
              <img src={money} alt='Money icon' />
              <h3>Affordable</h3>
            </div>
            <p>Service description</p>
          </StyleCard>
        </StyleCards>
      </StyleDescription>
      <StyleImage>
        <img src={home2} alt='Camera' />
      </StyleImage>
    </StyleServices>
  );
};

const StyleServices = styled(StyleAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
