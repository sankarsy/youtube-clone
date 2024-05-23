
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';


function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/Video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>

  );
}

export default App;
