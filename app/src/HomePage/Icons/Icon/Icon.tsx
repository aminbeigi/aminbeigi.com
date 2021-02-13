import React from 'react';
import { IconWrapper } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    url: string;
    iconName: IconProp;
}

export const Icon: React.FC<Props> = ({url, iconName}) => { 
    return (
        <IconWrapper href={url}>
            <span>
                <FontAwesomeIcon icon={iconName} className="font-awesome-icon"/>
            </span>
        </IconWrapper>
    );
}