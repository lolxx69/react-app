import { useState } from 'react';
import './App.css';
// import About from './components/About';
import FormUtils from './components/FormUtils';
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="ReactApp" mode={mode} toggleMode={toggleMode} />
      <FormUtils heading="Form Elements" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
