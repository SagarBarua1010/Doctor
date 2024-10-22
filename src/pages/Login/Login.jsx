import React from 'react';
import { FcGoogle } from "react-icons/fc";
import img from "../../assets/assets_frontend/parts02.jpg.jpg"
import { Link } from 'react-router-dom';

const Login = () => {
 
    return (
        <div className="hero bg-base-200 min-h-screen   ">
          <div className="hero-content flex-col lg:flex-row">
    
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
              <div className="card-body">
              <figure>
                <img className="h-30"
                  src={img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                  
              </div>
                </div>
    
                
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className="text-3xl text-center font-bold mt-10">Login</h1>
                <form  onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text mt-2">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered "
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text mt-2">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-5">
                    <button className="btn btn-info">Login</button>
                  </div>
                 
                    <p className="text-center justify-center mt-2 py-2">OR</p>
                 
                  <div className="form-control  mt-2">
                  <button className="btn bg-primary-content "><FcGoogle/> Sign In With Google</button>
                  </div>
                </form>
                <p className="my-4 text-center">
                  New to Car Doctors
                  <Link className="text-orange-600 font-bold" to="/signup">
                    Sign UP
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Login;