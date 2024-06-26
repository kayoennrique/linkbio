import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    text-align: center;
`;

const Logo = styled.img`
    max-width: 250px;
    margin-bottom: 0.005rem;
`;

const QuoteText = styled.p`
    color: #666;
    font-size: 1.5rem;
    margin-top: -2rem;

    font-family: "Playwrite NZ", cursive;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
`;

type HeaderProps = {
    logoSrc: string;
    quote: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, quote }) => {
    return (
        <HeaderContainer>
            <Logo src={logoSrc} alt="Logo" />
            <QuoteText>{quote}</QuoteText>
        </HeaderContainer>
    );
};

export default Header;
