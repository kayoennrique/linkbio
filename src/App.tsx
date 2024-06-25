import React from "react";
import styled from "styled-components";
import LinkButton from "./components/Button/Button";
import Header from "./components/Header";
import GlobalStyle from "./styles";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #94bfa7;
    min-height: 100vh;
    text-align: center;
`;

const App: React.FC = () => {
    return (
        <Container>
            <GlobalStyle />
            <Header
                logoSrc="./src/assets/logo.png"
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
        </Container>
    );
};

export default App;
