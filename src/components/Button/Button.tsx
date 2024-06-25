import React from "react";
import * as S from "./styles";
import { LinkButtonProps } from "./types";

const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    children,
    target,
    rel,
}) => {
    return (
        <S.Button href={href} target={target} rel={rel}>
            {children}
        </S.Button>
    );
};

export default LinkButton;
