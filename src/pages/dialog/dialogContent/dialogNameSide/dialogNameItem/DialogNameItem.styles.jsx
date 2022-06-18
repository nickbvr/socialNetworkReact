import styled from 'styled-components'

export const DialogNameItemStyles = styled.div`
    display: flex;
    align-items: center;
    img {
        position: absolute;
        width: 55px;
        height: 55px;
        margin-left: 5px;
        z-index: 1;
        border-radius: 50%;
    }
    a {
        padding: 25px 25px 25px 65px;
        transition: 0.3s;
        display: block;
        width: 100%;
        &:hover {
            background-color: #f0f2f5;
            box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
        }
        &.active {
            background-color: #383a45;
            color: #61DAFB;
            padding-left: 75px;
        }
    }
`