import React from 'react';
import { IconButton } from './styled';

interface Props {
    url: string;
    fontAwesomeIcon: string;
}

export const Icon: React.FC<Props> = ({url, fontAwesomeIcon}) => { 
    return (
        <>
            <div><IconButton onAuxClick={() => window.open(url)} onClick={() => window.location.href = url}><i className={fontAwesomeIcon}></i></IconButton></div>
        </>
    );
}