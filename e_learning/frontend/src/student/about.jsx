import React from "react";
import './about.css';
import Navbar from "./Navbar";

function AboutUs() {
  return (
    <div className="container mt-4" id="About">
      <Navbar/>
      {/* Start About Us Container */}
      <h2 className="text-center mb-4">About Us</h2> {/* About Us Heading */}
      <div className="row"> {/* Start About Us Row */}
        
        {/* Start About Us 1st Column */}
        <div className="col-md-8">
          <p>
            Welcome to iSchool! We are dedicated to providing quality education to students
            from all backgrounds. Our mission is to foster a learning environment that encourages
            personal and academic growth. We offer a variety of programs and resources to help
            students succeed in their studies and beyond. Join us in our journey to make education
            accessible and impactful for everyone.
          </p>
        </div>
        {/* End About Us 1st Column */}
        
        {/* Start About Us 2nd Column */}
        <div className="col-md-4 stripe text-white text-center">
          <h4>Contact Information</h4>
          <p>
            iSchool, <br />
            Near Police Camp II, Bokaro, <br />
            Jharkhand - 834005<br />
            Phone: +00000000 <br />
            www.ischool.com
          </p>
        </div>
        {/* End About Us 2nd Column */}
        
      </div> {/* End About Us Row */}
    </div> /* End About Us Container */
  );
}

export default AboutUs;
