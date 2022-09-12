import styled from "styled-components";

export const Title = styled.h2`
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.secondary};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    text-align: center;
    text-transform: uppercase;
`;