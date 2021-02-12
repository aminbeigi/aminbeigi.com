import styled from 'styled-components';

export const StyledI = styled.i`
    color: grey;
`

export const IconWrapper = styled.a`
    font-size: 2.2rem;
    margin: 0.5em;
    color: grey;
    &:hover ${StyledI} {
        color: #eee;
      }
`

