import styled from 'styled-components';

export const DialogContentStyles = styled.div`
    display: grid;
    height: calc(100vh - 150px);
    grid-template-columns: 2fr 4fr;
    > div:nth-child(2) {
        position: relative;
    }
`