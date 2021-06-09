import React from "react";
import { Icons } from "../../Assets/Icons";

const SocialLogin: React.FunctionComponent = () => {
  return (
    <div className="social-login-section">
      <div className="icon-container google-icon">
        <img src={Icons.google} />
      </div>
      <div className="icon-container">
        <img src={Icons.Facebook} />
      </div>
      <div className="icon-container">
        <img src={Icons.Twitter} />
      </div>
    </div>
  );
};

export default SocialLogin;
