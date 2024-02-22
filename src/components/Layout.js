import styled from 'styled-components';
import Header from "components/Header";
import Footer from "components/Footer";

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
            <Footer></Footer>
        </Container>
    );
}

export default Layout;