import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { tutorRoutes } from '../../Routes/Tutor/Index';

const Index = () => {
    return (
        <Switch>
            {tutorRoutes.map((route: any, index) => (
                <Route exact key={index} {...route} />
            ))}
        </Switch>
    );
};

export default Index;
