import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About';
import Alert from './Components/Alert';
import React ,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const togglemode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.title = 'TextUtil - Dark Mode';
    }
    else{
      setMode('light');
    document.title = 'TextUtil';
    }
    // setInterval(() => {
    // document.title = 'TextUtil - Downloaded ';
    // }, 1800);
  }

  
  return (
    <>
    <Navbar title="Akshyy" aboutText = "About" mode={Mode} toggleMode={togglemode}/>
    <Alert message="Good Moring Folks"></Alert>
    <Router>
    <div className="container">
      <Routes>
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/" element={<TextForm title="Example Textarea" heading="Enter text to analyze" />}/>
      </Routes>
    </div>
    </Router>
    {/* <About/> */}
    </>    
  );
}

export default App;
