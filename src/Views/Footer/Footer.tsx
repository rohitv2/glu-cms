import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import MadeBy from './MadeBy';
import { Icons } from '../../Assets/Icons';
import { useDispatch } from 'react-redux';
import { emailSubscriber } from '../../Redux/Actions/loginAction';
import { Link } from 'react-router-dom';

const Footer: React.FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [buttonText, setButtonText] = useState<string>('Subscribe');
    const [isVerified, setEmailVerify] = useState(false);
    const [isEmailEnter, setEmailEnter] = useState('');
    const disptach = useDispatch();
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (buttonText === 'Thank You') {
            setButtonText('Subscribe');
            setEmail('');
        }
        setEmailEnter(e.target.value);
        setEmail(e.target.value);
        let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailReg.test(e.target.value)) {
            setEmailVerify(true);
        } else {
            setEmailVerify(false);
        }
    };

    const resetEmail = () => {
        setEmail("You've successfully subscribed");
        setButtonText('Thank You');
    };
    const submitEmail = () => {
        if (isVerified) {
            disptach(emailSubscriber({ email }, resetEmail));
        }
    };

    return (
        <div className="footer">
            <hr className="line" />
            <div className="row">
                <div className="col-md-8 col-lg-6">
                    <div className="email-container">
                        <Typography className="join-glu">Join the Glu news</Typography>
                        <input
                            value={email}
                            type="text"
                            className="email"
                            placeholder="Your Email"
                            onChange={handleEmail}
                            style={
                                !isEmailEnter
                                    ? {}
                                    : isVerified
                                    ? buttonText === 'Thank You'
                                        ? { borderColor: '#000' }
                                        : { borderColor: '#007AFF' }
                                    : { borderColor: '#cfcfcf' }
                            }
                        />
                        <Typography className="subscribe" onClick={submitEmail}>
                            {buttonText}
                        </Typography>
                    </div>
                </div>
                <div className="col-md-2 col-lg-3">
                    <div className="address-container address-padding">
                        <Typography className="title">Contact</Typography>
                        <Typography className="title">info@glulearning.com</Typography>
                        <Typography className="title">+971 4 554 0350</Typography>
                    </div>
                </div>
                <div className="col-md-2 col-lg-3 position-relative">
                    <div className="three__piller__container">
                        <img src={Icons.threePiller} alt="three piller" />
                    </div>
                    <div className="address-container">
                        <Link className="links" to="">
                            Insagram
                        </Link>
                        <Link className="links" to="">
                            Facebook
                        </Link>
                        <Link className="links" to="">
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
            <div className="breaker"></div>
            <MadeBy />
        </div>
    );
};

export default Footer;
