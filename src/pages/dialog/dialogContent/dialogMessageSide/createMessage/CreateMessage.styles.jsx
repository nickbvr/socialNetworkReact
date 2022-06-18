import styled from 'styled-components'

export const CreateMessageStyles = styled.div`
    display: flex;
    width: 100%;
    bottom: 0;
    padding: 0 20px;
    margin: 20px 0;
    textarea {
        background-color: silver;
        width: 100%;
        min-height: 80px;
        padding: 10px 15px;
        resize: none;
        border-radius: 10px;
        border: 0;
        outline: none;
        box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
        :focus {
            background-color: white;
            border: 1px solid silver;
            padding: 9px 14px;
        }
    }
    button {
        background-color: #383a45;
        border: 0;
        padding: 10px 20px;
        margin: 0 0 0 15px;
        height: 40px;
        border-radius: 15px;
        color: white;
        cursor: pointer;
        transition: 0.3s;
        :hover {
            background-color: #27272e;
            color: #61DAFB;
        }
    }
`