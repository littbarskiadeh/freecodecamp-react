import React from 'react';
import LikeButton from './LikeButton';

function MyInfo(){

  const divStyle = {
    margin: '.5rem',
    alignItems: 'auto',
    
    border: '1px solid black',  
    borderRadius: '.8rem',
    maxWidth: '250px',
    textWrap: '0',
    padding: '1rem',
    height: 'auto',
    
    display: 'flex',
    flexDirection: 'column',
    background: '#d9e8ff',
  }

  return (
    <div style={divStyle}>
      <h1>Littbarski Adeh</h1>
        <p>Born and raised in Nigeria, Software developer learning Blockchain Development at Georgebrown COllege.</p>
      <ul>
        <li>Paris</li>
        <li>Dubai</li>
        <li>Jamaica</li>
      </ul>
      <LikeButton />
    </div>
  );
}

export default MyInfo;