'use client'
import React, { useState } from 'react';

const CheckoutForm = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [subscribeOffers, setSubscribeOffers] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [gender, setGender] = useState('male');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
      subscribeOffers,
      firstName,
      lastName,
      dob,
      tob,
      pob,
      gender,
      phone,
      city,
      paymentMethod,
      agreeTerms,
    };

    // Log the collected data
    console.log('Form Data:', formData);
  };

  return (
    <section className="user-details-section container">
      <div className="checkout-container">
        {/* Checkout Form */}
        <div className="checkout-form">
          {/* Contact Section */}
          <div className="contact-section">
            <h3>Contact Information</h3>
            <div className="form-group notFormGroup">
              <label htmlFor="login-email" className="txtsize">Email</label>
              <input
                type="email"
                id="login-email"
                placeholder="Enter your email address"
                className="txtsize"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-group txtsize">
                <input
                  type="checkbox"
                  id="subscribe-offers"
                  checked={subscribeOffers}
                  className="txtsize"
                  style={{ width: 'auto' }}
                  onChange={() => setSubscribeOffers(!subscribeOffers)}
                />
                <label htmlFor="subscribe-offers" className="txtsize checkbox-margin">
                  Email me with news and offers
                </label>
              </div>
              <button className="mobileBtnContact" onClick={handleSubmit}>Continue</button>
            </div>
          </div>

          {/* Delivery Section */}
          <div className="delivery-section">
            <h3>Address</h3>
            <div className="two-col two-col-name">
              <div className="form-group notFormGroup">
                <label htmlFor="first-name" className="txtsize">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  className="txtsize"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group notFormGroup txtsize">
                <label htmlFor="last-name" className="txtsize">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="two-col two-col-name">
              <div className="form-group notFormGroup">
                <label htmlFor="dob" className="txtsize">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  placeholder="05"
                  className="txtsize"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="form-group notFormGroup txtsize">
                <label htmlFor="tob" className="txtsize">Time of Birth</label>
                <input
                  type="time"
                  id="tob"
                  placeholder="10:40"
                  required
                  value={tob}
                  onChange={(e) => setTob(e.target.value)}
                />
              </div>
            </div>
            <div className="two-col two-col-name">
              <div className="form-group notFormGroup">
                <label htmlFor="pob" className="txtsize">Place of Birth</label>
                <input
                  type="search"
                  id="pob"
                  placeholder="Delhi, Mumbai etc"
                  className="txtsize"
                  value={pob}
                  onChange={(e) => setPob(e.target.value)}
                />
              </div>
              <div className="form-group notFormGroup txtsize">
                <label htmlFor="gender" className="txtsize">Gender</label>
                <div className="gendercheckout">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    required
                    onChange={() => setGender('male')}
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    required
                    onChange={() => setGender('female')}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="two-col two-col-name">
              <div className="form-group notFormGroup txtsize">
                <label htmlFor="phone">Phone</label>
                <div className="telephonecheckout">
                  <span className="countrycodecheckout">+91</span>
                  <input
                    type="tel"
                    id="phone"
                    name='phone'
                    placeholder="Enter your phone number"
                    className="phcheckout"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group notFormGroup txtsize">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name='phone'
                  placeholder="Enter your city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <button className="mobileBtnAddress">Order Now</button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Your Order</h3>
          <div className="order-item">
            <div className="order-item-image">
              <img
                src="/bracelate-tumbnail2.jpg"
                alt="Product Image"
              />
              <div>
                <span>OliveShine Rectangular Aluminium Serving Tray</span>
                <div className="discount">
                  <span>10% DISCOUNT AUTO APPLIED.</span>
                </div>
              </div>
            </div>
            <div className="price-span">
              <span>₹1,699.00</span>
              <span>-₹169.90</span>
            </div>
          </div>

          <div className="order-item-list">
            <div className="order-item">
              <span>Subtotal</span>
              <span>₹1,529.10</span>
            </div>
            <div className="order-item">
              <span>Shipping</span>
              <span>₹00.00</span>
            </div>
            <div className="order-item">
              <span>SGST(9%)</span>
              <span>₹18.00</span>
            </div>
            <div className="order-item">
              <span>CGST(9%)</span>
              <span>₹18.00</span>
            </div>
            <hr />
            <div className="order-item total-price">
              <span>Total</span>
              <span>₹1,529.10</span>
            </div>
          </div>

          <div className="payment-section">
            <h3>Payment</h3>
            <p>All transactions are secure and encrypted.</p>
           {
            [...Array(3)].map((_,index)=>(
                <div className="payment-method" key={index}>
              <input
                type="radio"
                name="payment"
                value="razorpay"
                id="razorpay"
                checked={paymentMethod === 'razorpay'}
                onChange={() => setPaymentMethod('razorpay')}
              />
              <label htmlFor="razorpay">
                Razorpay Secure (UPI, Cards, Wallets, NetBanking)
              </label>
              <span className="razorpayImg">
                <img src="/upi.svg" alt="UPI" />
                <img src="/visa.svg" alt="Visa" />
                <img src="/master.svg" alt="MasterCard" />
                
              </span>
            </div>
            ))
           }
          </div>
<button onClick={handleSubmit}>Make Payment</button>
          <div className="form-group notFormGroup termsGroup" style={{display:'flex',gap:'10px'}}>
            <input
              type="checkbox"
              id="terms-conditions"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            <label htmlFor="terms-conditions">
              I agree to the Terms & Conditions
            </label>
          </div>
        </div>
      </div>
      <style jsx>{`




/* Checkout Container */
.checkout-container {
    
   margin: 20px 0;
    display: flex;
    gap: 10px;
}

/* Left Column: Checkout Form */
.checkout-form {
    flex: 1;
    background-color: #ffffff;
    padding: 25px;
    padding-top: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 50vw;
    padding-bottom: 34px;
}

.checkout-form h3 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #2c3e50;
    border-bottom: 1px solid #3498db;
    padding-bottom: 10px;
}

.delivery-section h3{
    /* font-size: 16px; */
}
.delivery-section{
    margin-top: 20px;
}
.form-group {
    margin-bottom: 10px;
}

.form-group label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #34495e;
}

.form-group input,
.form-group select {
    /* width: 100%; */
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
    font-size: 14px;
}


.form-group input:focus,
.form-group select:focus {
    border-color: #3498db;
    outline: none;
}

/* Right Column: Order Summary */
.order-summary {
    flex: 1;
    background-color: #ffffff;
    padding: 25px;
    padding-top: 10px;
    padding-bottom: 8px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   
    width: 40%;
}

.order-summary h3 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #2c3e50;
    border-bottom: 1px solid #3498db;
    padding-bottom: 10px;
}

.order-item {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 8px;
    font-size: 14px;
}

.order-item img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
}

.order-item-description {
    flex-grow: 1;
    margin-left: 10px;
}

.total-price {
    font-weight: bold;
    font-size: 16px;
    color: #e74c3c; /* Red for total price */
    margin-top: 10px;
}

.savings {
    color: #e74c3c; /* Red color for savings */
}

/* Payment Section */
.payment-section {
    margin-top: 144px;
    font-size: 14px;
}

.payment-section h3 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #34495e;
}

.payment-section p{
    margin-top: 10px;
    margin-bottom: 10px;
}

.payment-method {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
   
}

.payment-method input {
    margin-right: 10px;
    cursor: pointer;
}

/* Button */
button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: #2980b9;
    /* transform: translateY(-2px); */
}



.payment-section p{
  margin-top: 2px;
}
.payment-section h3{
  margin-bottom: 5px;
}
.form-group:not(.notFormGroup){
/* width: auto; */
    display: flex;
    gap: 10px;
    align-items: center;

}

.notFormGroup input{
    // width: 100% ;
}


.order-item-image{
    display: flex;
    gap: 10px;
    /* align-items: center; */
}

.order-item-list{
    width: 62%;
    float: right;
    font-size: 14px;
}

.discount{
    font-size: 12px;
}


.razorpayImg{
    margin-left: 10px;
    /* padding-right: 5px; */
    display:flex;
}


.two-col-name{
    display: flex;
    /* justify-content: space-between; */
    gap: 30px;
}

#first-name,#last-name{
    width: 170%;
}

#phone,#gender{
    width: 170%;
}


.three-col{
    display: flex;
    gap: 48px;
    justify-content: stretch;
}





.price-span{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}


.checkbox-margin{
    margin-bottom: 0 !important;
    font-weight: 400 !important;
    font-size: 12px;
   
}


#login-email{
    margin-bottom: 3px;
}



.two-col {
    display: flex !important; /* Use flexbox to allow items to be flexible */
    justify-content: space-between !important; /* Space between the two columns */
}

.two-col .form-group {
    width: 50% !important; /* Set each form group inside .two-col to 50% width */
}

.delivery-section .form-group:not(.two-col .form-group) {
    width: 100% !important; /* Set other form groups to 100% width */
}

.delivery-section input {
    width: 100% !important; /* Ensure inputs are full width */
    box-sizing: border-box !important; /* Include padding/border in width */
}

.hidden {
  display: none ;
 
}

.mobileBtnContact{
  display: none;
}
.mobileBtnAddress{
  display: none;
}
.gendercheckout{
    display: flex;
                      align-items: center;
                      margin-top: 6px;
                      border: 1px solid #ccc;
                      padding: 9px;
                      border-radius: 5px;
}
.malecheckout{
    width: 15% !important;
}
.femalecheckout{
    margin-left: 15px; width: 15% !important
}
.telephonecheckout{
    display: flex; align-items: center
}
.countrycodecheckout{
    padding: 12px;
                        border-right: none;
                        background-color: #f1f1f1;
                        border: 1px solid #ccc;
                        border-right: none;
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px;
                        
}
.phcheckout{
    border: 1px solid #ccc !important;
 border-left: none !important;
                        border-top-left-radius: 0 !important;
                        border-bottom-left-radius: 0 !important;

}

/* Responsive Styles */
@media (max-width: 768px) {
    .countrycodecheckout{
        font-size: 14px;
    }
    .checkout-container {
        flex-direction: column;
    }
    
   
}
@media (min-width: 769px) { /* Adjust the width as needed */
  .hidden {
      display: block; /* Show sections on desktop */
  }

  
}

/* Mobile Styles */
@media only screen and (max-width: 768px) {
 .menu-section , .mega-menu {
  display: none;
}

.checkout-form{
    width: 100%;
    padding: 7px;
    /* display: none; */
  }
.addressToggle{
  display: none;
  padding: 0 !important;
}
label[for="razorpay"]{
  font-size: 18px;
}






.user-details-section{
  padding: 10px;
  width: auto;
  justify-content: center;
}
.form-group {
  margin-bottom: 10px;
 
}

.contact-section{
  /* display: block; */
}
.mobileBtnContact{
  display: block;
}
.delivery-section{
  /* display: none; */
  margin-top: 0;
}
.mobileBtnAddress{
  display: block;
  }

  .order-summary{
    /* display: block; */
    width: 100%;
    position: static;
    padding: 8px;
  }
  .two-col-name{
   
  }
}`}</style>
    </section>
  );
};

export default CheckoutForm;
