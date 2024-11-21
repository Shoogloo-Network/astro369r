'use client'
import React, { useState } from 'react';

import "../../globals.css";
const AdvisorsBanner = ({ imageUrl, title, buttonText }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSignUpClick = () => {
    // Handle sign-up logic here
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <section className="advisorsBanner">

      <div className="advisorsBannerImageDiv container">
        <img
          src={imageUrl}
          alt="advisorsBanner"
          className="advisorsBannerImage"
        />
      </div>
      <div className="phone-input-wrapper container">
        <h1 className="size1">{title}</h1>
        <div className="phone-input-container-div">
          <div className="phone-input-container">
            <div className="phone-input">
              <span className="country-code">+91</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                required
                className="phone-number-input"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>
          <button
            className="send-sms-button size2"
            onClick={handleSignUpClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <style jsx>{`




/* Astrologer list */

.astrologer-list{
    width: 1282px;
    /* height: 90vh; */
    display: flex;
    margin-left:auto;
    margin-right: auto;
}
.astrologer-filter-div {
  max-width: 400px; /* Set a maximum width */
  margin: 20px auto 20px 0px; /* Center it horizontally with auto margins */
  padding: 20px; /* Add some padding inside the div */
  background-color: white; /* Set background color */
  border-radius: 8px; /* Optional: Rounded corners */
  box-shadow: 0 1px 1px rgba(0, 0, 0, .14), 0 2px 1px rgba(0, 0, 0, .12), 0 1px 3px rgba(0, 0, 0, .2);/* Light box shadow */
  text-align: center; /* Center text inside the div */
  /* border: 1px solid rgba(0, 0, 0, 0.1); Light border around the entire div */
  color: #616161;
}

.expertise-section, .expertise-section1 {
  cursor: pointer; /* Change cursor to pointer to indicate clickable */
  margin: 0px 0; /* Add spacing around sections */
  padding: 10px; /* Add padding for better spacing */
  border: 1px solid rgba(0, 0, 0, 0.1); /* Light border for each expertise section */
  border-radius: 5px; /* Optional: Rounded corners for sections */
  transition: background-color 0.3s; /* Smooth transition for background on hover */
}

.expertise-section:hover, .expertise-section1:hover {
  background-color: rgba(0, 0, 0, 0.05); /* Light background change on hover */
}






.astrologer-item-list{
    width: 80%;
    /* background-color: #2d2d32; */
}



/* Desktop Astrologer details */

.astrologer-details{
    display: flex;
    gap: 36px;
    justify-content: center;
    /* overflow-x: scroll; */
    margin: 20px auto;
    /* max-width: 1260px; */

}
.astrologer-image-section{
    display: flex;
    /* gap: 20px; */
}

.astrologer-image{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
}




.availability-dot{
    height: 12px;
    width: 12px;
    background-color: green;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: #2d2d32;
}

.onlineImage{
  display: none;
    height: 40px;
    width: 40px;
    background-color: transparent;
    z-index: -1;
    transform: scaleX(-1);
}

.availability-section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    gap: 2px;
    margin-left: -16.5px;
   
}


.availability-text{
  margin-left: 12px ;
    color: #616161;
}

.astrologer-name{
    color: #286851;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 
    font-family: Tenor Sans, sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: .15px;
    text-transform: capitalize;
    
}





.astrologer-container{
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    height: 300px;
    width: 300px;
    /* background-color: #e7e6e6; */
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .14), 0 2px 1px rgba(0, 0, 0, .12), 0 1px 3px rgba(0, 0, 0, .2);
}






.greeting{
    margin-top: 4px;
    color: #424242;
    /* margin-bottom: 10px; */
   
}

.astrologer-rating{
    display: flex;
    gap: 5px;
    /* font-family: Outfit, sans-serif; */
  
    font-weight: 550;
    color: #424242;
    line-height: 24px;
    letter-spacing: .5px;
}



.star-rating {
    display: flex;
    direction: row;
}

.star {
   
    color: rgb(250, 175, 0);
    /* margin: 0 -1px; */
    cursor: pointer;
    transition: color 0.3s;
    text-align: left;
    /* border: 1px solid rgb(250, 175, 0) ; */
}

.star:hover,
.star:hover ~ .star {
    color: rgb(250, 175, 0);
}


.astrologer-details-section{
    display: flex;
    /* gap: 0; */
}

.detail-item{
    background-color: #ebe2ef;
    font-weight: 500;
    color: #7c3a99;
    line-height: 1;
    letter-spacing: .5px;
    font-weight: 400;
    line-height: 18px;
    font-family: Outfit, sans-serif;
    padding: 10px 15px;
    clip-path: polygon(0 0, 100% 0, 100% 20%, 90% 50%, 100% 80%, 100% 100%, 0 100%);
font-weight: 700;
}



.detail-item2{
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: .5px;
    color: #212121;
    text-decoration: line-through;
}


.astrologer-actions{
    display: flex;
    gap: 48px;
    margin-top: 8px;
    /* justify-content: space-between; */
}



.call-button{
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    background-color: #bdbdbd;
    border-color: #bdbdbd;
    color: #757575;
    cursor: pointer;
    pointer-events: inherit;
    font-family: Outfit, sans-serif;
   
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    padding: 12px 30px;
    border-radius: 6px;
}





.call-button2{
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    background-color: #286851;
    border-color: #286851;
    color: #fff;
    cursor: pointer;
    pointer-events: inherit;
    font-family: Outfit, sans-serif;
  
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    padding: 12px 30px;
    border-radius: 6px;
}


/* Filter  */
.expertise-section{
    cursor: pointer;
}
.filter-checkbox1{
    /* display: none; */
}

.expertise-section1{
    cursor: pointer;
}
.filter-checkbox2{
    display: none;
}


.expertise-down-arrow{
    display: block;
}

.expertise-right-arrow{
    display: none;
}



.expertise-section{
    margin-top: 20px;
    display: flex;
    gap: 60px;
    /* justify-content: center; */
    align-items:center;
    margin-bottom: 15px;
}

.expertise-down-arrow1{
    display: none;
}

.expertise-right-arrow1{
    display: block;
}
.expertise-section1{
    /* margin-top: 20px; */
    display: flex;
    gap: 60px;
    /* justify-content: center; */
    align-items:center;
    margin-bottom: 15px;
}


/* filter check box */

.filter-checkbox1 {
    /* display: flex;
    flex-direction: column;
    gap: 10px; */
    padding: 10px;
    /* margin-bottom: 40px; */
    /* padding-bottom: 40px; */
    /* background-color: #f9f9f9; */
    /* border: 1px solid #ddd; */
    border-radius: 5px;
    width: 200px;
}

.filter-checkbox1 label {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #333;
    margin-bottom:26px;
}

.filter-checkbox1 input[type="checkbox"] {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

/* .filter-checkbox1 label:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 5px;
} */



.filter-checkbox2 {
    /* display: flex;
    flex-direction: column;
    gap: 10px; */
    padding: 10px;
    margin-bottom: 40px;
    /* padding-bottom: 40px; */
    /* background-color: #f9f9f9; */
    /* border: 1px solid #ddd; */
    border-radius: 5px;
    width: 200px;
}

.filter-checkbox2 label {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #333;
    margin-bottom:26px;
}

.filter-checkbox2 input[type="checkbox"] {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

/* .filter-checkbox1 label:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 5px;
} */




/* Banner Section  */

.advisorsBanner{
   
    box-shadow: 0px 8px 5px rgba(184, 173, 173, 0.2);
}

.advisorsBannerImage{
  width: 100%;
}


/* Phone number */

.phone-input-wrapper {
    display: flex;
    /* margin-top: 10px; */
    /* align-items: center; */
    justify-content: space-between;
    /* padding-left: 40px;
    padding-right: 40px; */
}

.phone-input-container-div{
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.send-sms-button {

    background-color: #286851;
    cursor: pointer;
   
    text-decoration: none;
    color: #fff;
    display: inline-block;
    text-align: center;
    border: 0;
    border-radius: 4px;
    outline: none;
    font-weight: 700;
    text-transform: none;
    flex-grow: 0;
    /* Prevents the button from growing */
    width: 130px;
    height: 50px;
}

.send-sms-button:hover{
  background-color: #286851;
}


/* Telephone input */
.phone-input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 20px;
    padding-left: 0;


}

.phone-input {
    display: flex;
    align-items: center;

}

.country-code {
    background-color: transparent;
    padding: 15.5px;
    border: 1px solid #ccc;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    outline: none;
}

input[type="tel"] {
    padding: 17px;
    border: 1px solid #ccc;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    outline: none;
    background-color: transparent;
}

input[type="tel"]:focus {
    border-color: #007BFF;
}


.phone-input-wrapper>h1{
   align-content: center;
    padding-top: 13px;
  
    line-height: 28px;
    color: #000;
    width: 100%;
}




/* Chat Pop Up */


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


.advisorsPopUp{
  position: fixed;
  /* bottom: 40px; */
  /* right: 80px; */
  top: 10px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  /* opacity: 0.4; */
  
}


.chatPopUp {
  position: fixed;
  bottom: 10px;
  right: 430px;
  /* left: auto; */
  width: 450px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
}

.closePopUp {
  position: relative;
  /* bottom: 90px; */
  /* right: 460px; */
  left: 138px;
  top: 0px;
  cursor: pointer;

  z-index: 900;
}

.chatPopUp h1 {

  margin-bottom: 5px;
}

.chatPopUp p {

  margin-bottom: 5px;
}

.details_tab ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.details_tab ul li {
  margin-right: 10px;
}

.details_tab ul li button {
  text-decoration: none;
  border: 1px solid #999;
  padding: 10px 20px;
  border-radius: 2px;
  color: #333;

  background: #fff;
}

.details_tab ul li button:hover {
  background: #286851;
  color: #fff;
}

.dob_input {
  margin: 8px 6px 8px 0;
  padding: 6px 10px;
  width: 100%;
  outline: none;
  border: 1px solid #e7e7e7;
 
  border-radius: 3px;
  color: #999;
}

.gender_selection {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.dob_selection, .time_selection {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.partnerLable{
  display: inline-block;
  margin-bottom: 8px;
  font-weight: bold;
  margin-left: 4px;
}
.time_unsure {
  display: flex;
  align-items: center;
  /* gap: 10px; */
  justify-content: space-between;
}
.time_unsure>p{
  font-weight: bold;
  margin-bottom: 13px;
}
.chatPopUp button {
  background-color: #286851;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 5px;

}

.chatPopUp button:hover {
  background-color: #45a049;
}

.chatPopUp .switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.chatPopUp .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.chatPopUp .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
}

.chatPopUp .slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.chatPopUp input:checked + .slider {
  background-color: #286851;
}

.chatPopUp input:checked + .slider:before {
  transform: translateX(14px);
}
.shareDetails{

    margin-bottom: 5px;
    text-align: center;
}
.dob{
  color: #737373;
    margin-bottom: 5px;
   

}
.tBirth{
  color: #737373;
  margin-bottom: 5px;
 
}
@media screen and (max-width: 760px) {
  .chatPopUp {
    
    width: 100%;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    border-radius: 0;
  
  }
  .closePopUp{
   position: static;
   
    font-size: 14px !important;
  }
  .chatPopUp h1{
    font-size: 20px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .chatPopUp p{
    font-size: 12px !important;
    text-align: center;
  }
.details_tab{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
  .details_tab ul {
    flex-direction: row;
    justify-content: center;
  }
  .advisorsPopUp{
    top: 0;
  }
  .details_tab ul li {
    
  }
  .details_tab ul li button {
    padding: 6px;
  }
  .dob_selection, .time_selection {
    
  }

  .dob_input {
    width: 100%;
    margin-bottom: 10px;
  }
}




#partnerDetails{
  display: none;
}




/* Mobile responsiveness */
/* Mobile view adjustments */
@media screen and (max-width: 760px) {

  /* Astrologer list */
  .astrologer-list {
    width: 100%; /* Full width for mobile */
   /* gap: 20px; */
    margin: 0 auto; /* Center content */
     /* Add padding for better spacing */
     
  }

  .astrologer-actions{
   justify-content: space-between;
   width: 100%;
  }

  /* Astrologer container */
  .astrologer-container {
    width: 100%; /* Full width for the container */
    height: auto; /* Let height adjust dynamically */
    padding: 5px; /* Ensure good padding */
  }

  /* Astrologer details */
  .astrologer-details {
    flex-direction: column; /* Stack astrologer details vertically */
   gap: 20px;
    margin: 10px auto;
  }
  .astrologer-item-list{
    width: 100%;
  }
  /* Adjust button size */
  .call-button, .call-button2 {
    padding: 10px 20px; /* Reduce button size */
    font-size: 14px; /* Smaller font for mobile */
  }

  /* Star rating */
  .star-rating {
    justify-content: flex-start; /* Align stars to the left */
  }

  /* Filter section */
  .astrologer-filter-div {
    max-width: 35%; /* Full width filter section */
    margin: 10px 0; /* Reduce top margin */
    display: none;
  }
.filter-checkbox1 label{
  font-size: 13px;
}
.expertise-section{
  gap: 8px;
}
.expertise-section1{
  gap: 8px;
}
  .phone-input-wrapper > h1 {
    /* font-size: 18px; Adjust heading font size */
    width: 100%;
  }

  /* Chat pop-up */
  .chatPopUp {
    width: 80%; /* Full width on mobile */
  top: 40px;
    border-radius: 0;
  }
  .dob_selection, .time_selection{
    margin-bottom: 0;
    gap: 0;
  }
  /* Flex direction for list items */
  
  .phone-input-wrapper{
    flex-direction: column;
    align-items: center;
  }
  .astrologer-filter-div{
    padding: 4px;
  }
  .filter-checkbox1 input[type="checkbox"] {
    margin-right: 5px;
    width: 14px;
    height: 14px;
   
}
.filter-checkbox1{
  padding: 0;
}
.send-sms-button{
  width: 80px;
  height: 40px;
}
input[type="tel"]{
  padding: 11px;
}
.country-code{
  padding: 9.8px;
}
.phone-input-container{
  padding: 5px;
}
}




`}</style>
    </section>
  );
};

export default AdvisorsBanner;
