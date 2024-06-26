import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: transparent;
    color: white;
    padding: 10px;
    text-align: center;
    bottom: 0;
    width: 100%;
`;

export const TextLink = styled.p`
    color: white;
    font-weight: bold;
`;

export const Link = styled.a`
    color: white;
    font-weight: bold;
    text-decoration: underline;
    font-family: "Montserrat", sans-serif;
    &:hover {
        color: #6b02c9;
    }
`;
