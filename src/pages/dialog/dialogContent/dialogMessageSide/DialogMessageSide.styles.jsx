import styled from 'styled-components'

export const DialogMessageSideStyles = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100vh - 150px);
    > div:first-child {
        overflow-y: scroll;
    }
`