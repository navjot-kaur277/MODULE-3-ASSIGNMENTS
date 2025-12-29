import React, { useReducer } from "react";
import { formReducer, initialState } from "./reducer/formReducer";
import "./App.css";



const PersonalDetails = ({ formData, handleChange, errors }) => (
  <div className="step-content">
    <h3>Personal Details</h3>
    <div className="input-group">
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Admin"
        autoFocus
      />
      {errors.name && <span className="error-text">{errors.name}</span>}
    </div>
    <div className="input-group">
      <label>Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="admin@example.com"
      />
      {errors.email && <span className="error-text">{errors.email}</span>}
    </div>
  </div>
);

const AccountDetails = ({ formData, handleChange, errors }) => (
  <div className="step-content">
    <h3>Account Setup</h3>
    <div className="input-group">
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        autoFocus
      />
      {errors.username && <span className="error-text">{errors.username}</span>}
    </div>
    <div className="input-group">
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <span className="error-text">{errors.password}</span>}
    </div>
  </div>
);

const Review = ({ formData }) => (
  <div className="step-content">
    <h3>Review & Submit</h3>
    <div className="summary-item">
      <span>Name:</span> <strong>{formData.name}</strong>
    </div>
    <div className="summary-item">
      <span>Email:</span> <strong>{formData.email}</strong>
    </div>
    <div className="summary-item">
      <span>Username:</span> <strong>{formData.username}</strong>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { currentStep, formData, errors, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleNext = () => dispatch({ type: "NEXT_STEP" });
  const handleBack = () => dispatch({ type: "PREVIOUS_STEP" });
  const handleSubmit = () => {
    setTimeout(() => {
      dispatch({ type: "SUBMIT_FORM" });
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <div style={{ textAlign: "center" }}>
          {/* INCREASED SIZE FOR SUCCESS MESSAGE */}
          <h2
            style={{ color: "#28a745", fontSize: "3rem", marginBottom: "1rem" }}
          >
            Success!
          </h2>
          <p
            style={{ fontSize: "1.5rem", color: "#555", marginBottom: "2rem" }}
          >
            Your account has been created successfully.
          </p>
          <button
            className="btn-primary"
            style={{ padding: "18px 40px", fontSize: "1.2rem" }}
            onClick={() => dispatch({ type: "RESET_FORM" })}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-line">
          <div
            className="progress-fill"
            style={{
              width:
                currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%",
            }}
          ></div>
        </div>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`step-indicator ${currentStep >= step ? "active" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Steps Rendering - Passing Props to External Components */}
      {currentStep === 1 && (
        <PersonalDetails
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <AccountDetails
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 3 && <Review formData={formData} />}

      {/* Navigation Buttons */}
      <div className="button-group">
        {currentStep > 1 && (
          <button className="btn-secondary" onClick={handleBack}>
            Back
          </button>
        )}

        {currentStep < 3 ? (
          <button className="btn-primary" onClick={handleNext}>
            Next Step
          </button>
        ) : (
          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
