import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Routes/PrivateRoutes/PrivateRoute';
import { rootRoute } from './Routes/RootRoute/rootRoute';
import { rootRouteInterface } from './Interfaces/rootRouteInterface';
import { rootPrivateRoute } from './Routes/RootRoute/rootPrivateRoute';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './Styles/theme';
import Spinner from './components/Spinner/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export class App extends React.Component {
    CloseButton = ({ closeToast }: { closeToast: any }) => (
        <i style={{ color: '#000' }} className="icon-Close_Nav" onClick={closeToast} />
    );
    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <Spinner />
                    <ToastContainer closeButton={this.CloseButton} />
                    <Router>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                {rootRoute.map((item: rootRouteInterface, i: number) => {
                                    return <Route key={i} exact path={item.name} component={item.component} />;
                                })}
                                {rootPrivateRoute.map((item: rootRouteInterface, i: number) => {
                                    return <PrivateRoute key={i} path={item.name} component={item.component} />;
                                })}
                            </Switch>
                        </Suspense>
                    </Router>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
