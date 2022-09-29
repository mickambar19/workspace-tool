import styled from 'styled-components'
import theme from '../../components/Theme'

export const RootStyled = styled.div`
  background-color: ${theme.colors.black};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TasksContainerStyled = styled.div`
  background-color: ${theme.colors.white};
  width: 900px;
  max-width: 100%;
  height: 900px;
  max-height: 70%;
  padding: 25px 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
  border: 2px solid ${theme.colors.white};
`

export const CountersContainerStyled = styled.div`
  width: 900px;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  > span {
    margin: 5px;
    color: ${theme.colors.primaryFG};
  }
`
