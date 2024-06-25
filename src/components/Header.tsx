import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    text-align: center;
`;

const Logo = styled.img`
    max-width: 250px;
    margin-bottom: 0.05rem;
`;

const QuoteWrapper = styled.div`
    position: relative;
`;

const QuoteIcon = styled.img`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 2rem;
    margin-top: -1rem;
`;

const QuoteText = styled.p`
    color: #666;
    font-size: 1.5rem;
    margin-top: 0.5rem;
`;

type HeaderProps = {
    logoSrc: string;
    quote: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, quote }) => {
    return (
        <HeaderContainer>
            <Logo src={logoSrc} alt="Logo" />
            <QuoteWrapper>
                <QuoteIcon src="/aspas.png" alt="Quotes Icon" />
                <QuoteText>{quote}</QuoteText>
            </QuoteWrapper>
        </HeaderContainer>
    );
};

export default Header;
