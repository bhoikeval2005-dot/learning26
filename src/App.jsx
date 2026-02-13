import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponents } from './components/HeaderComponents';
import { FooterComponent } from './components/FooterComponent';
import ContectComponent from './components/ContectComponent';
import { Portfolio } from './components/Portfolio';
import { Mapdemo1 } from './components/mapdemo1';
import { Mapdemo2 } from './components/Mapdemo2';
import { Mapdemo3 } from './components/Mapdemo3';
import { Mapdemo4 } from './components/Mapdemo4';
import { Mapdemo5 } from './components/Mapdemo5';
import { Route, Routes } from 'react-router-dom';
import { NetflixHome } from './components/NetflixHome';
import { HomeComponent } from './components/HomeComponent';
import { Navbar } from './components/Navbar';
import { NetflixMovies } from './components/NetflixMovies';
import {NetflixShows} from './components/NetflixShows'
import { ErrorNotFound } from './components/ErrorNotFound';
import { Watch } from './components/Watch';
import { FunctionDemo1 } from './components/FunctionDemo1';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3.JSX';
import { Employees } from './components/Employees';


// import './App.css'


function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path ="/NetflixHome" element={<NetflixHome/>}></Route>
        <Route path ="/" element={<HomeComponent/>}></Route>
        <Route path ="/NetflixMovies" element={<NetflixMovies/>}></Route>
        <Route path="/NetflixShows" element={<NetflixShows/>}></Route>
        <Route path="/*" element={<ErrorNotFound/>}></Route>
        <Route path="/watch/:name" element={<Watch/>}></Route>
        <Route path="/FunctionDemo1" element={<FunctionDemo1/>}></Route>
        <Route path="/UseStateDemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/UseStateDemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/UseStateDemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/employees" element ={<Employees/>}></Route>
      </Routes>
    </div>
     );
}

export default App
