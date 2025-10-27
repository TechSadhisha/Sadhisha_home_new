import React from "react";
import "./general-enquiry-form.css";

const InvestorClubForm = () => {
  return (
    <form className="container p-4 rounded shadow-sm bg-light">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="interest" className="form-label">
          Interested In
        </label>
        <input
          type="text"
          className="form-control"
          id="interest"
          placeholder="What are you interested in?"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="4"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-success px-4">
          Submit Enquiry
        </button>
      </div>
    </form>
  );
};

export default InvestorClubForm;
