import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./styles";
import PlantImage from "/plant.webp";
import Footer from "./components/Footer";
import LinkButton from "./components/Button";
import { GrSchedule, GrSchedules } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

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

const App = () => {
    return (
        <Container>
            <GlobalStyle />
            <Watermark />
            <Content>
                <Header
                    logoSrc="/logo.webp"
                    quote={'"Autoconhecimento é a base para o crescimento."'}
                />
                <LinkButton
                    href="https://p.eduzz.com/1750066"
                    target="_blank"
                    icon={
                        <GrSchedules
                            size={20}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "0.95rem",
                            }}
                        />
                    }
                >
                    JOURNAL MEU AUTOCUIDADO DIÁRIO
                </LinkButton>
                <LinkButton
                    href="https://drive.google.com/file/d/1Jz1ajX3Dt1OnqfT9l8HWNwq3xqMPJZzM/view"
                    target="_blank"
                    icon={
                        <FaDownload
                            size={20}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "0.95rem",
                            }}
                        />
                    }
                >
                    BAIXE SUA AGENDA M.A.P. GRATUITAMENTE
                </LinkButton>
                <LinkButton
                    href="https://api.whatsapp.com/send/?phone=5521971744740&text&type=phone_number&app_absent=0"
                    target="_blank"
                    icon={
                        <GrSchedule
                            size={20}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "0.95rem",
                            }}
                        />
                    }
                >
                    AGENDE SUA TERAPIA
                </LinkButton>
                <LinkButton
                    href="https://api.whatsapp.com/send/?phone=5521971744740&text&type=phone_number&app_absent=0"
                    target="_blank"
                    icon={
                        <FaSquareWhatsapp
                            size={20}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "0.95rem",
                            }}
                        />
                    }
                >
                    SUPERVISÃO PARA PSICANALISTA EM FORMAÇÃO
                </LinkButton>
                <Footer />
            </Content>
        </Container>
    );
};

export default App;
