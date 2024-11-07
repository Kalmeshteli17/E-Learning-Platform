// src/components/Home.jsx
import React from "react";
import Navbar from "./Navbar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <h1>Welcome to the E-learning Platform</h1>
      <p>Hi! You're logged in and ready to learn!</p>
    </div>
  );
}

export default Home;

