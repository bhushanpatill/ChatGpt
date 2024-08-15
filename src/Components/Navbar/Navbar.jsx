import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import Signin from "../Modal/Signin.jsx";
import Signup from "../Modal/Signup.jsx";
import {Link, NavLink} from 'react-router-dom'

// const Menu = () => (
//   <>
//     <p>
//       <a href="#Home">Home</a>
//     </p>
//     <p>
//       <a href="#wgpt3">What is GPT3?</a>
//     </p>
//     <p>
//       <a href="#possibility">Open AI</a>
//     </p>
//     <p>
//       <a href="#features">Case Studies</a>
//     </p>
//     <p>
//       <a href="#blog">Library</a>
//     </p>
//   </>
// );

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [signinmodal, signinsetModal] = useState(false);
  const [signupmodal, signupsetModal] = useState(false);
  // const handleOpenModal = () => {
  //   setModal(true);
  // };
  return (
    <div className="gpt3__navbar">
      {signinmodal && <Signin signinsetModal = {signinsetModal}/>}
      {signupmodal && <Signup signupsetModal = {signupsetModal}/>}
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {/* <Menu /> */}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={()=>signinsetModal(true)}>Sign in</p>
        <button onClick={()=>signupsetModal(true)} type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {/* <Menu /> */}
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
                <Link to = '/signin' onClick={()=>signinsetModal(true)}>Sign in</Link>
                <button type="button" onClick={()=>signupsetModal(true)}>Sign Up</button>
              </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Navbar;
