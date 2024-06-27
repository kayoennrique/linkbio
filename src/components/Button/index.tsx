import React from "react";
import * as S from "./styles";
import { LinkButtonProps } from "./types";

const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    children,
    target,
    rel,
    icon,
}) => {
    return (
        <S.Button href={href} target={target} rel={rel}>
            {icon && <span>{icon}</span>}
            {children}
        </S.Button>
    );
};

export default LinkButton;
