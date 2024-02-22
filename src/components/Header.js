import styled from 'styled-components';

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100px;
color: #333333;
font-family: "Pacifico";
font-size: 20px;
font-weight: 400;
`;

function Header() {
    return (
        <Box className="no-drag">
            <div>Rowan Song's portfolio</div>
        </Box>
    );
}

export default Header;