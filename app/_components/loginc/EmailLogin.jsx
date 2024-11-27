'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const EmailLogin = ({getValue}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);

  const handleSubmit = () => {
    console.log({
      email,
      password,
      termsAccepted
    });
    
  };
  // const changeState = ()=>{
  //   getValue(false);
  // }
  // useEffect(()=>{
  //   changeState();
  // },[])
  return (
    <div className="pop-up-register" >
      <div className="pop-up-register-form-div">
        <h2 className='loginh2'>Enter Your Details</h2>
        <div className="loginOptions">
          <div className="loginOption facebookLogin">
            <a href="">
              <img src="/facebook_5968764.png" alt="Facebook" />
            </a>
            <p>Facebook</p>
          </div>
          <div className="loginOption googleLogin">
            <a href="">
              <img src="/google_13170545.png" alt="Google" />
            </a>
            <p>Google</p>
          </div>
        </div>
        <div className="alternateLogin">
          <hr />
          <p>or Login With</p>
          <hr />
        </div>
        <div>
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Your Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="sEmail">
          <p className="sEmailPara">
            Signed in with <span className="linkEmail"><a href='' onClick={()=>{
              getValue();
            }}>Mobile</a></span>
          </p>
        </div>
        <button id="continue-sign-up-btn" onClick={handleSubmit} >Continue</button>
      
        <div>
          <h4 className="dAccount" >
            Don't have an account? <span className="linkEmail"><Link href="/register">Register</Link></span>
          </h4>
        </div>
      </div>

      <style jsx>{`
       

/* 1. Reset & Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: inherit;
}

/* 2. Variables */
:root {
  --primary-color: #007BFF;
  --secondary-color: #6C757D;
  --background-color: #f4f4f9;
  --text-color: #333;
}

.white{
  color: #fff !important;
}

.hide{
  display: none;
}

.show{
  display: block;
}
/* 3. Typography */
.size3xl{
  font-size: 34px;
}
.size2xl{
  font-size: 30px;
}
.sizexl{
  font-size: 24px;
}
.size1 {
  font-size: 20px;
}

.size2 {
  font-size: 16px;
}

.txtsize {
  font-size: 14px;
}

.txtsizesm{
  font-size: 12px;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-color);
  font-weight: bold;
}

p {
  /* margin-bottom: 5px; */
  /* line-height: 14px; */
  color: var(--text-color);
}

/* 4. Links */
a {
  text-decoration: none;
  color: var(--primary-color);
  padding: 0;
  border: none;
  margin: 0;
  font-size: 16px;
}

a:hover {
  color: #0056b3;
}

/* 5. Buttons */
button {
  padding: 10px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: var(--secondary-color);
}

.btn-secondary:hover {
  background-color: #5a6268;
}




/* 6. Containers */
.container {
  max-width: 1269px;
  margin: 0 50px;
  /* padding: 20px; */
}

.container-fullWidth {
  width: 100%;
  max-width: 100vw; /* Ensure it doesn't exceed viewport width */
  margin: 0 auto;
  padding: 0;
 
}

.desktop {
  display: block;
}
.container-flex {
  display: flex;
  gap: 20px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hspace{
  margin-bottom: 30px;
}
.vspace{
  margin: 0 20px;
}

/* 7. Layout and Flexbox Utilities */
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.col {
  flex: 1;
}

.col-50 {
  flex: 0 0 50%;
}

/* 8. Cards */
.card {
  background-color: #fff;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

/* 9. Responsive Design */
@media only screen and (max-width: 768px) {
  /* .container {
      padding: 15px;
  }

  .container-flex {
      flex-direction: column;
      gap: 10px;
  }

  .col-50 {
      flex: 0 0 100%;
  }

  .card {
      width: 100%;
  } */
}

/* 10. Navigation */
header {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 3000;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar a {
  font-size: 16px;
  color: var(--text-color);

}

.navbar a:hover {
  color: var(--primary-color);
}

/* 11. Footer */
footer {
  background-color: var(--secondary-color);
  padding: 20px;
  color: #fff;
  text-align: center;
}




/* Mega Menu */

.mega-menu {
  display: flex;
  gap: 120px;
  /* Adjust the gap between columns as needed */
  padding: 20px;
  justify-content: center;
  z-index: 500000;

}

.mega-menu-column>ul>li {
  list-style: none;
  padding: 20px;
}

.mega-menu-column {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-section {
  display: none;
  position: fixed;
  top: 52px;
  width: 1269px;
  height: 300px;
  background-color: #ffffff;
  z-index: 6000000;
  left: 46.5%;
  transform: translateX(-50%);
  cursor: pointer;
  box-shadow: 0px 25px 20px -20px rgba(0, 0, 0, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.menu-section:hover {
  display: block;
}

.item1-submenu {
  position: absolute;
  top: 10px;
  left: 286px;
  height: 290px;
  width: 750px;
  background-color: #f0f0f5;
  z-index: 10000;
  display: none;
  padding: 10px;
  text-align: center;
}

.item1-submenu>ul {
  list-style: none;
}

.item1-submenu>ul>li {
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #787887;
}

.item1-submenu:hover {
  display: block;
}

.item2-submenu {
  position: absolute;
  top: 10px;
  left: 286px;
  height: 290px;
  width: 710px;
  background-color: #f0f0f5;
  z-index: 10000;
  display: none;
  padding: 10px;
  text-align: center;
}

.item2-submenu>ul {
  list-style: none;
}

.item2-submenu>ul>li {
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #787887;
}

.item2-submenu:hover {
  display: block;
}

.item3-submenu {
  position: absolute;
  top: 10px;
  left: 286px;
  height: 290px;
  width: 710px;
  background-color: #f0f0f5;
  z-index: 10000;
  display: none;
  padding: 10px;
  text-align: center;
}

.item3-submenu>ul {
  list-style: none;
}

.item3-submenu>ul>li {
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #787887;
}

.item3-submenu:hover {
  display: block;
}

.row {
  display: flex;
 
}

.mega-menu-column>hr {
  border: 1px solid #14bef0;
  border-radius: 0px;
}

.mega-menu-column>ul>li {
  border-bottom: 1px solid #787887;
}

.mega-menu-column>h3 {
  padding-bottom: 10px;
  color: #2d2d32;
}

.submenu-header-div {
  display: flex;
  gap: 15px;
  margin-top: 20px;

}

.submenu-header-image {
  height: 60px;
  width: 60px;
  object-fit: cover;
}

.submenu-header-right-div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.submenu-header-right-div>h3 {
  color: #2d2d32;
}

.submenu-header-right-div>p {
  color: #2d2d32;
}



/* Header */
.login-hover {
  display: none;
  position: absolute;
  top: 52px;
  right: 40px;
  font-weight: 700;
  background-color: #e6e6e6;
  border: 2px solid #f0f0f5;
  border-bottom: 3px solid black;
  z-index: 3;
  height: 180px;

}

.user-profile {
  cursor: pointer;
}

.login-hover>ul {
  list-style: none;
  text-align: center;
}





.login-hover>ul>li {
  margin: 12px 20px;
  cursor: pointer;

  color: #17253d;
}




  



















.pop-up-register {
  /* position: fixed; */
  width: 90vw;
  height: 100vh;
  /* background-color: rgba(184, 187, 217, 0.8); */
  left: 0;
  top: 0;
  overflow: hidden;
  /* display: none; */
  /* z-index: 1000; */
}

.alternateLogin {
  /* text-align: center; */
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}


.sEmailPara{
  text-align: center;
  color: #67717e;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4;
  padding-bottom: 12px;
}



.linkEmail {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 22px;
  margin-left: 6px;
  /* float: right; */
  cursor: pointer;
  /* text-decoration: underline; */
  color: #007bff;
  font-weight: 500;
}
.linkEmail:hover{
  text-decoration: underline;
}
.dAccount{
  color: #67717e;
  font-size: 14px;
  /* text-align: center; */
  line-height: 1.4;
  margin-top: 0;
  }
.pop-up-register-show {
  display: block;
}

#pop-up .pop-up-register-form-div {
  position: absolute;
  width: 500px;
  height: 524px;
  background-color: #fff;
  z-index: 2000;
  left: 50%;
  padding: 30px;
  margin-top: 40px;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #b8bbd9;
  border-radius: 10px;
  box-shadow: 10px 10px 5px rgba(184, 173, 173, 0.2);
  /* Horizontal offset, Vertical offset, Blur radius, Color */
  opacity: 1;
}

#pop-up .pop-up-register-form-div > h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #30343e;
    font-weight: 500;
}

.loginh2{
text-align: center;
  margin-bottom: 30px;
  color: #30343e;
    font-weight: 500;
    font-size:24px !important;
}
form {
  /* padding: 20px; */
}

label {
  display: block;
  margin-bottom: 8px;
  color: #30343e;
    font-weight: 500;
}

input[type="email"],
input[type="phone"],input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #0056b3;
}

.otp-container {
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.otp-input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.otp-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.terms-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px;
  margin-bottom: 20px; */
}

.terms-container input[type="checkbox"] {
  margin-right: 10px;
margin-bottom: 0;
}

.terms-container label {
  font-size: 14px;
 
  color: #67717e;
  font-weight: 400;
}

.resend-otp {
  font-size: 14px;
  /* font-weight: 700; */
  margin-bottom: 11px;
  cursor: pointer;
  margin-left: auto;
  /* color: #30343e; */
  color: #007bff;
    font-weight: 500;
}

.resend-otp > a:hover {
  text-decoration: underline;
  
}

.terms-and-resend {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* margin-top: 10px;
  margin-bottom: 20px; */
  gap: 30px;

  /* visibility: hidden; */
}

/* body{

padding-left: 40px;
padding-right: 40px;
} */


.login-signup-button {
  font-size: 13px;
  line-height: 13px;
  color: #737382 !important;
  border-radius: 4px;
  border: solid 1px #d3d3d3;
  padding: 8px 10px;
  background-color: transparent;
  margin-left: 20px;
  cursor: pointer;
}

.login-signup-button:hover {
  color: #007bff !important;
  border: solid 1px #007bff;
}

hr {
  border: 1px solid #f0f0f5;
  border-radius: 0px;
}
.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding-bottom: 16px;
  padding-top: 16px;

}



.logo-container>ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.logo-container>ul>li {
  padding-left: 20px;

}

.logo-container>ul>li>a {
  line-height: 18px;
  font-weight: 500;
  color: #2d2d32;
  letter-spacing: -0.3px;
}

.logoImage {
  height: 44px;
  width: 100px;
  margin-bottom: -3px;
}

.anchorLogo {
  align-self: center;
}


.menu-container {
  display: flex;
  padding-bottom: 13.5px;
  padding-top: 13.5px;
}

.menu-container-parent {
  display: flex;

}

.corporates-dropdown {
  display: flex;
  flex-shrink: 1;
}

.corporates-dropdown>select {
  border: transparent;
  cursor: pointer;

  width: 72%;
}


.corporates-dropdown>select:focus {
  outline: none;
}



.providers-container {
  display: flex;
  justify-content: flex-start;
}


.providers-container>select {
  border: transparent;
  cursor: pointer;
  width: 60%;
}

.providers-container>select:focus {
  outline: none;
}

.security-container {
  display: flex;
  justify-content: flex-start;
  margin-right: 25px;
}

.security-container>select {
  border: transparent;
  cursor: pointer;

}


.security-container>select:focus {
  outline: none;
}

.New {

  background: #28328c;
  color: white;
  border-radius: 8px;
  padding: 4px 6px 4px 6px;
  font-size: 10px;
  align-self: center;
  margin-right: 4px;
  margin-top: 0px;

}

.corporates-container {
  display: flex;
  justify-content: center;

}

/* Media Queries */

.loginOptions {
display: flex;
justify-content: space-around;
margin-top: 20px;
}

.loginOption {
text-align: center;
color: #67717e;
font-weight: 400;
font-size: 14px;
padding-bottom: 12px;
}

.mobileLogin img {
/* Specific styles for email login */
height: 30px;
width: 30px;
object-fit: cover;
}

.facebookLogin img {
/* Specific styles for Facebook login */
height: 30px;
width: 30px;
object-fit: cover;
}

.googleLogin img {
/* Specific styles for Google login */
height: 30px;
width: 30px;
object-fit: cover;
}

.accounts{
margin-top: 20px;
display: flex;
justify-content: space-between;
/* flex-wrap: wrap-reverse */
/* align-content: center; */
gap: 80px;
font-size: 14px;
color: #3ba5e0;
line-height: 1.2;
}

.dealerAccount{
align-self: flex-end;
}


.alternateLogin{
color: #a2adbd;
font-size: 14px;
text-align: center;
line-height: 1.4;
}

.alternateLogin>hr{
border: none;
      border-top: 2px dashed #a2adbd; /* Adjust color and thickness as needed */
      margin: 0px 5px; 
      width: 120px;
      align-self: center;
      
}



  
.logo-container{
  display:block;
}

/* Hamburger Icon */
.hamburger-icon {
  font-size: 30px; /* Adjust size as needed */
   /* Set to a lighter color */
   cursor: pointer;
  transition: color 0.3s ease; /* Smooth transition */
}

/* Styles for Mobile View */
@media (max-width: 768px) {
  .alternateLogin{
    margin-bottom: 20px;
  }
  .navbarMobile  {
      display: none;
      flex-direction: column;
      /* align-items: center; */
      background-color: #fff;
      
      position: absolute;
      width: 60%;
      left: 0px;
      margin: 0 !important;
      padding: 10px 20px;
      box-shadow: 0px 25px 20px -20px rgba(0, 0, 0, 0.45);
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      z-index: 3000;
  }

  .navbarMobile  ul {
      flex-direction: column;
      width: 100%;
  }
  .user-profile-container{
      padding-right: 10px;
  }
  .navbarMobile  ul li {
      width: 100%;
      text-align: left;
      padding: 10px ;
      border-bottom: 0.2px solid #f0f0f5;
  }
  .headerResMobile{
      max-width: none !important;
  }

  .logo-container {
      display: flex;
      /* position: static; */
      flex-direction: row-reverse;
      width: 100%;
      justify-content: space-between;
      padding: 0 5px;
  }
  .navbarMobile.active {
      display: flex; /* Show when the active class is added */
  }
  
  .hamburger-icon {
      display: block; /* Display the hamburger icon on mobile */
  }
  /* Basic dropdown styling */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  /* position: absolute; */
  background-color: #f9f9f9;
 

  z-index: 1;
}

.dropdown-content li {
  padding:  0px;
  list-style: none;
  border-bottom: 0.2px solid #f0f0f5;
}

.dropdown-content li a {
  text-decoration: none;
  color: black;
  display: block;
}

.dropdown-content li a:hover {
 text-decoration: underline;
}

/* Show the dropdown menu on click */
.dropdown.active .dropdown-content {
  display: block;
  background-color: #fff;
}
.icon {
  font-size: 0.8em; /* Adjust size as needed */
  margin-left: 5px; /* Space between text and icon */
  transition: transform 0.2s ease; /* Smooth rotation effect */
}

/* Rotate the icon when the dropdown is active */
.dropdown.active .icon {
  transform: rotate(180deg); /* Rotate the icon to point up */
}
.headerMobileCombine{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 10px;
}

.login-hover {
  display: none; /* Hide by default */
  position: absolute; /* Position it correctly */
  right: 0;
  top: 45px;
  background-color: white; /* Background color */
  z-index: 1000; /* Ensure it's on top */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Optional shadow */
}

.user-profile-container.active .login-hover {
  display: block; /* Show when active */
}

/* loginsignup */
#pop-up .pop-up-register-form-div{
  width: 100%;
  margin-top: 0px;
  border-radius: 0px;
  padding-top: 0px;
}
#pop-up .pop-up-register-form-div > h2{
  font-size: 20px;
  margin: 10px;
}
}
/* Desktop view (769px and above) */
@media (min-width: 769px) {
  .navbar {
      display: flex; /* Always visible on desktop */
  }

  .hamburger-icon {
      display: none; /* Hide the hamburger icon on desktop */
  }
}
/* For small mobile devices (max-width: 600px) */
@media only screen and (max-width: 600px) {
 /* 3. Typography */

.size3xl{
  font-size: 24px;
}
.size2xl{
  font-size: 20px;
}
.sizexl{
  font-size: 16px;
}
.size1 {
  font-size: 14px;
}

.size2 {
  font-size: 12px;
}

.txtsize {
  font-size: 10px;
}

.txtsizesm{
  font-size: 8px;
}
a{
  font-size: 16px;
}


.hspace{
  margin-bottom: 10px;
}
.container{
  /* max-width:max-content; */
 margin: 0px 10px ;
  padding:0px ;
}
.container-fullWidth{
  max-width: max-content;
}
.articles-section{
  display: block;
}
.articles-container{
  flex-direction: column;
  align-items: center;
}

.container-flex {
  display: flex;
  gap: 5px;
}
}
/* Mobile View */
/* Mobile view (Hide headerRes) */
@media only screen and (max-width: 767px) {
  .headerRes {
      display:none;
  }
  .footerRes{
      display: none;
  }
}

/* Desktop view (Show headerRes) */
@media only screen and (min-width: 768px) {
  .headerRes {
      display: block;
  }
  .headerResMobile{
      display: none;
  }
  .footerRes{
      display: block;
  }
}








      `}</style>
    </div>
  );
};

export default EmailLogin;
