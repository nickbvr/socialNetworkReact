import styled from 'styled-components'

export const CreatePostStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  textarea {
    background-color: silver;
    width: 100%;
    min-height: 100px;
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
    padding: 15px 30px;
    margin: 15px 0;
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