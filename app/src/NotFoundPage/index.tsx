import React from 'react';
import { Title, Tagline, Footer, FooterWrapper } from '../shared/styled';
import confusedTravolta from './media/confused_travolta.gif';

import { StyledImg, StyledP, StyledButton } from './styled';

export const NotFoundPage = () => { 
    return (
        <>
            <Title>Amin Beigi</Title> 
            <Tagline>Computer Scientist • Minimalist</Tagline>
            <StyledImg src={confusedTravolta}/>
            <StyledP>Whoops, the page you are looking for can't be found!</StyledP>
            <StyledButton href='/'>Home Page</StyledButton>
            <FooterWrapper>
                <Footer>Copyright © 2021 Amin Ghasembeigi</Footer>
            </FooterWrapper>
        </>
    );
}