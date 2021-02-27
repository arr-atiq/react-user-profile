import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import UserInformation from './Components/UserInformation/UserInformation';

const App = () => {
  return (
    <div>
      <Header></Header>
      <UserInformation></UserInformation>
    </div>
  );
};

export default App;