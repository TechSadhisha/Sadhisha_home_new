import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Define validation schema using Yup
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  enquiryFor: yup.string().required("Please select an enquiry type"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const GeneralEnquiryForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://sadhisha-home-backend-new-1.onrender.com/api/leads",

        {
          name: data.name,
          email: data.email,
          phone: data.mobile,
          enquiryFor: data.enquiryFor,
          message: data.message,
        }
      );

      console.log(response.data);
      toast.success("Enquiry submitted successfully!");

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border rounded bg-light shadow-sm"
      >
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            {...register("name")}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            {...register("mobile")}
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
          />
          {errors.mobile && (
            <div className="invalid-feedback">{errors.mobile.message}</div>
          )}
        </div>

        {/* Enquiry For */}
        <div className="mb-3">
          <label className="form-label">Enquiry For</label>
          <select
            {...register("enquiryFor")}
            className={`form-select ${errors.enquiryFor ? "is-invalid" : ""}`}
          >
            <option value="">Select Enquiry Type</option>
            <option value="Sadhisha Promoters">Sadhisha Promoters</option>
            <option value="Sadhisha Homes">Sadhisha Homes</option>
            <option value="Auro Architects">Auro Architects</option>
            <option value="Sadhisha Rapid Construction">
              Sadhisha Rapid Construction
            </option>
            <option value="Sadhisha Interiors">Sadhisha Interiors</option>
            <option value="Sadhisha AI">Sadhisha AI</option>
            <option value="Investor Club">Investor Club</option>
            <option value="Career Enquiry">Career Enquiry</option>
          </select>
          {errors.enquiryFor && (
            <div className="invalid-feedback">{errors.enquiryFor.message}</div>
          )}
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            {...register("message")}
            rows="4"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
};

export default GeneralEnquiryForm;
