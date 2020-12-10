import styled, { keyframes } from 'styled-components';

const showBubbleOne = keyframes`
    from{
        top: -500px;
        left: -500px;
    }
    to{
        top: -130px;
        left: -130px;
    }
`;

const showBubbleTwo = keyframes`
    from{
        bottom: -500px;
        right: -500px;
    }
    to{
        bottom: -130px;
        right: -130px;
    }
`;

const zoomOne = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
`;

const zoomDois = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
`;

export const MainLoginScreen = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #274662;
    display: flex;
    justify-content: center;
    align-items: center;

    > .spanUm{
        content: '';
        position: fixed;
        top: -130px;
        border-radius: 50%;
        left: -130px;
        display: block;
        width: 480px;
        height: 480px;
        animation: ${showBubbleOne} .8s linear, ${zoomOne} 2.1s linear infinite;
        background-color: #ffffff2d; 
    }

    > .spanDois{
        content: '';
        position: fixed;
        bottom: -130px;
        border-radius: 50%;
        right: -130px;
        display: block;
        width: 480px;
        animation: ${showBubbleTwo} .8s linear, ${zoomDois} 2s linear infinite;
        height: 480px;
        background-color: #ffffff2d; 
    }
`;

const showBoxLogin = keyframes`
    0%{
        transform: scale(0.1);
    }
    25%{
        transform: scale(1.2);
    }
    50%{
        transform: scale(0.9);
    }
    75%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
`;

export const BoxLogin = styled.section`
    z-index: 9;
    width: 70vw;
    animation: ${showBoxLogin} .5s linear;
    min-height: 40vh;
    box-shadow: 0px 0px 25px #1111117d;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fff;

    > .sideLeft{
        background-color: #111f2c;
        padding: 40px 20px;
        overflow: hidden;
        position: relative;

        > .headerComponent{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            > h2{
                font-weight: bold;
                letter-spacing: 2px;
                margin-bottom: 20px;
                text-transform: uppercase;
                color: #fff;
            }

            > img{
                width: 50%;
                margin-bottom: 50px;
            }
        }

        > form {
            width: 100%;
            padding: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;

            > input{
                width: 100%;
                margin-bottom: 20px;
                padding: 12px;
                border-radius: 50px;
                text-align: center;
            }

            > button{
                width: 100%;
                margin-bottom: 20px;
                padding: 12px;
                border-radius: 50px;
                cursor: pointer;
                color: #fff;
                background-color: #2c92ba;
                z-index: 1;
                text-align: center;
            }
        }

        > .helperLine{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px;
            margin-top: -15px;

            a{
                color: #fff;
                font-size: .9em;
            }
        }
    }

    > .sideRight{
        background-color: #fff;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
