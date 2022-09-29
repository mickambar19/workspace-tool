import styled from 'styled-components'
import theme from '../../components/Theme'

export const TagStyled = styled.span`
  background: ${theme.colors.primaryFG};
  padding: 2px 8px;
  border-radius: 15px;
  height: 30px;
  margin: 5px 5px 5px auto;
  display: inline-flex;
  align-items: center;
  font-weight: 700;
`

export const TextStyled = styled.h2`
  color: ${theme.colors.primaryFG};
  font-size: 20px;
  margin: 5px;
`

export const DeleteButtonStyled = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background: ${theme.colors.white};
  border: 0;

  margin: 5px;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 5px inset ${theme.colors.primaryFG};
    box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.75);
  }
  transition: all ease 500ms;
`

export const ButtonStyled = styled.button`
  color: ${theme.colors.primaryFG};
  background: ${theme.colors.black};
  border: 0;
  border-top: 2px solid ${theme.colors.white};
  min-height: 30px;

  margin: 0 auto;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  &:hover {
    background: ${theme.colors.primaryFG};
    color: ${theme.colors.black};
    font-weight: 700;
  }
  transition: all ease 500ms;
`
