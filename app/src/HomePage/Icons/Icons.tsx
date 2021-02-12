import React from 'react';
import { Icon } from './Icon/Icon'
import { IconsWrapper } from './styled'

export const Icons: React.FC = () => { 
    // TODO: typescript here?
    const icons = [
        {url: 'mailto:me@aminbeigi.com', iconName: 'far fa-envelope'},
        {url: 'http://aminbeigi.com/blog', iconName: 'fas fa-blog'},
        {url: 'https://www.linkedin.com/in/amin-ghasembeigi-09ab401b0', iconName: 'fab fa-linkedin-in'},
        {url: 'https://github.com/aminbeigi', iconName: 'fab fa-github'},
        {url: 'https://twitter.com/@aminbeigi9', iconName: 'fab fa-twitter'},
        {url: 'https://leetcode.com/aminbeigi', iconName: 'fas fa-lira-sign'}
    ]

    return (
        <IconsWrapper>
            {
                icons.map((icon, key) => {
                    return (
                        <Icon key={key} url={icon.url} fontAwesomeIcon={icon.iconName}/>
                    )
                })
            }
        </IconsWrapper>
    );
}