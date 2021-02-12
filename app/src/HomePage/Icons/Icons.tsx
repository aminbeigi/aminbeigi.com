import React from 'react';
import { Icon } from './Icon/Icon'

export const Icons: React.FC = () => { 
    const githubLink = 'https://github.com/aminbeigi/truth-table-generator';

    return (
        <>
            <Icon url={githubLink} fontAwesomeIcon='fab fa-accessible-icon'/>
        </>
    );
}