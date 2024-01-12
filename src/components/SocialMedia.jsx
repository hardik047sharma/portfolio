import { SectionWrapper } from "../hoc";
import React from 'react';
import {
    linkedin,
    github,
    mail,
    phone,
  } from "../assets";
  
  const SocialMediaCard = ({ logo, value, url }) => {
    const handleCardClick = () => {
      if (url) {
        window.open(url, '_blank');
      }
    };
  
    return (
      <div
        style={{
          textAlign: 'center',
          color: '#fff',
          background: '#1d1836', // Updated background color
          padding: '20px', // Increased vertical padding
          borderRadius: '5px',
          margin: '10px', // Even spacing around each card
          width: '260px', // Fixed width for each card
          cursor: url ? 'pointer' : 'default', // Set cursor based on the presence of url
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={handleCardClick}
      >
        <img
          src={logo}
          alt={`${value} logo`}
          style={{ width: '13%', height: 'auto', marginBottom: '15px', objectFit: 'contain' }} // Changed to 'contain'
        />
        <p style={{ margin: '0', fontSize: '14px' }}>{value}</p>
      </div>
    );
  };
  
  const SocialMediaComponent = () => {
    const socialMediaList = [
      {
        logo: linkedin,
        value: 'hardik-sharma-4k47',
        url: 'https://www.linkedin.com/in/hardik-sharma-4k47/',
      },
      {
        logo: github,
        value: 'hardik047sharma',
        url: 'https://github.com/hardik047sharma',
      },
      {
        logo: phone,
        value: '+91 9340953578',
      },
      {
        logo: mail,
        value: 'hardik.sharma4765@gmail.com',
      },
    ];
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', }}>
        {socialMediaList.map((item, index) => (
          <SocialMediaCard key={index} {...item} />
        ))}
      </div>
    );
  };
  
export default SectionWrapper(SocialMediaComponent, "contact");
// export default YourComponent;