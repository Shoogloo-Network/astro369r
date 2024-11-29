'use client';
import '../../consult.css';
import '../../globals.css';

const HowItWorks = () => {
  return (
    <>
      <div className="hspace"></div>
      <section className="how-it-works-section container">
        <h1 className="how-it-works-title size1">How it works</h1>
        <hr className="how-it-works-divider" />
        
        <div className="how-it-works-content">
          <div className="how-it-works-icon-section">
            <div className="how-it-works-step-1">
              <i className="fa-solid fa-hand-pointer how-it-works-icon-1" aria-hidden="true"></i>
            </div>
            <p className="how-it-works-para">Select a speciality or symptom</p>
          </div>
          
          <div className="how-it-works-icon-section">
            <div className="how-it-works-step-2">
              <i className="fa-solid fa-message how-it-works-icon-2" aria-hidden="true"></i>
            </div>
            <p className="how-it-works-para">Audio/ video call with a verified doctor</p>
          </div>
          
          <div className="how-it-works-icon-section">
            <div className="how-it-works-step-3" >
              <i className="fa-solid fa-file-prescription how-it-works-icon-3" aria-hidden="true"></i>
            </div>
            <p className="how-it-works-para">Get a digital prescription & a free follow-up</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks; 