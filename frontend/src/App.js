import {React,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes ,useNavigate} from 'react-router-dom';
import Layout from './components/common/Layout';
import Login from './components/User/Login';
import Register from './components/User/Register';
// import Layout from './components/common/Layout';
// import Navbar from './components/common/Navbar';

const PrivateRoute = ({ component: Component }) => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem('authToken');

    useEffect(() => {
      if (!isAuth) {
        navigate('/login');
      }
    }, [isAuth, navigate]);

    return isAuth ? <Component /> : null;
};


function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;