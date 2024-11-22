import React from "react";

const PoojaProductDetail = ({ poojaData }) => {
  const { title, description, details, rules } = poojaData;

  return (
    <section>
      <div className="product-details">
        <div className="product-title size1">{title}</div>
        <div className="puja-details-section">
          <h2 className="puja-title">{title}</h2>
          <p className="puja-description">{description}</p>
          <div className="puja-details">
            {Object.keys(details).map((key, index) => (
              <div key={index} className="detail-item">
                <span className="detail-label">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </span>
                <span className="detail-value">{details[key]}</span>
              </div>
            ))}
          </div>
          <div className="puja-rules">
            <h3 className="rules-title size1">
              Enhance The Effect Of Puja By Following These Rules (Niyam):
            </h3>
            <p className="rules-description size2">{rules}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoojaProductDetail;
