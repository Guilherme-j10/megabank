import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-weight:normal;
        list-style: none;
        text-decoration: none;
        font-family: 'Jost', sans-serif;

        > body{
            height: 100%;

            > img{
                max-width: 100%;
            }
        }
    } 
`;