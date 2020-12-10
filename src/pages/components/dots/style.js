import styled from 'styled-components';

export const grid = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;

    > li{
        display: flex;
        flex-direction: row;

        > .dots{
            width: 3px;
            height: 3px;
            background-color: #ffffff2d;
            border-radius: 50%;
            margin: 5px;
        }
    }
`;