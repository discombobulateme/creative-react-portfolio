import React from 'react';

const ServicesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src='' />
              <h3>Efficient</h3>
            </div>
            <p>Service description</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src='' />
              <h3>Team Work</h3>
            </div>
            <p>Service description</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src='' />
              <h3>Diaphragm</h3>
            </div>
            <p>Service description</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src='' />
              <h3>Money</h3>
            </div>
            <p>Service description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
