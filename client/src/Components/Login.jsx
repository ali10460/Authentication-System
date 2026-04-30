import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FiMail, FiUser } from "react-icons/fi";
import { data, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
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
  };

  const redirect = useNavigate();

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Login Data: ", form);
    if (email == "alireza@gmail.com" && password == "12345") {
      document.cookie =
        "email=alireza@gmail.com; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
      redirect("./dashboard");
    } else {
      Swal.fire({
        title: "خطا!",
        text: "شما عضو نیستید",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }

    //  Here should connect to the backend
    // fetch("/login" , {method: "POST" , body: JSON.stringify(form) })
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded-2xl shadow-md w-80">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <input
            type="text"
            name="name"
            placeholder={<FiUser />  , "Name"}
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FiMail />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-6 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account?
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
