
import React, { useState } from "react";
import axios from "axios";
import notification from "../../public/images/icons/notification.svg";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setStatus({
        message: "Please enter a valid email address.",
        type: "error",
      });
      return setTimeout(() => setStatus(null), 5000);
    }

    try {
      const { status: responseStatus } = await axios.post(
        "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
        { email }
      );

      if (responseStatus === 200) {
        setStatus({ message: "Thank you for subscribing!", type: "success" });
        setEmail("");
      } else {
        setStatus({
          message: "Something went wrong. Please try again later.",
          type: "error",
        });
      }
    } catch {
      setStatus({
        message: "Network error. Please try again later.",
        type: "error",
      });
    } finally {
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-heading">
          <div className="icon">
            <img src={notification} alt="Notification bell" />
          </div>
          <h3 className="h4">
            Subscribe to our newsletter
            <br />
            to stay informed about latest updates
          </h3>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="email-input-container">
            <span className="input-icon">
              <img src="/images/icons/email.svg" alt="Email Icon" />
            </span>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit">Subscribe</button>
        </form>

        {status && (
          <p
            className={`status-message ${status.type}`}
            role="alert"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
