import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// const fetchUserInfo = async (userId) => {
//   try {
//     const response = await fetch(`http://localhost:5001/api/user/info/${userId}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching user info:", error);
//     return null;
//   }
// };
const Layout = () => {
//   const location = useLocation();
//   const [user, setUser] = useState({ name: "", email: "", avatar: "" });

//   useEffect(() => {
//     const userId = localStorage.getItem("uid");
//     if (userId) {
//       fetchUserInfo(userId).then((userInfo) => {
//         setUser(userInfo);
//         // console.log(userInfo);
//       });
//     }

//   }, []);
//   const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div>
    <Navbar />
    <Footer />
    </div>
  );
};

export default Layout;