import React from 'react';

const ServicesCard = ({service}) => {
    const { speciality, img , about,experience,name,degree} = service;
    return (
    <div className="card bg-base-100 w-96 shadow-xl border-indigo-200 border-8 mt-10">
  <figure className="px-10 pt-10 ">
    <img src={img} alt="Shoes" className="rounded-xl h-60 w-full " />
  </figure>
  <div className="card-body ">
    <h3 className="card-title text-2xl text-emerald-800">Name: {name}</h3>
    <h2 className="card-title">{speciality}</h2>
    <p>Degree : {degree}</p>
    <p>Experience : {experience}</p>
    <div className="card-actions justify-end  ">
      <button className="btn btn- btn-accent">Buy Now</button>
    </div>
  </div>
  
</div>


      
    );
};

export default ServicesCard;