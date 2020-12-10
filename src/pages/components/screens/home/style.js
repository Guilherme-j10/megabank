import styled from 'styled-components';

export const Main = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #111f2c;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    > canvas {
        background-color: transparent;
        width: 100% !important;
        border-radius: 5px;
        padding: 10px;
    }
`;