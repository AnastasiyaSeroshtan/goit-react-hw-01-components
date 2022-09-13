import styled from "styled-components";

export const Line = styled.tr`
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[3]}px;
    text-align: center;
`;

export const LineTd = styled.td`
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
`;