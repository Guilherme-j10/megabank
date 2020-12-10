import React from 'react';
import GlobalStyle from '../../style/GlobalStyle';
import * as Style from './style';

export default function ScreenLoad(){
    return(
        <>
            <GlobalStyle />
            <Style.allScreen>
                <i class="fas fa-circle-notch fa-spin"></i>
                <h1>Carregando...</h1>
            </Style.allScreen>
        </>
    );
}