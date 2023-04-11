import styled from 'styled-components'

export const Container = styled.button`
  background-color: #8c53d6;
  border: none;
  border-radius: 60px;
  line-height: 0;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: #63389b;
  }

  :disabled {
    background-color: rgba(140, 83, 214, 0.6);
  }
`
