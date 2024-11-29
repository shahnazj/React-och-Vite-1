import React from "react";
import contacts from "../../public/images/icons/contacts.svg";
import credit from "../../public/images/icons/credit-card.svg";
import bucket from "../../public/images/icons/wallet.svg";
import iconr from "../../public/images/bottom-left.svg";

const receive = () => {
  const handleLearnMore = () => {
    alert("Learn more clicked!");
  };
  return (
    <section className="receive-container">
      <div className="container down-part">
        <div className="receive-img">
          <img
            src={contacts}
            alt="contact icon representing customer support"
          />
        </div>
        <div className="receive-info">
          <h2>Receive payment from international bank details</h2>
          <div className="receive-info-container">
            <div className="receive-info-inner">
              <img
                width="60"
                height="60"
                src={credit}
                alt="Credit management icon"
              />
              <p>
                Manage your payments online.<br></br>Mollis congue egestas
                egestas fermentum fames.
              </p>
            </div>
            <div className="receive-info-inner">
              <img
                width="60"
                height="60"
                src={bucket}
                alt="Bucket icon for managing funds"
              />
              <p>
                A elementur and imperdiet enim,<br></br>pretium etiam facilisi
                aenean quam mauris.
              </p>
            </div>
          </div>

          <button className="learn-more" onClick={handleLearnMore}>
            Learn More
            <img
              width="20"
              height="20"
              src={iconr}
              alt="Arrow icon for learn more"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default receive;
