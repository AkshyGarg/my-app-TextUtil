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
  const [alert,setAlert] = useState("Good Morning Folks","sucess");
  const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      });
      // setTimeout(() => {
      //   setAlert('');
      // }, 1500);
  }
  const togglemode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.title = 'TextUtil - Dark Mode';
      showAlert("Dark mode has been enabled","Sucess");
    }
    else{
      setMode('light');
    document.title = 'TextUtil';
    showAlert("Light mode has been enabled","Sucess");
    }
    // setInterval(() => {
    // document.title = 'TextUtil - Downloaded ';
    // <Alert message="Good Moring Folks"></Alert>
    // }, 1800);
  }

  
  return (
    <>
    <Navbar title="TextUtil" aboutText = "About" mode={Mode} toggleMode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <TextForm title="Example Textarea" heading="Enter text to analyze" /> */}
    <Router>
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm title="Example Textarea" heading="Enter text to analyze" /> }/>
      </Routes>
    </Router>
    </div>
    {/* <About/> */}
    </>    
  );
}

export default App;
