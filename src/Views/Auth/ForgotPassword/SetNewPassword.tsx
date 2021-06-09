import React from "react";
import AuthCard from "../../../Containers/Cards/AuthCard";
import { Typography, TextField, Button } from "@material-ui/core";
import {VerifiedUser} from "@material-ui/icons";
import {RouteComponentProps} from "react-router-dom";
import {withRouter} from 'react-router-dom';

class Login extends React.PureComponent<RouteComponentProps> {
  state = {
    showSuccessModal: false,
  };
  handleResetPassword = () => {
      this.setState({showSuccessModal: true})
  }
  goLogin = () => {
      this.props.history.push("/")
  }
  render() {
    return (
      <div className="login-wrapper">
        {!this.state.showSuccessModal ? (
          <AuthCard>
            <>
              <Typography variant="h3" className="logo">
                Glu.
              </Typography>
              <Typography className="slogan">
                Great learning umbrella.
              </Typography>
              <div className="reset-password-container">
                <Typography variant="h5" className="heading">
                  Set New Password
                </Typography>
                <Typography className="subheading">
                  Enter a password that you’ll be able to remember. Make sure it
                  contains one uppercase, symbol and more…
                </Typography>
              </div>
              <div className="bottom-line mb-4"></div>
              <TextField
                className="mb-4"
                variant="outlined"
                label="New Password"
                fullWidth
              />
              <TextField
                className="mb-4"
                variant="outlined"
                label="Confirm New Password"
                fullWidth
              />

              <Button className="gradient-button" onClick={this.handleResetPassword} fullWidth>
                Reset Password
              </Button>
            </>
          </AuthCard>
        ) : (
          <AuthCard>
            <>
              <Typography variant="h3" className="logo">
                Glu.
              </Typography>
              <Typography className="slogan">
                Great learning umbrella.
              </Typography>
              <div className="success-icon-container">
                  <VerifiedUser className="icon"/>
              </div>
              <div className="reset-password-container">
                <Typography variant="h5" className="heading">
                  Password Successfully Reset
                </Typography>
                <Typography className="subheading">
                  Now you can use your new password to log in to your account.
                  Happy Studying!
                </Typography>
              </div>
              <div className="bottom-line mb-4"></div>
              <Button className="gradient-button" onClick={this.goLogin} fullWidth>
                Back To Login
              </Button>
            </>
          </AuthCard>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
