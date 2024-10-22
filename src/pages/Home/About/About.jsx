import React from "react";
import parts from "../../../assets/assets_frontend/parts.jpg";
import parts2 from "../../../assets/assets_frontend/parts02.jpg.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={parts2} className="w-3/5 rounded-lg shadow-2xl border-indigo-200 border-8" />
          <img src={parts}className="w-1/2 absolute border-indigo-200 right-5 top-1/2 rounded-lg shadow-4xl border-8"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4 ">
          <h3 className="text-4xl font-bold text-emerald-800 ">Our Doctors</h3>
          <h1 className="text-3xl font-bold ">Specialist Doctors List in Bangladesh!</h1>
          <p className="py-6 ">
            At Praava, Family Medicine Doctors as well as Visiting Specialists
            take care of you. Our doctors have years of local and international
            experience and treat you with the respect and empathy you deserve.
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
