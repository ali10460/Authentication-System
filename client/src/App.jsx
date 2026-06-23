import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRount';
import VerifyEmail from './Components/VerifyEmail';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem('token');

  //     console.log(token);
  //     console.log("Hello")
  //     if (token) {
  //       try {
  //         const res = await axios.get('/api/user/me');
  //         Headers: {
  //           Authorization: `Bearer ${token}`;
  //           setUser(res.data);
  //         }
  //       } catch (error) {
  //         setError('Failed to fetch user data');
  //         localStorage.removeItem('token');
  //       }
  //     }
  //   };
  // });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
