import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100px;

.header-title {
    text-decoration: none;
    color: #333333;
    font-family: "Pacifico";
    font-size: 20px;
    font-weight: 400;
}
`;

function Header() {
    return (
        <Box className="no-drag">
            <Link to="/" className="header-title">Rowan Song's portfolio</Link>
        </Box>
    );
}

export default Header;