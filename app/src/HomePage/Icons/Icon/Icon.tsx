import React from 'react';
import { IconWrapper, StyledI } from './styled';

interface Props {
    url: string;
    fontAwesomeIcon: string;
}

export const Icon: React.FC<Props> = ({url, fontAwesomeIcon}) => { 
    return (
        <IconWrapper href={url}>
            <span>
                <StyledI className={fontAwesomeIcon}></StyledI>
            </span>
        </IconWrapper>
    );
}