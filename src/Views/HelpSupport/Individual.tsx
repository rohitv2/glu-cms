import React from 'react';
import TitleDescription from './TitleDescription';

const Individual = () => {
    return (
        <div className="individual__container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <ul className="topic-list-container">
                            <li className="list">
                                Account
                                <ul className="subtopic-list-container">
                                    <li>Creating an individual</li>
                                    <li>account Set up a school subscription</li>
                                    <li>Creating a school account</li>
                                    <li>Starting a Glu subscription</li>
                                    <li>Moving an existing account</li>
                                </ul>
                            </li>
                            <li className="list">Payment</li>
                            <li className="list">Settings</li>
                            <li className="list">Features</li>
                            <li className="list">Tips and Advice</li>
                            <li className="list">Whiteboard</li>
                            <li className="list">Tutors</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <TitleDescription
                            rowNo=""
                            title="Creating an individual account"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                        />
                        <TitleDescription
                            title="Watch the tutorial"
                            rowNo="01"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
                        />
                    </div>
                </div>
            </div>
    );
}

export default Individual;
