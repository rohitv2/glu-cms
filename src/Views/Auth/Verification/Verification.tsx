import React from "react";
import AuthCard from "../../../Containers/Cards/AuthCard";
import { Typography, TextField, Button } from "@material-ui/core";
import {RouteComponentProps} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { authRegisterAPIcall } from '../../../Redux/Actions/loginAction';

class Verification extends React.PureComponent<RouteComponentProps> {
  state = {
    email: '',
    password: '',
    token:'',
  };
  componentDidMount(){
    const token = this.props.location.search.split('ref=');
    if(token[1]){
      this.setState({...this.state, token: token[1]})
    }
  }

  goLogin = () => {
      this.props.history.push("/")
  }
  handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({...this.state, email:e.target.value})
  }
  handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({...this.state, password:e.target.value})
  }
  handleRegister = () => {
    if(this.state.email!=='' && this.state.password!==''){
      this.props.authRegister(this.state, this.props.history);
    }
  }
  render() {
  
    return (
      <div className="login-wrapper">
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
                  Create your credential
                </Typography>
                <Typography className="subheading">
                  Enter a username and password that you’ll be able to remember. Make sure it
                  contains one uppercase, symbol and more…
                </Typography>
              </div>
              <div className="bottom-line mb-4"></div>
              <TextField
                className="mb-4"
                variant="outlined"
                label="Username"
                value={this.state.email}
                onChange={this.handleUsername}
                fullWidth
              />
              <TextField
                className="mb-4"
                variant="outlined"
                label="Password"
                value={this.state.password}
                onChange={this.handlePassword}
                fullWidth
              />

              <Button className="gradient-button" onClick={this.handleRegister} fullWidth>
                Register
              </Button>
            </>
          </AuthCard>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch:any) => {
  return {
    authRegister: (data:any, history: any) => dispatch(authRegisterAPIcall(data, history))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Verification));
