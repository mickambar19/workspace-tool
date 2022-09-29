import styled from 'styled-components'
import theme from '../../components/Theme'

export const TitleStyled = styled.h2`
  font-size: 25px;
  text-align: center;
  color: ${theme.colors.white};
  margin: 0;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px;
`

export const LabelStyled = styled.label`
  font-size: 16px;
  margin: 4px 0;
  color: ${theme.colors.primaryFG};
`

export const ButtonStyled = styled.button`
  background-color: ${theme.colors.primaryFG};
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  width: 80px;
  display: block;
  margin: 8px auto 0;
  border: 0;
  border-radius: 5px;
`
