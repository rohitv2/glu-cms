import React from 'react';
import { Typography } from '@material-ui/core';
import SearchInput from '../../components/SearchInputContainerReusable';

const AskSomething = () => {
    return (
        <div className="row askSomethingInput">
            <div className="col-md-6">
                <Typography className="left_title">Ask Something</Typography>
            </div>
            <div className="col-md-6 ">
                <div className="rightInputContainer">
                    <SearchInput />
                    <div className="commonQuestions">
                        <ul>
                            <li>
                                <p>How to find a tutor?</p>
                            </li>
                            <li>
                                <p>Is there an interactive whiteboard?</p>
                            </li>
                            <li>
                                <p>How to become a tutor?</p>
                            </li>
                            <li>
                                <p>I didn't receive any verification code</p>
                            </li>
                            <li>
                                <p>Getting started with favourites</p>
                            </li>
                            <li>
                                <p>Monthly costs</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskSomething;
