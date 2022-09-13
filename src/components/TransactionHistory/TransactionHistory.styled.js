import styled from "styled-components";

export const Head = styled.thead`
    
`;

export const LineTR = styled.tr`
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.accent};
    text-align: center;
`;

export const LineTh = styled.th`
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
`;

export const Body = styled.tbody`
    
`;