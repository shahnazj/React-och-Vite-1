import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    reset,
  } = useForm();

  const validateField = (name, value) => {
    let error = "";
    if (name === "fullName" && !/^[A-öa-ö\s-]{2,}$/.test(value)) {
      error = "Must be at least 2 characters long, no numbers.";
    } else if (
      name === "email" &&
      !/^[A-Za-z0-9.\_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
    ) {
      error = "Must be a valid email (e.g., username@example.com).";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = (formData) => {
    const newErrors = {};
    if (!/^[A-öa-ö\s-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Must be at least 2 characters long, no numbers.";
    }
    if (
      !/^[A-Za-z0-9.\_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Must be a valid email (e.g., username@example.com).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (data) => {
    if (!validateForm(data)) {
      return; // Exit if validation fails
    }
    setLoading(true);

    try {
      const res = await axios.post(
        "https://win24-assignment.azurewebsites.net/api/forms/contact",
        data
      );

      if (res.status === 200) {
        setSubmittedMessage(true);
        setErrorMessage(null); // Clear any previous error message
        reset();
        // Automatically hide the thank-you message after 5 seconds
        setTimeout(() => setSubmittedMessage(false), 5000);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error.response?.status === 400
          ? "Felaktig data, vänligen kontrollera dina inmatningar."
          : error.response?.data?.message ||
              error.message ||
              "Något gick fel, försök igen senare."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="headline">
        <h2>Get Online Consultation</h2>
      </div>
      <div className="formBody">
        <div className="form-group">
          <input
            type="text"
            placeholder="Full name"
            {...register("fullName", {
              required: "The name field is required",
              validate: (value) => validateField("fullName", value),
            })}
          />
          <span>{errors.fullName || formErrors.fullName?.message}</span>
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "The email field is required",
              validate: (value) => validateField("email", value),
            })}
          />
          <span>{errors.email || formErrors.email?.message}</span>
        </div>

        <div className="form-group">
          <select
            {...register("specialist", {
              required: "Please select a department",
            })}
          >
            <option value="">Select a department</option>
            <option value="Financial Consulting">Financial Consulting</option>
            <option value="Human Resources">Human Resources</option>
            <option value="IT">IT</option>
            <option value="Marketing Department">Marketing Department</option>
          </select>
          <span>{formErrors.specialist?.message}</span>
        </div>

        {loading && (
          <div className="loading-container">
            <p>Laddar...</p>
            <div className="spinner"></div>
          </div>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {submittedMessage && (
          <div className="thank-you-message">
            <p>Thank you! We will reach you soon!</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          aria-label={loading ? "Sending your message" : "Submit your message"}
        >
          {loading ? "Sending..." : "Make an appointment"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
