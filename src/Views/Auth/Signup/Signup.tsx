import React from "react";
import { Link } from "react-router-dom";
import AuthCard from "../../../Containers/Cards/AuthCard";
import { Typography, TextField, Checkbox, Button } from '@material-ui/core';
import SocialLogin from '../../../components/Auth/SocialLogin';
import AdornmentInput from '../../../components/Inputs/AdornmentInput';

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
            <TextField
              className="mb-4"
              variant="outlined"
              label="Email Address"
              fullWidth
            />
           <AdornmentInput/>
            <div className="remember-me-container mt-2 mb-3">
              <Checkbox className="remember-me-checkbox" color="primary" />
              <Typography className="privacy-policy">
                  I agree to the <Link to="">Term and Conditions </Link> and <Link to="">Privacy Policy</Link>
              </Typography>
            </div>
            <Button className="gradient-button" fullWidth>
              Sign Up
            </Button>
              <SocialLogin/>
            <Link className="register-now" to="/">
              Already have an account? Login Now
            </Link>
          </>
        </AuthCard>
      </div>
    );
  }
}

export default Login;
