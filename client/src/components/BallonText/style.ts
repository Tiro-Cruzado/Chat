import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
  font-family: 'Inter', sans-serif;

  margin: 20px;
`

export const Receive = styled.div`
  background-color: #574969;

  border-radius: 0 8px 8px 8px;
  margin-bottom: 22px;
  width: 256px;
  height: 51px;
`

export const Send = styled.div`
  background-color: #8c53d6;

  border-radius: 8px 8px 0 8px;
  width: 256px;
  height: 51px;
`

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 8px 12px 8px 11px;
`

export const Hours = styled.div`
  display: flex;
  justify-content: flex-end;

  font-size: 8px;
  font-weight: 600;

  margin-right: 12px;
  margin-bottom: 8px;
`
