import React from "react";
import AuthCard from "../../../Containers/Cards/AuthCard";
import { Typography, TextField, Button } from "@material-ui/core";

class Login extends React.PureComponent {
  render() {
    return (
      <div className="login-wrapper">
        <AuthCard>
          <>
            <Typography variant="h3" className="logo">
              Glu.
            </Typography>
            <Typography className="slogan">Great learning umbrella.</Typography>
            <div className="reset-password-container">
                <Typography variant="h5" className="heading">Reset Password</Typography>
                <Typography className="subheading">We will send a mail to the email address.</Typography>
            </div>
            <div className="bottom-line mb-4"></div>
            <TextField
              className="mb-4"
              variant="outlined"
              label="Email Address"
              fullWidth
            />

            <Button className="gradient-button" fullWidth>
              Send Reset Link
            </Button>
          </>
        </AuthCard>
      </div>
    );
  }
}

export default Login;
