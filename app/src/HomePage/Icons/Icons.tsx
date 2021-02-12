import React from 'react';

export const Icons: React.FC = () => { 
    const githubLink = 'https://github.com/aminbeigi/truth-table-generator';

    return (
        <>
            <div><button onAuxClick={() => window.open(githubLink)} onClick={() => window.location.href = githubLink}><i className="fab fa-github"></i></button></div>

        </>
    );
}