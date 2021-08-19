import React from 'react';

const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className='hide'>
            <h2>true.</h2>
          </div>
        </div>
        <p>Giving a great description</p>
        <button>Get in touch</button>
      </div>
      <div className='image'>
        <img src='' alt='image description'></img>
      </div>
    </div>
  );
}

export default AboutSection;
