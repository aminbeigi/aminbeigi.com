import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconWrapper = styled.a`
    font-size: 2.75rem;
    margin: 0.65em;

    path {
        color: grey;
    }
    
    &:hover .font-awesome-icon {
        path {
            color: #eee;
        }
    }
`;