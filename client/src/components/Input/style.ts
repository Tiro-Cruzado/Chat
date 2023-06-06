import styled from 'styled-components'

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.soft_gray};
  color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.soft_gray};
  border-radius: 80px;
  padding: 14px 16px;
  min-width: 282px;
  outline: 0;

  :focus {
    border: 1px solid ${(props) => props.theme.colors.puple};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.soft_gray};
  }
`

export { Input }
