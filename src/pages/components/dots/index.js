import React from 'react';
import GlobalStyle from '../../style/GlobalStyle';
import * as Style from './style';

export default function Dots({nLines, size, nDots, rotate, top, left, right, bottom }){
    let rows = [];
    for(let i = 0; i < nLines; i++){
        let dot = [];
        for(let d = 0; d < nDots; d++){
            dot.push(<span style={{width: size, height: size}} className="dots"></span>);
        }
        rows.push(<li>{dot}</li>);
    }

    return(
        <>
            <GlobalStyle />
            <Style.grid style={{marginTop: top, marginBottom: bottom, marginRight: right, marginLeft: left, transform: `rotate(${rotate})`}} className="grid">
                {rows}
            </Style.grid>
        </>
    );
}