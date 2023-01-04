import React from 'react'
import styled from 'styled-components'
const Header = () => {
    return (
        <HeaderSection>
            <Title>To Do List</Title>
        </HeaderSection>
    )
}

export default Header
const HeaderSection = styled.header`

`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;