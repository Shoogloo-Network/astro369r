'use client'
import React, { useState } from 'react';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [sendOtp,setSendOtp]=useState(false);
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = () => {
    console.log({
      phone,
      otp: otp.join(''),
      termsAccepted
    });
  };
const handleContinue = ()=>{
  setSendOtp(!sendOtp);
}
  return (
    <div className="pop-up-register container" style={{display:'block'}}>
      <div className="pop-up-register-form-div">
        <h2>Enter Your Details</h2>
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
          <p>Or Login With</p>
          <hr />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="phone"
            id="phone"
            value={phone}
            placeholder="+91 6399889123"
            onChange={(e) => setPhone(e.target.value)}
          />
          
        </div>
        
       
       {
           sendOtp && <div> 
            <div className="otp-container">
            <h4>Enter OTP</h4>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div> <div className="terms-and-resend">
           <div className="terms-container">
             <input
               type="checkbox"
               id="terms"
               name="terms"
               checked={termsAccepted}
               onChange={(e) => setTermsAccepted(e.target.checked)}
             />
             <label htmlFor="terms">
               I agree to the <a href="#">terms and conditions</a>
             </label>
           </div>
           <div className="resend-otp"><a href="#">Forgot Password?</a></div>
         </div>
          <button id="continue-sign-up-btn" onClick={handleSubmit}>Submit</button></div>
       }
      <div className="sEmail">
          <p className="sEmailPara">
            Signed in with <span className="linkEmail"><a href="emailLogin.html">Email</a></span>
          </p>
        </div>
        {!sendOtp && <button id="continue-sign-up-btn" onClick={ handleContinue}>Continue</button>}
        <div>
          <h4 className="dAccount">
            Don't have an account? <span className="linkEmail"><a href="individualSignup.html">Register</a></span>
          </h4>
        </div>
      </div>

      <style jsx>{`
      



  .pop-up-register {
   
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

  .pop-up-register-show {
    display: block;
  }

  #pop-up .pop-up-register-form-div {
    width: 500px;
    height: 412px;
    background-color: #fff;
    z-index: 1001;
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

  form {
    /* padding: 20px; */
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #30343e;
    font-weight: 500;
  }

  input[type="email"],
  input[type="phone"] {
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
    /* color: #30343e; */
    /* font-weight: 500; */
  }

  button:hover {
    background-color: #0056b3;
  }

  .otp-container {
    display: flex;
    /* visibility: hidden; */
    // display: none;
   /* margin-left: auto; 
   margin-right: auto; */
    gap: 10px;
    /* margin-top: 10px; */
    margin-bottom: 20px;
    text-align: center;
  }

  .otp-container>h4{
    text-align: left;
    margin-bottom: 10px;
    color: #30343e;
    font-weight: 500;
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
    /* justify-content: space-between; */
    align-items: center;
    /* margin-top: 10px;
    margin-bottom: 20px; */
    margin-bottom: 0;
  }

  .terms-container input[type="checkbox"] {
    margin-right: 10px;
   
  }

  .terms-container label {
    font-size: 14px;
   
    color: #67717e;
    font-weight: 400;
  }

  .resend-otp {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
    margin-left: auto;
    /* float: right; */
    cursor: pointer;
    color: #30343e;
    font-weight: 500;
    color: #007bff;
  }

  .resend-otp > a:hover {
    text-decoration: underline;
   
  }

  .terms-and-resend {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    /* margin-top: 10px;
    margin-bottom: 20px; */
    /* gap: 30px; */

    /* visibility: hidden; */
    padding-left: 0;
    padding-right: 0;
    // display: none;
  }

  header {

    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 3000;
    padding-left: 40px;
    padding-right: 40px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
}


.login-signup-button {
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
    color: #007BFF !important;
    border: solid 1px #007BFF;
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
.emailLogin img {
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
margin-top: 10px;
display: flex;
justify-content: space-between;
/* flex-wrap: wrap-reverse */
/* align-content: center; */
gap: 80px;
font-size: 14px;
color: #007bff;
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
/* margin-top: 20px; */
}

.alternateLogin>hr{
border: none;
        border-top: 2px dashed #a2adbd; /* Adjust color and thickness as needed */
        margin: 0px 5px; 
        width: 120px;
        align-self: center;
        
}

.dAccount{
color: #67717e;
font-size: 14px;
/* text-align: center; */
line-height: 1.4;
margin-top: 0;
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

export default Login;
