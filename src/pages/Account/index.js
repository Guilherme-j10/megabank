import React, { useEffect, useState } from 'react';

import validate from '../../validate';
import LoadScreen from '../components/screenLoad/index';
import LoginScreen from '../Login/index';
import GlobalStyle from '../style/GlobalStyle';
import Deash from '../Deashboard/index';
import AccountScreen from '../components/screens/Account/index';

export default function Account(){
    const [validateSession, setValidadeteSession] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        document.title = 'Mega Bank - Account';

        validate().then(resolve => {
            setValidadeteSession(resolve);
            setLoad(true);
        }).catch(err => {
            setValidadeteSession(err);
            setLoad(true);
        });
    }, [])

    if(load !== false){
        if(validateSession == true){
            return(
                <>
                    <GlobalStyle />
                    <Deash title="Account" middle={
                        <AccountScreen />
                    } />
                </>
            );
        }else{
            return <LoginScreen />
        }
    }else {
        return <LoadScreen />
    }
}