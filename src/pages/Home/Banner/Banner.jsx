import React from 'react';
import doc01 from '../../../assets/assets_frontend/successful-medical-team.jpg';
import doc02 from '../../../assets/assets_frontend/about_image.png';
import doc03 from '../../../assets/assets_frontend/i-love-my-job-so-much.jpg';
import doc04 from '../../../assets/assets_frontend/contact_image.png'; 

const Banner = () => {
    return (
        <div className="carousel  h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={doc01} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl top-0 left-0 items-center flex  bg-gradient-to-r from-[#151515] to-[rgb   a(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
            <h2 className='md:text-6xl sm:text-2xl  font-bold'>The guesswork when it comes to your Health</h2>
            <p>lncrease your mental and physical performance with data-driven health assessments using your blood biomarkers</p>
            <button className="btn btn-accent">Accent</button>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={doc02} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl top-0 left-0 items-center flex  bg-gradient-to-r from-[#151515] to-[rgb   a(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2  '>
            <h2 className='md:text-6xl sm:text-2xl font-bold'>The guesswork when it comes to your Health</h2>
            <p>lncrease your mental and physical performance with data-driven health assessments using your blood biomarkers</p>
            <button className="btn btn-accent">Accent</button>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          
            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={doc03} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl top-0 left-0 items-center flex  bg-gradient-to-r from-[#151515] to-[rgb   a(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
            <h2 className='md:text-6xl sm:text-2xl font-bold'>The guesswork when it comes to your Health</h2>
            <p>lncrease your mental and physical performance with data-driven health assessments using your blood biomarkers</p>
            <button className="btn btn-accent">Accent</button>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={doc04} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl top-0 left-0 items-center flex  bg-gradient-to-r from-[#151515] to-[rgb   a(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
            <h2 className='md:text-6xl sm:text-2xl  font-bold'>The guesswork when it comes to your Health</h2>
            <p>lncrease your mental and physical performance with data-driven health assessments using your blood biomarkers</p>
            <button className="btn btn-accent">Accent</button>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2  transform justify-end">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;