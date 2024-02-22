import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "components/Layout";
import MainPage from 'pages/MainPage';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
overflow: hidden;
`;

const Router = () => {
	return (
        <Container>
            <Layout>
                <BrowserRouter>                                    
                    <Routes>                                             
                        <Route path='/' element={<MainPage />} />        
                    </Routes>
                </BrowserRouter>
            </Layout>
        </Container>
	);
};

export default Router;