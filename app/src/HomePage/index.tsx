import React from 'react';
import { Title, Tagline, Footer, FooterWrapper } from '../shared/styled';
import { Icons } from './Icons/Icons';

export const Homepage = () => { 
    return (
        <>
            <Title>Amin Beigi</Title> 
            <Tagline>Computer Scientist • Minimalist</Tagline>
            <Icons>ICONS</Icons>
            <FooterWrapper>
                <Footer>Copyright © 2021 Amin Ghasembeigi</Footer>
            </FooterWrapper>
        </>
    );
}