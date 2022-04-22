import logo from './logo.svg';
import './App.css';
import Home from "./Components/Navbar";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Mounting from './Components/Mounting';
import Updating from './Components/Updating';
import Unmounting from './Components/Unmounting';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">

      
     <h1 className="display-1 bg-primary bg-gradient">Component Life Cycle</h1> 


      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mounting/>} />
        <Route path="/Mounting" element={<Mounting/>} />
        <Route path="/Updating" element={<Updating />} />
        <Route path="/Unmounting" element={<Unmounting/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
