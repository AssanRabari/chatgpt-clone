import React from "react";
import "./SignInPage.css";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="sing-in">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl={"/dashboard"}
      />
    </div>
  );
};

export default SignInPage;
