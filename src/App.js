import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Project from './Pages/Project';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/login' element={<Login/>} />  
        <Route path='/project' element={<Project/>} />  
        <Route path='/register' element={<Register/>} />  
        <Route path='/dashboard' element={<Dashboard/>} />  

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
