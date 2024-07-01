import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/navbar';
import CreateMCQ from './components/createMCQ';



function App() {
  return (
    // <> 
    //   <BrowserRouter>
    //     <Routes>
    //     <Route path="/login" component={Login} />
    //     <Route path="/register" component={Register} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createMCQ" element={<CreateMCQ />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
