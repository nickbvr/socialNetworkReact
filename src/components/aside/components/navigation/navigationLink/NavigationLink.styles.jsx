import styled from 'styled-components';

export const NavigationLinkStyles = styled.div`
    display: flex;
    flex-direction: column;
    &:last-child {
        margin: 25px 0 0 0;
    }
    a {
        color: white;
        font-size: 2.5vmin;
        margin-bottom: 5px;
        transition: 0.3s;
        &.active {
            color: #61DAFB;
            padding-left: 7px;
        }
    }
`