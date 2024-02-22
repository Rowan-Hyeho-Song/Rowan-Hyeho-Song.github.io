import styled from 'styled-components';
import Header from "components/Header";

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
`;

const Main = styled.div`
flex: auto;
`;

function Layout(props) {
    const { children } = props;
    return (
        <Container>
            <Header></Header>
            <Main>
                { children }
            </Main>
        </Container>
    );
}

export default Layout;