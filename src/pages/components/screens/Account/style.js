import styled from 'styled-components';

export const Main = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    overflow: hidden;
    padding: 50px 25px;
    background-color: #111f2c;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    > h1 {
        color: #fff;
        font-size: 1.3em;
        margin-bottom: 20px;
    }

    > .firstSpace {
        width: 100%;
        z-index: 1;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        display: flex;

        > .sideProfileImg {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin-right: 35px;

            > .ProfileImg {
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 150px;
                height: 150px;
                background-color: #2c92ba;
                border-radius: 50%;
            }

            > .dadosForm {

                > label {
                    color: #2c92ba;
                    background-color: #2c92ba2d;
                    padding: 10px 10px;
                    border-radius: 50px;
                    cursor: pointer;
                    margin-top: 15px;
                    display: block;
                }

                > input[type=file]{
                    display: none;
                }
            }
        }
        
        > .Global {
            width: 100%;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

            >h1{
                margin-bottom: 20px;
                font-size: 1.3em;
            }

            > input[type=submit]{
                display: block;
                background-color: #111f2c;
                color: #fff;
                cursor: pointer;
                padding: 10px 20px;
                border-radius: 50px;
            }

            > .inputs {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 40px 40px 40px;
                grid-gap: 20px;

                > .sideFlat {
                    display:flex;


                    > input, i {
                        width: 100%;
                        height: 40px;
                        border-radius: 0px 3px 3px 0px;
                        border: solid 1px #ccc;
                        padding: 13px;
                        text-align: center;
                    }

                    i{
                        width: 40px;
                        border-radius: 3px 0px 0px 3px;
                        display: flex;
                        justify-content: center;
                        border-right: none;
                        align-items: center;
                        color: #2c92ba;
                    }
                }
            }


        }
    }
`; 