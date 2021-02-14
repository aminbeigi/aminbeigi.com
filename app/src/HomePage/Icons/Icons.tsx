import React from 'react';
import { Icon } from './Icon/Icon'
import { IconsWrapper } from './styled'

import { faEnvelope, faBlog, faLiraSign  }from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Icons: React.FC = () => { 
    // TODO: typescript here?
    const icons: { url: string, iconName: IconProp }[] = [
        {url: 'mailto:me@aminbeigi.com', iconName: faEnvelope},
        {url: 'http://aminbeigi.com/blog', iconName: faBlog},
        {url: 'https://www.linkedin.com/in/amin-ghasembeigi-09ab401b0', iconName: faLinkedinIn},
        {url: 'https://github.com/aminbeigi', iconName: faGithub},
        {url: 'https://twitter.com/@aminbeigi9', iconName: faTwitter},
        {url: 'https://leetcode.com/aminbeigi', iconName: faLiraSign}
    ]

    return (
        <IconsWrapper>
            {
                icons.map((icon, key) => {
                    return (
                        <Icon key={key} url={icon.url} iconName={icon.iconName}/>
                    )
                })
            }
        </IconsWrapper>
    );
}