import React, { useState } from "react";
import { Link } from "react-router-dom";
import briefcase from "../assets/briefcase.png";
import menu from "../assets/menu.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogin = () => {
    setShow(false); // Close menu (for mobile)
    navigate("/Login");
  };

  const handleSignup = () => {
    setShow(false);
    navigate("/Signup");
  };

  return (
    <nav className="bg-white shadow-md p-4">
      {/* Top Nav */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h4 className="text-3xl font-extrabold tracking-tight text-gray-900 font-sans">
            <span className="text-indigo-600">Work</span>Naija
          </h4>
          <img className="w-7" src={briefcase} alt="Briefcase" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/Careers">Careers</Link>
          <Link to="/JobSeeker">Job Seeker</Link>
          <Link to="/Employer">Employer</Link>
          <Link to="/HelpCentre">Help Centre</Link>
          <button className="cursor-pointer" onClick={handleLogin}>
            Login
          </button>
          <div className="h-6 w-0.5 bg-black"></div>
          <button className="cursor-pointer" onClick={handleSignup}>
            Signup
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => navigate("/PostJob")} // Optional: Add this route
          >
            Post a Job
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setShow(!show)}
          className="md:hidden focus:outline-none"
        >
          <img src={menu} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link to="/Careers" onClick={() => setShow(false)}>Careers</Link>
          <Link to="/JobSeeker" onClick={() => setShow(false)}>Job Seeker</Link>
          <Link to="/Employer" onClick={() => setShow(false)}>Employer</Link>
          <Link to="/HelpCentre" onClick={() => setShow(false)}>Help Centre</Link>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
          <button
            onClick={() => {
              setShow(false);
              navigate("/PostJob"); // Optional route
            }}
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Post a Job
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
