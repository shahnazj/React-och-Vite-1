import React from "react";

const SubscribeForm = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-heading">
          <div className="icon">
            <img src="/images/icons/notification.svg" alt="Notification bell" />
          </div>
          <h3 className="h4">Subscribe to our newsletter</h3>
        </div>
        <form className="subscribe-form">
          <div className="email-input-container">
            <span className="input-icon">
              <img src="/images/icons/email.svg" alt="Email Icon" />
            </span>
            <input type="email" placeholder="Your email" required />
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeForm;
