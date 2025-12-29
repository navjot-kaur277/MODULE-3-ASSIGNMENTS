export const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  errors: {}, 
  isSubmitted: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      // Clear error when user types
      const newErrors = { ...state.errors };
      delete newErrors[action.field];

      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
        errors: newErrors,
      };

    case "NEXT_STEP":
      // Validation Logic inside Reducer (Bonus Requirement)
      const currentErrors = {};
      const { name, email, username, password } = state.formData;

      if (state.currentStep === 1) {
        if (!name) currentErrors.name = "Name is required";
        if (!email || !email.includes("@"))
          currentErrors.email = "Valid email is required";
      } else if (state.currentStep === 2) {
        if (!username) currentErrors.username = "Username is required";
        if (!password || password.length < 6)
          currentErrors.password = "Password must be 6+ chars";
      }

      // If errors exist, do not move forward
      if (Object.keys(currentErrors).length > 0) {
        return { ...state, errors: currentErrors };
      }

      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1),
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};
