import * as S from "./styles";

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.TextLink>
                © 2024 Desenvolvido por{" "}
                <S.Link
                    href="https://kayoennrique.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Kayo Ennrique
                </S.Link>
                .
            </S.TextLink>
        </S.FooterContainer>
    );
};

export default Footer;
