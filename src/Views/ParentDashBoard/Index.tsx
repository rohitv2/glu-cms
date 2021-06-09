import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {routes} from "../../Routes/Parents/index";

const Index = () => {
    return (
        <Switch>
            {routes.map((route: any, i:number) => (
                <Route exact={true} key={i} {...route}/>
            ))}
        </Switch>
    );
};

export default Index;
