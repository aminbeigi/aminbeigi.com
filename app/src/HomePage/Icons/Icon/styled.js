import styled from 'styled-components';

export const StyledI = styled.i`
    color: grey;
`

export const IconWrapper = styled.a`
    font-size: 3rem;
    margin: 0.65em;
    color: grey;
    &:hover ${StyledI} {
        color: #eee;
      }
`

