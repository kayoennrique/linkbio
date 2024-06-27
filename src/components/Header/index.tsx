import React from "react";
import * as S from "./styles";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ logoSrc, quote }) => {
    return (
        <S.HeaderContainer>
            <S.Logo src={logoSrc} alt="Logo" />
            <S.QuoteText>{quote}</S.QuoteText>
        </S.HeaderContainer>
    );
};

export default Header;
