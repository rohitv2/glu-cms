import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../Routes/Students';

const StudentsModule: FC = () => {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route exact key={index} {...route} />
            ))}
            <Redirect to="/students/home" />
        </Switch>
    );
};

export default StudentsModule;
