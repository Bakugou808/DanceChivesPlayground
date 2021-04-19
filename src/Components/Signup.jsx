import React from "react";
import SignupForm from "./Forms/SignupForm";

const Signup = (props) => {
  return (
    <div className="signup-cont">
      I am a signup page
      <div className="signupFormParent-cont">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
