import { Mail, User, UserPlus, Lock, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data: ", form);

    // Here should connect to the backend
    // fetch("/register" , {method: "POST" , body: JSON.stringify(form)})
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-90">
          <div className="flex items-center justify-center mb-4 ">
            <div className="inline-flex items-center justify-center text-center w-12 h-12 rounded-[1.2rem] bg-green-500 text-white shadow-xl">
              <UserPlus size={28} strokeWidth={2} />{" "}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb- text-center">Create Account</h2>
          <p className="py-4 italic text-slate-500">
            Initialize your porfile in the Auth Lab vault
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name input */}

            <label className="block text-[14px] font-black text-slate-400 uppercase-widest mb-1 ml-1">
              Name
            </label>
            <div className="relative group mb-4">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-400 transition-colors">
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email input */}

            <label className="block text-[14px] font-black text-slate-400 uppercase-widest mb-1 ml-1">
              Email Address
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
                required
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button "
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <Eye size={18} />
              </button>
            </div>

            {/* Confirm Password Input */}

            <label className="block text-[14px] font-black text-slate-400 uppercase-widest mb-1 ml-1">
              Confirm Password
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
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button "
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <Eye size={18} />
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
              onClick={handleSubmit}
            >
              Register
            </button>
            <p className="text-center mt-2">
              Already Verified?
              <Link to="/" className="text-green-500">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
