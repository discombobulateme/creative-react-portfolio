import React from 'react';
// Styles
import styled from 'styled-components';
import { StyleAbout } from "../styles";

const FaqSection = () => {
  return (
    <StyleFaq>
      <h2>
        Frequently Asked Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How Do I Start?</h4>
        <div className='answer'></div>
        <p>
          Laboris magna nostrud do id tempor mollit anim velit non sit enim
          laborum ad fugiat.
        </p>
        <p>
          Cillum voluptate do exercitation voluptate do occaecat dolore dolor
          irure duis ex consequat. Sit proident veniam sunt mollit laboris dolor
          ullamco do aute laborum esse qui. Tempor qui incididunt aliqua
          pariatur exercitation deserunt pariatur.
        </p>
        <div className='faq-line' />
      </div>
      <div className='question'>
        <h4>Different Payment Methods</h4>
        <div className='answer'></div>
        <p>
          Laboris magna nostrud do id tempor mollit anim velit non sit enim
          laborum ad fugiat.
        </p>
        <p>
          Cillum voluptate do exercitation voluptate do occaecat dolore dolor
          irure duis ex consequat. Sit proident veniam sunt mollit laboris dolor
          ullamco do aute laborum esse qui. Tempor qui incididunt aliqua
          pariatur exercitation deserunt pariatur.
        </p>
        <div className='faq-line' />
      </div>
      <div className='question'>
        <h4>Daily Schedule</h4>
        <div className='answer'></div>
        <p>
          Laboris magna nostrud do id tempor mollit anim velit non sit enim
          laborum ad fugiat.
        </p>
        <p>
          Cillum voluptate do exercitation voluptate do occaecat dolore dolor
          irure duis ex consequat. Sit proident veniam sunt mollit laboris dolor
          ullamco do aute laborum esse qui. Tempor qui incididunt aliqua
          pariatur exercitation deserunt pariatur.
        </p>
        <div className='faq-line' />
      </div>
    </StyleFaq>
  );
};

const StyleFaq = styled(StyleAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
