import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import validate from './validate';

import LoginScreen from './pages/Login/index';
import DeashboardScreen from './pages/Deashboard/index';
import LoadScreen from './pages/components/screenLoad/index';
import AccountScreen from './pages/Account/index';

function App() {
    const [status, setStatus] = useState(false);
    const [isValid, setisValid] = useState(false);

    function loadvalidate(){
        validate().then(resolve => {
            setisValid(resolve);
            setStatus(true);
        }).catch(err => {
            setisValid(err)
            setStatus(true);
        })

        return isValid;
    }

    loadvalidate();

    if(status == false){
        return <LoadScreen />;
    }else{
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        { loadvalidate() === true ? <Redirect to={{pathname: '/home', from: window.location.href}} /> : <LoginScreen /> }
                    </Route>
                    <Route exact path="/home">
                        { loadvalidate() === true ? <DeashboardScreen /> : <Redirect to={{pathname: '/', from: window.location.href}} /> }
                    </Route>
                    <Route exact path="/account">
                        { loadvalidate() === true ? <AccountScreen /> : <Redirect to={{pathname: '/', from: window.location.href}} /> }
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
