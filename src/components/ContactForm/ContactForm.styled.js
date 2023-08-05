import styled from 'styled-components';

export const Form = styled.form`
  width: max-content;
  padding: 25px;
  border: 2px solid black;

  label {
    display: block;
    margin-bottom: 7px;
  }

  input {
    display: block;
    margin-bottom: 15px;
  }

  button {
    padding: 5px 8px;
    background-color: #66b3ee;
    color: white;
    border: none;
    border-radius: 6px;
    margin-left: 15px;

    :hover {
      background-color: #7f8aee;
      color: #f9f;
    }
    :active {
      transform: scale(1.1);
    }
  }
`;
