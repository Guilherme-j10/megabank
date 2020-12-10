import styled from 'styled-components';
import { keyframes } from 'styled-components';

const growth = keyframes`
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

export const MainDeash = styled.section`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;

    > .left {
        width: 100%;
        padding: 30px 0px;
        display: flex;
        overflow: hidden;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        background: linear-gradient(to top, #076185, #2c92ba);

        > .dotsBubble, .dotsBubbleDois{
            overflow: hidden;
            width: 200px;
            height: 200px;
            background-color: #ffffff1a;
            border-radius: 50%;
            animation: ${growth} 2s linear infinite;
            margin-left: -100px;
            margin-top: -50px;
            position: absolute;
        }

        > .Dois{
            width: 300px;
            height: 300px;
            margin-left: 200px;
            margin-top: 50px;
            animation: ${growth} 1.9s linear infinite;
        }

        > .Tres{
            width: 300px;
            height: 300px;
            margin-left: -200px;
            margin-top: 480px;
            animation: ${growth} 1.6s linear infinite;
        }

        > .global{
            width: 100%;

            > .headerLogo{
                padding: 0px 20px;
                padding-bottom: 30px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                > img{
                    width: 70%;
                }
            }

            > .OptionMenuUser{
                width: 100%;
                margin-top: 30px;
                padding-left: 30px;
                flex-direction: column;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;

                > .ativo{
                    > a {
                        background-color: #111f2c;
                    }
                }

                > .special {
                    background-color: #0761859d;
                    padding: 20px 25px;
                    padding-right: 0px;
                    border-radius: 25px 0px 0px 25px;
                    display: flex;
                    flex-direction: row;

                    > .sideLeftOfTheForce{
                        color: #fff;
                        margin-right: 15px;
                    }

                    > .OptionAnalytics {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;

                        > li strong {
                            margin-bottom: 10px;
                            display: block;
                            color: #fff;
                            font-weight: 500;
                        }

                        > li a{
                            color: #fff;
                            font-weight: 300;
                            display: block;
                            margin-bottom: 15px;
                        }

                        > li:last-child{
                            margin-bottom: 0px;
                            > a{
                                margin-bottom: 0px;
                            }
                        }
                    }
                } 

                > li {
                    margin-bottom: 20px;
                    width: 100%;
                    z-index: 1;
                    
                    > .ativo{
                        > a {
                            background-color: #111f2c;
                        }
                    }

                    > a{
                        width: 100%;
                        display: block;
                        padding: 20px 25px;
                        border-radius: 50px 0px 0px 50px;
                        color: #fff;
                        font-size: 1em;
                        background-color: transparent;

                        i{
                            font-size: 1em;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }

        > .sectionUser {
            width: 100%;
            padding: 0px 30px;

            > a {
                background-color: #fff;
                cursor: pointer;
                color: #2c92ba;
                width: 100%;
                display: block;
                text-align: center;
                padding: 15px;
                border-radius: 10px;  
            }
        }
    }

    > .middle {
        background-color: #f2f2f2;
    }

    > .right {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        background-color: #fff;

        > .where {
            width: 100%;
            margin-bottom: 20px;
            
            > ul{
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-bottom: solid 1px #ebebeb;

                > .select {
                    > a {
                        border-bottom: solid 1px #2c92ba;
                    }
                }

                > li {
                    width: 100%;
                    text-align: center;

                    a {
                        width: 100%;
                        display: block;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #444;
                        border-bottom: solid 1px transparent;
                        padding-bottom: 10px;

                        > .number {
                            border-radius: 50px;
                            width: 15px;
                            margin-left: 5px;
                            height: 15px;
                            font-size: 12px;
                            display: flex;
                            align-items: center;
                            justify-content: center; 
                            background-color: #ff5100;
                            color: #fff;
                        }
                    }
                }
            }
        }

        > .headerSideRight{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            > h1 {
                color: #333;
                font-size: 1.1em;
            }
        }

        > .InformativePlataform{
            width: 100%;
            padding: 20px;
            position: relative;
            overflow: hidden;
            margin-top: 30px;
            min-height: 25vh;
            border-radius: 20px;
            background-color: #2c92ba;
            box-shadow: 0px 10px 50px -5px #2c92ba9d;

            > h2 {
                color: #ffffffb8;
                font-size: 1.3em;

                > strong {
                    font-weight: 400;
                    color: #fff;
                }
            }

            > a {
                width: 60%;
                padding: 10px 20px;
                display: block;
                border-radius: 5px;
                text-align: center;
                margin-top: 20px;
                background-color: #fff;
                color: #111f2c;
            }

            > svg {
                position: absolute;
                width: 25%;
                margin-left: 145px;
                margin-top: -110px;
            }
        }

        > .PerfilLine {
            width: 100%;
            padding-bottom: 10px;
            border-bottom: solid 1px #ebebeb;
            display: flex;
            margin-top: 20px;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            > .ProfilePhoto {
                width: 95px !important;
                height:  70px !important;
                background-color: #111f2c;
                border-radius: 50px !important; 
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }

            > .infos {
                width: 100%;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                > .Standard {

                    > h1 {
                        font-size: 16px;
                        font-weight: 500;
                        color: #333;
                    }

                    > p {
                        font-weight: 500;
                        color: #555;
                    }
                
                    > a {
                        background-color: #2c92ba2d;
                        color: #2c92ba;
                        display: block;
                        text-align: center;
                        padding: 5px 10px;
                        margin-top: 5px;
                        border-radius: 50px;
                    }
                }
            }
        }

        > .moneyShow {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: solid 1px #ebebeb;
            align-items: center;

            > .mesmaCoisa {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                > p {
                    margin-bottom: 5px;
                    color: #555;
                }

                > h1 {
                    color: #333;
                    font-weight: 600;
                }
            }
        }
    }
`;
