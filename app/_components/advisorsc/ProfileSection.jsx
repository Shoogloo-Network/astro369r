'use client'
import React from 'react';

const ProfileSection = ({ profile, onAppointmentToggle }) => {
  return (
    <section className="mainProfileSection">
      <div className="profileSection container">
        <div className="profile-image-section">
          <div className="profile-image-wrapper">
            <img
              src={profile.image}
              alt="advisorProfile"
              className="profile-image"
            />
          </div>
          <div className="profile-status">
            <p className="status-online">ONLINE</p>
          </div>
        </div>
        <div className="profile-details-section">
          <div className="profile-header">
            <div className="profile-name-section">
              <h1 className="profile-name">{profile.name}</h1>
              <div className="astrologer-info">
                <p className="greeting">
                  <span>
                    <i className="fa-solid fa-graduation-cap" /> {profile.experience} Years Of
                    experience
                  </span>
                </p>
                <p className="greeting">{profile.specialties.join(' | ')}</p>
                <p className="greeting">
                  <span>
                    <i className="fa fa-language" aria-hidden="true" />
                    &nbsp;{profile.languages.join(' | ')}
                  </span>
                </p>
                <p className="greeting">
                  <span>
                    <i className="fa-solid fa-map-marker" aria-hidden="true" />{" "}
                    {profile.location}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="profile-actions-mainDiv">
            {profile.actions.map((action, index) => (
              <div className="profile-actions" key={index}>
                <div
                  className="action-1"
                  style={{ borderColor: action.borderColor, color: action.color }}
                >
                  <i className="fa-solid fa-award" />
                  <p>{action.freeMinutes} free min</p>
                </div>
                <div
                  className="action-2"
                  style={{ backgroundColor: action.backgroundColor }}
                  onClick={()=>{
                    if(action.type==='Appointment'){
                        onAppointmentToggle();
                    }
                  }}
                >
                  <img src={action.icon} alt={action.type} />
                  <div className="action-2-chat">
                    <h3>{action.type}</h3>
                    <p>{action.rate}/min</p>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      <style jsx>{`









/* Profile section */

.profileSection {
    display: flex;
    padding: 2px; /* Reduced */
    /* justify-content: center; */
    gap: 40px;
    /* margin-left: 40px;
    margin-right: 40px; */
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    margin-bottom: 20px;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    background-color: #e7f6f5;
}

.profile-image-section{
    width: 30%;
}
.profile-image-wrapper {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

.profile-image-wrapper > img {
    width: 76%;
    height: 76%;
    /* min-width: 382px; */
    transition: all .3s ease;
    z-index: 1;
    border-radius: 10px;
    object-fit: cover;
    position: relative;
}

.profile-status {
    width: 28%;
    border-radius: 20px;
    background-color: #73c940;
    text-align: center;
    margin: -10px auto; /* Adjusted */
    border: 3px solid #fff;
    z-index: 2;
    margin-left: 76px;
    position: relative;
    /* justify-self: flex-start; */
}

.status-online {
    color: #fff;
    font-weight: 700;
    font-size: 12px; /* Reduced */
    padding: 6px 20px; /* Reduced */
}

.profile-name {
    font-size: 20px; /* Reduced */
    font-weight: 600;
    line-height: 30px; /* Reduced */
    margin-bottom: 0px;
    color: rgba(0, 0, 0, 0.85);
    text-align: left;
}

.profile-alias {
    color: #9d9d9d;
    font-size: 20px; /* Reduced */
    font-weight: 300;
}

.profile-header {
    display: flex;
    margin-bottom: 5px;
    /* gap: 160px; */
}

.profile-rating-icons {
    display: none;
}

.action-1 {
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #286851;
    padding: 4px 2px;
    position: relative;
    color: #286851;
    gap: 5px;
    cursor: pointer;
    width: 60%;
    text-align: center;
    margin: -10px 28px; /* Adjusted */
}

.action-1 > p {
    font-size: x-small; /* Reduced */
}

.action-2 {
    background-color: #286851 !important;
    box-shadow: rgba(0, 0, 0, 0.25) 0px -2px 0px inset;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 148px;
    height: 142px;
    padding-top: 20px; /* Reduced */
    padding-bottom: 10px; /* Reduced */
}

.action-2 > img {
    width: 76px;
    height: 76px;
    vertical-align: middle;
    border-style: none;
}

.action-2-chat > h3 {
    font-weight: 700;
    font-size: 16px; /* Reduced */
    color: rgb(255, 255, 255);
    line-height: 20px;
    cursor: pointer;
    text-align: center;
}

.action-2-chat > p {
    color: rgb(255, 255, 255);
    font-size: 14px; /* Reduced */
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
    text-align: center;
}

.profile-actions-mainDiv {
    display: flex;
    gap: 40px; /* Reduced */
}

.profile-stats {
    display: flex;
    gap: 20px; /* Reduced */
}

.readings-count {
    font-weight: 400;
    font-size: 14px; /* Reduced */
    line-height: 30px;
    color: rgba(0, 0, 0, 0.85);
}

.readings-count-span {
    font-weight: 600;
    font-size: 14px; /* Reduced */
    line-height: 30px;
}

.reviews-count,
.clients-count {
    display: none;
}

.profile-details-section {
    display: flex;
    flex-direction: column;
    gap: 14px; /* Reduced */
}

.voice_active {
    display: none; /* Hide by default */
}

.action-2:hover .chat_active {
    display: none; /* Hide chat_active on hover */
}

.action-2:hover .voice_active {
    display: block; /* Show voice_active on hover */
}

/* 5 min section bell section */

.astrologer-details-section {
    display: flex;
}

.detail-item {
    background-color: #ebe2ef;
    font-weight: 500;
    color: #7c3a99;
    line-height: 1;
    font-size: 14px; /* Reduced */
    letter-spacing: .5px;
    padding: 8px 15px; /* Reduced */
    clip-path: polygon(0 0, 100% 0, 100% 20%, 90% 50%, 100% 80%, 100% 100%, 0 100%);
    font-weight: 700;
}

.detail-item2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px; /* Reduced */
    font-weight: 500;
    line-height: 18px;
    letter-spacing: .5px;
    color: #212121;
    text-decoration: line-through;
}

.profile-item-price{
  font-size: 16px;
}
.bellSection {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
}

.bell {
    display: flex;
    gap: 20px;
}

.contactDetails {
    display: none;
    position: absolute;
    right: 134px;
    top: 432px;
    flex-direction: column;
    margin-top: 5px; /* Reduced */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    /* padding-top: 0px; */
    text-decoration: underline;
    background-color: #e7f6f5;
}

/* Appointment section */
/* Main Page Layout */
.appointment-page {
    max-width: 1080px;
    margin: 10px auto; /* Reduced */
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    color: #333;
}

/* Header Section */
.header-section {
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* Reduced */
}

.profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
}

.header-info h1 {
    font-size: 20px; /* Reduced */
    font-weight: 700;
    margin-bottom: 5px;
}

.rating {
    display: flex;
    align-items: center;
}

.rating span {
    font-size: 16px; /* Reduced */
    font-weight: 600;
    margin-right: 5px;
}

.rating i {
    color: #ffcc00;
}

.rating p {
    margin-left: 10px;
    font-size: 12px; /* Reduced */
    color: #777;
}

.session-duration-section,
.session-type-section {
    margin-bottom: 10px; /* Reduced */
}

select {
    width: 100%;
    padding: 8px; /* Reduced */
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 12px; /* Reduced */
}

.session-type-section > h2 {
    font-size: 16px; /* Reduced */
    font-weight: 600;
    margin-bottom: 5px; /* Reduced */
}

/* Session Duration Dropdown */
.session-duration-section {
    margin-bottom: 20px; /* Reduced */
}

.session-duration-section h2 {
    font-size: 16px; /* Reduced */
    font-weight: 600;
    margin-bottom: 5px; /* Reduced */
}

#session-duration-dropdown {
    width: 100%;
    padding: 8px; /* Reduced */
    font-size: 12px; /* Reduced */
    border-radius: 8px;
    border: 1px solid #ddd;
}

/* Date and Time Picker Layout (Side by Side) */
.date-time-section {
    display: flex;
    justify-content: space-between;
    gap: 20px; /* Reduced */
    margin-bottom: 20px; /* Reduced */
}

.date-picker-container,
.time-picker-container {
    flex: 1;
}

.date-picker-container h2,
.time-picker-container h2 {
    font-size: 16px; /* Reduced */
    font-weight: 600;
    margin-bottom: 5px; /* Reduced */
}

.date-picker input[type="date"] {
    width: 100%;
    padding: 10px; /* Reduced */
    font-size: 12px; /* Reduced */
    border-radius: 8px;
    border: 1px solid #ddd;
}

.time-slots {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.time-slot {
    background-color: #286851;
    color: white;
    padding: 8px 20px; /* Reduced */
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 12px; /* Reduced */
    width: 100px;
    text-align: center;
}

.time-slot:hover {
    background-color: #0d271e;
}

/* Booking Confirmation */
.booking-confirmation {
    text-align: center;
}

.book-appointment-btn {
    background-color: #286851;
    color: white;
    padding: 10px 20px; /* Reduced */
    border-radius: 8px;
    font-size: 14px; /* Reduced */
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
}

.book-appointment-btn:hover {
    background-color: #0d271e;
}

/* My Attribute Section */
.myAttributes {
  /* padding: 20px; */
 padding-top: 10px;
  border-radius: 8px; /* Rounded corners for the section */
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 20px;
}

.myAttributes>h1{
  font-size: 20px;
margin-bottom: 20px;
}
.attributes-card {
  display: flex; /* Use flexbox for layout */
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
  gap: 20px; /* Space between each card */
}

.card {
  flex: 1 1 calc(25% - 20px); /* 4 cards in a row with gap */
  padding: 20px;
  background-color: white; /* Background for the card */
  border-radius: 10px; /* Rounded corners for the card */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  display: flex;
  flex-direction: column; /* Stack content vertically */
  cursor: pointer;
}

.card div {
  margin-bottom: 10px; /* Space between title and content */
}

.column {
  display: flex;
  flex-direction: column; /* Align items in a column */
}

.column span {
  margin: 5px 0; /* Space between items */
  font-size: 14px;
  
}





/* About Me Section */

.aboutMe {
  display: flex; /* Use flexbox for layout */
  /* Center align items vertically */
  padding: 20px;
  /* background-color: #f0f4f8; Light background color */
  border-radius: 10px; /* Rounded corners for the section */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.profile-image {
  flex: 1; /* Take up one part of the flex container */
}

.profile-image img {
  width: 100%; /* Make image responsive */
  border-radius: 10px; /* Rounded corners for the image */
}

.about-content {
  flex: 2; /* Take up two parts of the flex container */
  padding-left: 20px; /* Space between image and text */
  display: flex;
  flex-direction: column; /* Stack items vertically */
}
.about-content>h1{
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left;
}
.about-text {
  margin-bottom: 0px; /* Space below text */
  line-height: 1.6; /* Improved readability */
  font-size: 14px;
  text-align: justify;
}

.hidden-text {
  display: none; /* Initially hide the additional text */
}

.read-more {
  position: relative;
  background-color: transparent; 
  color: #6f8de1;
  font-size: 14px;
  align-self: flex-end;
 
  width: 100px;
  text-decoration: wavy;
  font-weight: 600; /* Button text color */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  /* padding: 10px 15px;  */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Transition for hover effect */
}

.read-more:hover{
  background-color: transparent;
  text-decoration: underline;
}


/* My reviews And rating */
.ratings-reviews {
  padding: 20px;
  background-color: #f9f9f9; /* Light background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  max-width: 1080px; /* Max width for the section */
  margin: 20px auto; /* Center align section */
}
.ratings-reviews>h1{
  font-size: 20px;
}
h1 {
  text-align: center; /* Center the title */
  margin-bottom: 20px; /* Space below the title */
}

.rating-summary {
  display: flex; /* Flexbox for rating summary */
  justify-content: center; /* Center content */
  margin-bottom: 20px; /* Space below the rating summary */
}

.average-rating {
  font-size: 16px; /* Larger font size for rating */
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 10px; /* Space between rating and count */
 color:  #555;
}

.review-count {
  font-size: 14px; /* Smaller font size for review count */
  color: #555; /* Gray color for count */
}

.review {
  background-color: white; /* White background for reviews */
  border-radius: 8px; /* Rounded corners for review */
  padding: 15px; /* Padding inside review */
  margin-bottom: 15px; /* Space between reviews */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.username {
  font-weight: bold; /* Bold username */
  color: #333; /* Darker color for username */
}

.date {
  font-size: 0.9rem; /* Smaller font size for date */
  color: #999; /* Lighter color for date */
}

.comment {
  font-size: 14px;
  margin-top: 10px; /* Space above comment */
  line-height: 1.5; /* Improved readability */
}

.stars {
  color: gold; /* Color for the stars */
  margin-top: 5px; /* Space above stars */
  font-size: 14px;
}

.review {
  background-color: white; /* White background for reviews */
  border-radius: 8px; /* Rounded corners for review */
  padding: 15px; /* Padding inside review */
  margin-bottom: 15px; /* Space between reviews */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}




/* Pagination */


.pagination {
  display: flex;
  justify-content: center; /* Center the pagination */
  align-items: center; /* Vertically center */
  margin: 20px 0; /* Spacing around the pagination */
}

.pagination a {
  font-size: 14px;
  text-decoration: none; /* Remove underline from links */
  color: #0d271e; /* Link color */
  padding: 6px 12px; /* Padding around links */
  border: 1px solid #0d271e; /* Border around links */
  border-radius: 5px; /* Rounded corners */
  margin: 0 5px; /* Spacing between links */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effects */
}

.pagination a:hover {
  background-color: #0d271e; /* Background color on hover */
  color: white; /* Text color on hover */
}

.pagination .active {
  background-color: #0d271e; /* Active page background color */
  color: white; /* Active page text color */
  border: 1px solid #0d271e; /* Same border as the link */
}





/* Rating in header */
.greeting{
  margin-top: 4px;
  color: #424242;
  /* margin-bottom: 10px; */
  font-size: 15px;
}

.astrologer-rating{
  display: flex;
  gap: 5px;
  /* font-family: Outfit, sans-serif; */
  font-size: 14px;
  font-weight: 550;
  color: #424242;
  line-height: 24px;
  letter-spacing: .5px;
  align-items: flex-end;
}



.star-rating {
  display: flex;
  direction: row;
}

.star {
  font-size: 1rem;
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


.astrologer-info{
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
}




.profile-attr-col{
  font-size: 16px;
  text-align: left;
}



.bellDiv{
  display: flex;
  align-items: flex-end;
  padding-bottom: 7px;
}

.mainProfileSection{
  margin-bottom: 20px;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e7f6f5;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 20px;
  padding-bottom: 0px;
}
/* Styles for Mobile View */
@media (max-width: 768px) {
  .mainProfileSection{
    padding: 0;
    margin: 0;
  }
  .date-time-section{
    flex-direction: column;
  }
  .attributes-card{
    justify-content: center;
  }
  
.card{
  
  flex: 0 0 calc(50% - 20px); /* 3 items per row, considering gap */
  box-sizing: border-box; /* Ensure padding and borders are included */
}
  .bellSection{
    max-width: 100%;
    flex-wrap: wrap;
  }
  .profileSection {
    display: flex;
    gap: 5px;
    flex-direction: column;
    padding: 5px; /* Reduced padding */
    margin: 5px auto; /* Reduced margin */
    max-width: 100%; /* Smaller max width */
    background-color: #e7f6f5;
    border-radius: 8px; /* Smaller border radius */
  
}
.profile-actions-mainDiv{
  gap: 10px;
  flex-wrap: wrap;
 justify-content: space-between;
}
.profile-image-section {
    width: 100%;
    margin-bottom: 5px; /* Reduced space */
}

.profile-image-wrapper > img {
   margin-left: auto;
   margin-right: auto; 
    height: auto; 
    border-radius: 8px; /* Smaller rounded corners */
}

.astrologer-details-section {
  display: flex;
  margin: 5px 0;
}
.appointment-page{
  margin-top: 0;
}

.profile-status {
    text-align: center;
    margin-bottom: 5px; /* Reduced space */
    margin-left: auto;
}

.profile-name, .profile-alias, .readings-count, .readings-count-span {
    font-size: 14px; /* Smaller font size */
    
}
.astrologer-info {
  display: flex;
flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: 10px;
  /* flex-direction: column; */
  margin-bottom: 0px;
}
.action-1, .action-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px; /* Reduced space */
}

.action-1 button, .action-2 button {
    width: 75%; /* Slightly smaller button width */
    padding: 8px; /* Reduced button padding */
    margin-bottom: 3px; /* Reduced space */
    border: none;
    border-radius: 4px; /* Smaller border radius */
    background-color: #007bff; 
    color: white; 
    cursor: pointer; 
    transition: background-color 0.3s;
}

.action-1 button:hover, .action-2 button:hover {
    background-color: #0056b3; 
}

.header-info h1 {
    font-size: 18px; /* Smaller header size */
    text-align: center;
    margin-bottom: 5px; /* Reduced space */
}

.session-type-section > h2, .session-duration-section h2 {
    font-size: 14px; /* Smaller headings */
    text-align: center;
    margin: 3px 0; /* Reduced margin */
}

.time-slot {
    font-size: 12px; 
    text-align: center; 
    margin-bottom: 3px; /* Reduced space */
}

.booking-confirmation, .ratings-reviews > h1 {
    font-size: 14px; 
    text-align: center;
    margin: 5px 0; /* Reduced space */
}

/* About Me Section */
.aboutMe {
    display: flex;
    flex-direction: column; 
    padding: 5px; /* Reduced padding */
    background-color: #fff; 
    border-radius: 8px; /* Smaller border radius */
    margin-top: 5px; /* Reduced space */
    box-shadow: none;
}

.aboutMe img {
    width: 100%; 
    border-radius: 8px; 
    margin-bottom: 5px; /* Reduced space */
}

/* Pagination and Rating in Header Responsive */
.pagination {
    display: flex;
   
    align-items: center; 
    margin-top: 5px; /* Reduced space */
}

.rating span {
    font-size: 12px; /* Smaller rating size */
    margin: 1px 0; /* Reduced space */
}
.pagination a {
  margin: 0 2px;
}
.about-content{
  padding-left: 0;
}
}





`}</style>
    </section>
  );
};

export default ProfileSection;
