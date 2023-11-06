import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import Auth from './Components/Auth';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/login' element={<Auth/>} />  
        <Route path='/project' element={<Project/>} />  
       
        <Route path='/register' element={<Auth register/>} />  
        <Route path='/dashboard' element={<Dashboard/>} />  

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
