import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stories from './components/pages/Stories';
import Signin from './components/pages/SignIn';
import Festivals from './components/pages/Festivals';
import Temples from './components/pages/Temples';
import Signup from './components/pages/SignUp';
import Search from './components/pages/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EpisodeCards from './components/Episodes/EpisodeCards';
import EpisodeContent from './components/EpisodeContent/EpisodeContent';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position='bottom-center' />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/festivals' element={<Festivals />} />
          <Route path='/temples' element={<Temples />} />
          <Route path='/episodes' element={<EpisodeCards />} />
          <Route path='/episode-content' element={<EpisodeContent />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
