import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100px;

.about {
    text-decoration: none;
    font-size: 16px;
    color: #222222;
    font-weight: 700;
}
`;

const LinkGroup = styled.div`
display: flex;
padding: 4px 0px;
a {
    text-decoration: none;
    color: #616161;
    font-size: 14px;
    font-weight: 500;
}
`

function Footer() {
    return ( 
        <Box>
            <Link to="/" className="about">about rowan song</Link>
            <LinkGroup>
                <a href="https://github.com/Rowan-Hyeho-Song">github</a>
            </LinkGroup>
        </Box>
    );
}

export default Footer;