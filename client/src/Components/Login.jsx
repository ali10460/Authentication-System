import { useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AlertCircle, Eye, Lock, LogIn, Mail, User } from 'lucide-react';
import axios from 'axios';

function Login({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/users/', form);
      localStorage.setItem('token', res.data.token);
      console.log(res.data);
      setUser(res.data);
      navigate('/');
    } catch (error) {
      console.error(error.response?.data?.message || 'Login failed!');
    }

    if (form.email == '' || form.password == '') {
      console.log('please fill the inputs!');
    } else console.log('Login Data: ', form);

    // if (email == "alireza@gmail.com" && password == "12345") {
    //   document.cookie =
    //     "email=alireza@gmail.com; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
    //   redirect("./dashboard");
    // } else {
    //   Swal.fire({
    //     title: "خطا!",
    //     text: "شما عضو نیستید",
    //     icon: "error",
    //     confirmButtonText: "بستن",
    //   });
    // }

    //  Here should connect to the backend
    // fetch("/login" , {method: "POST" , body: JSON.stringify(form) })
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-90">
          <div className="flex items-center justify-center mb-4 ">
            <div className="inline-flex items-center justify-center text-center w-12 h-12 rounded-[1.2rem] bg-blue-600 text-white shadow-xl">
              <LogIn size={28} strokeWidth={2} />{' '}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb- text-center">Login</h2>
          <p className="py-4">Enter your credential to access the system</p>

          {/* Conditional Rendering  */}
          {/* <div className="mb-4 flex items-center gap-2 p-4 bg-rose-50 border border-rose-50">
            <AlertCircle size={18} className="shrink-0" />
            <p className="text-[10px] font-black uppercase tracking-wide">
              Error
            </p>
          </div> */}

          <form
            action="/"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              {/* Email input */}

              <label className="block text-[14px] font-black text-slate-400 uppercase-widest mb-1 ml-1">
                Identity(Email)
              </label>
              <div className="relative group mb-4">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-400 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Password Input */}

              <label className="block text-[14px] font-black text-slate-400 uppercase-widest mb-1 ml-1">
                Password
              </label>
              <div className="relative group mb-4">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-400 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button "
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* RememberMe CheckBox */}

              <div className="flex items-center p-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400 border-slate-300 rounded-md cursor-pointer "
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-xs text-slate-500 font-bold cursor-pointer select-none "
                >
                  Remember Me
                </label>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer"
              >
                Login
              </button>

              {/* Redirect to Register Page */}

              <p className="text-center mt-4">
                Don't have an account?
                <Link to="/register" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
