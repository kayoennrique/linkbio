import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./styles";
import PlantImage from "/plant.png";
import Footer from "./components/Footer/Footer";
import LinkButton from "./components/Button/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #94bfa7;
    min-height: 100vh;
    text-align: center;
    position: relative;
    overflow: hidden;
`;

const Watermark = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    background: url(${PlantImage}) no-repeat center;
    background-size: cover;
    pointer-events: none;
    z-index: 1;

    @media (min-width: 768px) {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center;
    }
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const App: React.FC = () => {
    return (
        <Container>
            <GlobalStyle />
            <Watermark />
            <Content>
                <Header
                    logoSrc="/logo.png"
                    quote={'"Autoconhecimento é a base para o crescimento."'}
                />
                <LinkButton href="https://p.eduzz.com/1750066" target="_blank">
                    JOURNAL MEU AUTOCUIDADO DIÁRIO
                </LinkButton>
                <LinkButton
                    href="https://drive.google.com/file/d/1Jz1ajX3Dt1OnqfT9l8HWNwq3xqMPJZzM/view"
                    target="_blank"
                >
                    BAIXE SUA AGENDA M.A.P. GRATUITAMENTE
                </LinkButton>
                <LinkButton
                    href="https://api.whatsapp.com/send/?phone=5521971744740&text&type=phone_number&app_absent=0"
                    target="_blank"
                >
                    AGENDE SUA TERAPIA
                </LinkButton>
                <LinkButton
                    href="https://api.whatsapp.com/send/?phone=5521971744740&text&type=phone_number&app_absent=0"
                    target="_blank"
                >
                    SUPERVISÃO PARA PSICANALISTA EM FORMAÇÃO
                </LinkButton>
                <Footer />
            </Content>
        </Container>
    );
};

export default App;
