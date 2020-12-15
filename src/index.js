import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo(){

const divStyle = {

position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
alignItems: 'auto',

border: '1px solid black',  

width: '300px',
height: '500px',
padding: '1rem',

display: 'flex',
flexDirection: 'column',
background: '#d9e8ff',

color: 'black'

}
  return (
    <div style={divStyle}>
      <h1>Littbarski Adeh</h1>
        <p>Born and raised in Nigeria, Software developer learning Blockchain Development at Georgebrown COllege.</p>
      <ul>
        <li>Paris</li>
        <li>Dubai</li>
        <li>Jamaica/</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
);
