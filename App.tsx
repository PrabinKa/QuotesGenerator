import React from 'react';
import { StatusBar } from 'react-native';
import { MainScreen } from './src/screens';


function App(): React.JSX.Element {


  return (
    <>
    <StatusBar backgroundColor={"#FFF"} barStyle={'dark-content'} />
      <MainScreen/>
    </>
  );
}

export default App;
