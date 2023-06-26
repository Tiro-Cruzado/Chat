import styled from 'styled-components'

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.soft_gray};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.soft_gray};
  border-radius: 80px;
  padding: 14px 16px;
  min-width: 282px;
  width: 100%;
  outline: 0;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.puple};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  }
`

export { Input }
