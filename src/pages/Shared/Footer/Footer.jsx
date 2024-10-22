import React from 'react';
import logo from '../../../assets/assets_admin/admin_logo.svg';

const Footer = () => {
    return (
        <footer className="footer bg-primary-content text-primary-200 p-10 rounded-xl mt-10">
  <aside>
    <img src={logo} alt="" />
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the <br /> 1500s, when an unknown printer took a galley of type and scrambled it to<br /> make a type specimen book.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">COMPANY</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Contact us</a>
    <a className="link link-hover">Privacy policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">GET IN TOUCH</h6>
    <a className="link link-hover">+8801856609099</a>
    <a className="link link-hover">sagarbarua1010@gmail.com</a> 
  </nav>
 
</footer>
    );
};

export default Footer;