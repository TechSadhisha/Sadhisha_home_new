import React from 'react';

const GeneralEnquiryForm = () => {
  return (
    <form
      method="POST"
      action="https://agamcreatives.site/sadhisha-test/form-handler/General-enquiry-form.php"
      className="general-enquiry-form p-4 border rounded shadow-sm bg-light"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Phone</label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          className="form-control"
          placeholder="Enter your phone number"
          required
        />
      </div>

      {/* New Enquiry Type Dropdown */}
      <div className="mb-3">
        <label htmlFor="enquiryFor" className="form-label">Enquiry For</label>
        <select
          name="enquiryFor"
          id="enquiryFor"
          className="form-select"
          defaultValue=""
          required
        >
          <option value="" disabled>Select Enquiry Type</option>
          <option value="Sadhisha Promoters">Sadhisha Promoters</option>
          <option value="Auro Architects">Auro Architects</option>
          <option value="Sadhisha Rapid Construction">Sadhisha Rapid Construction</option>
          <option value="Sadhisha Interiors">Sadhisha Interiors</option>
          <option value="Sadhisha AI">Sadhisha AI</option>
          <option value="Sadhisha Hospitality">Sadhisha Hospitality</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="4"
          placeholder="Type your message"
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success w-100">
        Submit Enquiry
      </button>
    </form>
  );
};

export default GeneralEnquiryForm;
