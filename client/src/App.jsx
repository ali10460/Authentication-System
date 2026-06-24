import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import VerifyEmail from './Components/VerifyEmail';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // const [user, setUser] = useState('');
  // const [error, setErorr] = useState('');

  // useEffect(async () => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     try {
  //       const res = await axios.post('api/users/', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setUser(res.data);
  //     } catch (error) {
  //       setErorr('Failed to fetch user data');
  //       localStorage.removeItem('token');
  //     }
  //   }
  // });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;