import React from 'react'
import styled from 'styled-components'
import theme from '../Theme'

const RootStyled = styled.div`
  width: 250px;
  height: 250px;
  padding: 10px 15px;
  flex-basis: 25%;
  flex-grow: 0;
  box-sizing: border-box;
  overflow: hidden;
  @media ${theme.devices.mobile} {
    flex-basis: 50%;
  }
`

const CardStyled = styled.div`
  height: 100%;
  width: 100%;
  background: ${theme.colors.black};
  border-radius: 10px;
  box-shadow: 0px 1.375px 1.935px -0.875px rgba(0, 0, 0, 0.2),
    0px 3px 4.749px 0.375px rgba(0, 0, 0, 0.14),
    0px 1.125px 5.748px 1px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`

const Card = ({
  className,
  children,
  ...props
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <RootStyled {...props}>
      <CardStyled className={className}>{children}</CardStyled>
    </RootStyled>
  )
}

export default Card
