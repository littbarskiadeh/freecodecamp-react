import MyInfo from './Components/MyInfo';
import React from 'react';
// import NavBar from './Components/NavBar';

function App() {

  const divStyle={
    display:'flex', flexDirection:'column', alignItems: 'center',
    justifyContent: 'center', fontFamily:'\'Nanum Pen Script\', cursive',
  }

  return (
    <div style={divStyle}>
      {/* <NavBar /> */}
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
    </div>
  );
}

export default App;
