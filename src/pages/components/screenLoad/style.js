import styled from 'styled-components';

export const allScreen = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    > i {
        font-size: 7em;
        color: #2c92ba;
        margin-bottom: 10px;
    }

    > h1 {
        color: #333;
        font-weight: 500;
        font-size: 2em;
    }
`;