import styled from "styled-components";

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #fff -100%, #9e17ba 100%);
    color: #fff;
    text-align: center;
    padding: 1rem 24px;
    margin: 10px 0;
    border-radius: 1.5rem;
    font-size: 0.85rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
    transition: background 0.5s;
    width: 90%;
    max-width: 400px;
    font-family: "Montserrat", sans-serif;

    &:hover {
        background: linear-gradient(90deg, #000 -50%, #9e17ba 100%);
        cursor: pointer;
        color: #94bfa7;
        text-decoration: underline;
    }
`;
