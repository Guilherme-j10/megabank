import React, { useEffect, useState } from 'react';
import GlobalStyle from '../style/GlobalStyle';
import * as Style from './style';

import validate from '../../validate';
import LoadScreen from '../components/screenLoad/index';
import LoginScreen from '../Login/index';
import SidebarComponents from '../components/templates/sidebar/index';
import SidebarDois from '../components/templates/sidebarDois/index';
import HomeScreen from '../components/screens/home/index';

export default function Deashboard({middle, title}){
    const [validateSession, setvalidateSession] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        document.title = `Mega Bank - ${!title ? 'Home' : title}`;

        validate().then(resolve => {
            setvalidateSession(resolve);
            setLoad(true);
        }).catch(err => {
            setvalidateSession(false);
            setLoad(true);
        });
    }, [])

    if(load !== false){
        if(validateSession == true){
            return(
                <>
                    <GlobalStyle />
                    <Style.MainDeash>
                        <SidebarComponents />
                        <div className="middle">
                            { !middle ? <HomeScreen /> : middle }
                        </div>
                        <SidebarDois />
                    </Style.MainDeash>
                </>
            );
        }else{
            return <LoginScreen />
        }
    }else{
        return <LoadScreen />
    }
}