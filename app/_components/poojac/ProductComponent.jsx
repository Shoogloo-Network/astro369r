import React, { useState } from 'react';

const productData = {
  title: "Angarak Yog Shanti Puja",
  rating: 4.5,
  ratingCount: 1234,
  price: 21000,
  originalPrice: 42000,
  discount: 50,
  images: [
    "/hanumanjisakti.jpg",
    "/hanumanjiboondi.jpg",
    "/hanumanjisakti.jpg"
  ],
  details: {
    daysOfPuja: "5 days",
    idealDays: "Muhurta will be calculated and determined by the Astrologers at Anytime Astro as per the Janam Kundali (Birth Chart) of the concerned person.",
    godOrGoddess: "Lord Hanuman, Mangal, Rahu",
    mantraType: "Vedic",
    gender: "Both"
  },
  rules: "Perform self-practice or recitation at least 11 or 21 times daily to include your Karma with your Puja. Connect your actions with your practice, and continue the practice until completion. In the morning, after bathing, light a ghee lamp and humbly request your chosen deity to accept the worship being offered to you. Seek blessings and, if possible, observe a fast. If unable to observe a fast, at least abstain from meat, alcohol, smoking, etc., and consume a sattvic diet."
};

const ProductComponent = () => {
  const [mainImage, setMainImage] = useState(productData.images[0]);
const [showDetails, setShowDetails] = useState(true);
  const changeImage = (image) => {
    setMainImage(image);
  };

  return (
    <div className="product-container-pooja" style={{display:'flex',flexDirection:'column'}}>
      <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
      <div className="product-gallery">
        <div className="thumbnail-container">
          {productData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={mainImage === image ? 'active' : ''}
              onClick={() => changeImage(image)}
            />
          ))}
        </div>
        <img
          src={mainImage}
          alt="Main Product Image"
          className="main-image"
          id="mainProductImage"
        />
      </div>
      </div>

      <div  style={{width:'50%'}}>
      <div className="product-details">
        <div id="timerContainer" className="desktopTimer">
          <p className="white">Time Remaining : </p><span id="timer"></span>
        </div>

        <div className="product-title size1">{productData.title}</div>

        <div className="product-rating">
          <div>
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 0.5;
              return (
                <i
                  key={index}
                  className={
                    ratingValue <= productData.rating
                      ? 'fas fa-star'
                      : ratingValue === productData.rating + 0.5
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star'
                  }
                ></i>
              );
            })}
          </div>
          <span className="rating-count">{productData.ratingCount} ratings</span>
        </div>

        <div className="product-pooja-button">
          <button>Laghu</button>
          <button>Maha</button>
        </div>

        <div className="product-price size1">
          ₹ {productData.price} <span className="size2">₹ {productData.originalPrice}</span>
        </div>
        <div className="product-discount size2">{productData.discount}% Off</div>

        <div className="product-actions">
          <button className="btn btn-cart">Add to Cart</button>
          <button className="btn btn-buy">Book Puja</button>
        </div>

        <div className="pandit-section">
          <div className="pandit-feature">
            <span className="pandit-icon"><img src="/panditji.svg" alt="panditji" /></span>
            <span className="pandit-text">Experienced Pandits</span>
          </div>
          <div className="pandit-feature">
            <span className="pandit-icon"><img src="/solutions.svg" alt="solutions" /></span>
            <span className="pandit-text">20+ Years of Experience</span>
          </div>
          <div className="pandit-feature">
            <span className="pandit-icon"><img src="/yearsof.svg" alt="years of experience" /></span>
            <span className="pandit-text">Effective Solutions</span>
          </div>
          <div className="pandit-feature">
            <span className="pandit-icon"><img src="/kalshs.svg" alt="kalshs" /></span>
            <span className="pandit-text">Thousands of Puja</span>
          </div>
        </div>
      </div>
      </div>

      </div>
    

      <div className="product-description-section container">
        <div className="product-description accordion-active"  >
          <h3 className="accordion-header size1" onClick={()=>{setShowDetails(!showDetails)}}>
            Product Details
            <span className="accordion-icon size2">
              <i className="fa-solid fa-minus"></i>
            </span>
          </h3>
         {showDetails&& <div className="accordion-content">
            <div className="puja-details-section">
              <h2 className="puja-title">{productData.title}</h2>
              <p className="puja-description">{productData.details.description}</p>

              <div className="puja-details">
                {Object.entries(productData.details).map(([key, value], index) => (
                  <div className="detail-item" key={index}>
                    <span className="detail-label">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="detail-value">{value}</span>
                  </div>
                ))}
              </div>

              <div className="puja-rules">
                <h3 className="rules-title size1">Enhance The Effect Of Puja By Following These Rules (Niyam):</h3>
                <p className="rules-description size2">{productData.rules}</p>
              </div>
            </div>
          </div>}
        </div>
      </div>

      <div className="guidance-section">
  <div className="container-guidance">
    <div className="row-guidance">
      <div className="col-left">
        <span className="heading">Need Instant Guidance?</span>
        <span className="subheading">
          <span className="highlight">Talk Or Chat</span>With Our Astrologers
          Now
        </span>
        <p className="description">
          Connect with top Astrologers in India for online consultations via
          call or chat. Discover solutions to your life challenges.
        </p>
      </div>
      <div className="col-right">
        <div className="consult-button-section">
          <div className="consult-content">
            <img
              src="https://cdn.anytimeastro.com/anytimeastro/puja/prodimg/consult_icon.png"
              alt="consult_icon"
              className="consult-icon"
            />
            <div>
              <p className="consult-heading">
                Consult With Expert Astrologers!
              </p>
              <p className="consult-description">
                Seek Personalized Advice from India's Leading, Most Experienced,
                and Trustworthy Astrologers Online via Call or Message!
              </p>
            </div>
          </div>
          <div className="consult-btn-wrapper">
            <a href="#" target="_blank" className="consult-now-btn">
              Consult Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <style jsx>{`








/* Product Container */
.product-container {
  
   margin: 20px auto;
   display: flex;
   gap: 20px;
   /* padding: 20px; */
   background-color: white;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Left Column: Product Image Gallery */
.product-gallery {
  
   display: flex;
   gap: 15px;
}

/* Thumbnails */
.thumbnail-container {
   display: flex;
   flex-direction: column;
   gap: 10px;
}

.thumbnail-container img {
   width: 80px;
   height: 80px;
   object-fit: cover;
   border-radius: 5px;
   cursor: pointer;
   border: 1px solid transparent;
}

/* Highlighted thumbnail */
.thumbnail-container img.active {
   border: 1px solid #007bff;
}

/* Accordion Styling */
.accordion-header {
 
   font-weight: bold;
   cursor: pointer;
   padding: 10px;
   background-color: #f1f1f1;
   border: 1px solid #ddd;
   display: flex;
   justify-content: space-between;
   align-items: center;
   transition: background-color 0.3s ease;
}

.accordion-header:hover {
   background-color: #e2e2e2;
}

.accordion-icon {
 
}

.accordion-content {
   display: none;
  
   border: 1px solid #ddd;
   border-top: none;
}

.accordion-content p {
   color: #555;
   line-height: 1.6;
}

/* Show accordion content when active */
.accordion-active .accordion-content {
   display: block;
}

/* Change icon when accordion is open */
.accordion-active .accordion-icon i {
   content: "\f068"; /* Minus icon */
   font-family: FontAwesome;
}

/* Main product image */
.main-image {
   width: 80%;
   height: 356px;
   border-radius: 5px;
   transition: transform 0.3s ease;
}

/* Hover effect on main image */
.main-image:hover {
   transform: scale(1.05);
}

/* Right Column: Product Details */
.product-details {
  //  width: 60%;
}

/* Product Title */
.product-title {
 
   font-weight: bold;
   color: #212121;
   margin-bottom: 10px;
}

/* Product Rating */
.product-rating {
   display: flex;
   align-items: center;
   gap: 10px;
   margin-bottom: 15px;
}

.product-rating i {
   color: #ff9800;
}

.rating-count {
   color: #555;
}

/* Product Price */
.product-price {
 
   font-weight: bold;
   color: #388e3c;
   margin-bottom: 5px;
}

.product-price span {
  
   color: #757575;
   text-decoration: line-through;
}

.product-discount {
   color: #ff5722;
 
   margin-bottom: 20px;
}

/* Offers Section */
.product-offers {
   padding: 15px;
   background-color: #f9f9f9;
   border: 1px solid #ddd;
   margin-bottom: 20px;
}

.product-offers h4 {
   margin-bottom: 10px;
   font-size: 16px;
}

.offer-item {
   font-size: 14px;
   margin-bottom: 5px;
   color: #555;
}

/* Size Selection */
.size-selection {
   margin-bottom: 20px;
}

.size-selection h4 {
   font-size: 16px;
   margin-bottom: 10px;
}

.size-options {
   display: flex;
   gap: 10px;
}

.size-options span {
   padding: 10px 15px;
   border: 1px solid #ddd;
   cursor: pointer;
   transition: background-color 0.3s;
}

.size-options span:hover {
   background-color: #f1f1f1;
}

/* Add to Cart & Buy Now Buttons */
.product-actions {
   display: flex;
   gap: 20px;
   margin-bottom: 15px;
}

.btn {
   padding: 15px 20px;
   border: none;
   border-radius: 5px;
   font-size: 16px;
   cursor: pointer;
   transition: background-color 0.3s;
}

.btn-cart {
   background-color: #ff9f00;
   color: white;
}

.btn-buy {
   background-color: #fb641b;
   color: white;
}

.btn-cart:hover {
   background-color: #e59400;
}

.btn-buy:hover {
   background-color: #e55612;
}

/* Product Description */
.product-description {
   margin-top: 10px;
   /* padding: 15px;
   border-top: 1px solid #ddd; */
}

.product-description h3 {
   margin-bottom: 10px;
   font-size: 16px;
   color: #212121;
}

.product-description p {
   color: #555;
   line-height: 1.6;
}
/* Timmer */
#timerContainer {
   display: flex;
   justify-content: space-between;
   width: 100%;
   background-color: #00ad31;
   color: #fff;
   font-size: 14px;
   padding: 5px 10px;
   border-radius: 3px;
   font-family: Arial, sans-serif;
   margin-bottom: 2px;
}

#timer {
   font-weight: bold;
}
#timerContainermobile {
   display: flex;
   justify-content: space-between;
   width: 100%;
   background-color: #00ad31;
   color: #fff !important;
  
   padding: 5px 10px;
   border-radius: 3px;
   font-family: Arial, sans-serif;
   margin-bottom: 2px;
}
.mobileTimer{
   display: none !important;
}
.desktopTimer{
   display: flex !important;
}
/* Responsive Design */
@media (max-width: 768px) {
   .desktopTimer{
       display: none !important;
   }
   .mobileTimer{
       display: flex !important;
   }
   .product-container-pooja{
       flex-direction: column;
   }
   .product-container {
       flex-direction: column;
   }

   .product-gallery {
      
      //  width: 74%;
       height: 74%;
   }

   .main-image {
       width: 100%;
      height: auto;
   }

   .thumbnail-container {
      
       justify-content: center;
   }

   .product-details {
       width: 100%;
   }

   .product-actions {
       flex-direction: column;
   }
}









.product-pooja-button{
   display: flex;
   gap: 20px;
   width: 200px;
   margin-bottom: 15px;
}

.product-container-pooja{
   max-width: 1269px;
   margin: 20px auto;
   display: flex;
   gap: 30px;
 
   background-color: white;
}
.product-description-section{
 
   margin-left: auto;
   margin-right: auto;
}
/* Main section styling */
.guidance-section {
   background-color: #f2f2f2;
   padding: 50px 0;
}

/* Container */
.container-guidance {
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 15px;
}

/* Row layout */
.row-guidance {
   display: flex;
   /* flex-wrap: wrap; */
   justify-content: space-between;
   align-items: center;
}

/* Left column */
.col-left {
   width: 48%;
   color: #333;
}

/* Headings and text */
.heading {
   font-size: 28px;
   font-weight: 600;
   display: block;
   margin-bottom: 10px;
}

.subheading {
   font-size: 28px;
   font-weight: 600;
   display: block;
   margin-bottom: 10px;
}

.highlight {
   color: #007bff;
   margin-right: 10px;
}

.description {
   font-size: 16px;
   color: #555;
   margin-top: 10px;
}

/* Right column */
.col-right {
   width: 48%;
   margin-top: 20px;
}

/* Consult button section */
.consult-button-section {
   background-color: #fff;
   border: 1px solid #ddd;
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Consult content */
.consult-content {
   display: flex;
   gap: 20px;
   align-items: center;
}

.consult-icon {
   width: 84px;
   height: auto;
}

.consult-heading {
   font-size: 20px;
   font-weight: 700;
   color: #333;
}

.consult-description {
   font-size: 16px;
   color: #666;
   margin-top: 10px;
}

/* Button wrapper */
.consult-btn-wrapper {
   text-align: right;
   margin-top: 20px;
}

/* Button styling */
.consult-now-btn {
   background-color: #ffcc00;
   color: #000;
   border-radius: 50px;
   padding: 12px 24px;
   font-size: 16px;
   font-weight: 600;
   text-decoration: none;
   transition: background-color 0.3s ease;
}

.consult-now-btn:hover {
   background-color: #f0b400;
   color: #fff;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
   .col-left, .col-right {
       width: 100%;
   }

   .heading, .subheading {
       font-size: 20px;
       margin-bottom: 2px;
   }

   .consult-now-btn {
       padding: 10px 20px;
       font-size: 14px;
   }
}



/* Container for the entire section */
.pandit-section {
   display: flex;
   justify-content: space-between;
   background-color: #f2f2f2;
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Style for each feature item */
.pandit-feature {
   display: flex;
   align-items: center;
   gap: 10px;
   background-color: #ffffff;
   padding: 12px;
   border-radius: 8px;
   width: 23%; /* Adjust width for four items to fit in one row */
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s ease;
}

/* Hover effect for each feature */
.pandit-feature:hover {
   transform: translateY(-5px);
}

/* Style for the icon */
.pandit-icon img {
   width: 40px;
   height: auto;
}

/* Text styling */
.pandit-text {
   font-size: 12px;
   font-weight: 600;
   color: #333;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
   .pandit-section {
       flex-wrap: wrap;
       padding: 0px;
   }
   .pandit-feature {
       width: 100%;
       margin-bottom: 5px;
   }
   .puja-details-section{
       padding: 2px !important;
   }
   .puja-details{
       padding: 2px !important;
   }
   .puja-rules{
       padding: 2px !important;
   }
   .row-guidance{
       flex-direction: column;
   }
   .guidance-section{
       padding: 5px 0px;
   }
   .product-pooja-button{
       width: auto;
   }
   .product-title{
       font-size: 16px !important;
   }
   .puja-title{
       margin-bottom: 0 !important;
       font-size: 16px !important;
   }
}





.puja-details-section {
   background-color: #f9f9f9;
   padding: 20px;
   border-radius: 8px;
   font-family: Arial, sans-serif;
   line-height: 1.6;
   color: #333;
   /* max-width: 800px; */
   margin: 0 auto;
}

.puja-title {
   font-size: 24px;
   font-weight: bold;
   margin-bottom: 15px;
   color: #c0392b;
}

.puja-description {
   margin-bottom: 20px;
   font-size: 16px;
}

.puja-details {
   background-color: #fff;
   padding: 15px;
   border-radius: 5px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   margin-bottom: 20px;
}

.detail-item {
   margin-bottom: 10px;
}

.detail-label {
   font-weight: bold;
   color: #2c3e50;
}

.detail-value {
   margin-left: 5px;
   color: #7f8c8d;
}

.puja-rules {
   background-color: #fdf2e9;
   padding: 15px;
   border-left: 5px solid #e67e22;
   border-radius: 5px;
}

.rules-title {
  
   font-weight: bold;
   color: #d35400;
   margin-bottom: 10px;
}

.rules-description {
  
   color: #2c3e50;
   line-height: 1.7;
}








`}</style>
    </div>
  );
};

export default ProductComponent;
