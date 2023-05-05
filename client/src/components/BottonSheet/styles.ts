import styled from 'styled-components'

const Head = styled.h1`
  font-size: 36px;
`

const BottonSheet = styled.div`
  position: fixed;
  width: 500px;
  height: 300px;
  bottom: 0;

  background-color: red;
  border-radius: 16px 16px 0px 0px;
  /* overflow: auto; */
`
const ContainerWrapper = styled.h1`
  display: flex;
  justify-content: center;
`

export { Head, BottonSheet, ContainerWrapper }
