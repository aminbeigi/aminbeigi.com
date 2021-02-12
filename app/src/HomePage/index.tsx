import React from 'react';
import { Title, Footer, FooterWrapper } from '../shared/styled';
import { Icons } from './Icons/Icons';

export const Homepage = () => { 
    return (
        <>
            <Title>Amin Beigi</Title> 
            <Icons>ICONS</Icons>
            <FooterWrapper>
                <Footer>Copyright © 2020 Amin Ghasembeigi</Footer>
            </FooterWrapper>
        </>
    );
}