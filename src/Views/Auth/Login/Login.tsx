import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthCard from '../../../Containers/Cards/AuthCard';
import SocialLogin from '../../../components/Auth/SocialLogin';
import AdornmentInput from '../../../components/Inputs/AdornmentInput';
import { Typography, TextField, Checkbox, Button } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { userLoginAPIcall } from '../../../Redux/Actions/loginAction';
import { dispatch } from '../../../Redux/Store/Store';
import Loader from '../../../components/Loader';
import { connect } from 'react-redux';

type props = {
    loader: boolean;
    history: RouteComponentProps;
};
class Login extends React.PureComponent<props> {
    state = {
        // role: 'school',
        email: 'upk@123',
        password: 'Test@1234',
    };
    handleLoginAs = (value: string) => {
        this.setState({ ...this.state, role: value });
    };
    handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, email: e.target.value });
    };
    handlePassword = (value: string) => {
        this.setState({ ...this.state, password: value });
    };
    handleForm = () => {
        dispatch<any>(userLoginAPIcall(this.state, this.props.history));
    };

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
                            value={this.state.email}
                            onChange={this.handleEmail}
                            label="Email Address"
                            fullWidth
                        />
                        <AdornmentInput value={this.state.password} onChange={(value) => this.handlePassword(value)} />
                        <div className="remember-me-container">
                            <Checkbox className="remember-me-checkbox" color="primary" />
                            <Link to="forgot-password">Forgot Passowrd ?</Link>
                        </div>
                        <Button
                            className="gradient-button"
                            disabled={this.props.loader}
                            onClick={this.handleForm}
                            fullWidth>
                            {this.props.loader ? <Loader /> : 'Login to Account'}
                        </Button>
                        <SocialLogin />
                        <Link className="register-now" to="signup">
                            Don't have an account? Register Now
                        </Link>
                    </>
                </AuthCard>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        loader: state.uiReducer.loader,
    };
};

export default connect(mapStateToProps)(withRouter(Login));
