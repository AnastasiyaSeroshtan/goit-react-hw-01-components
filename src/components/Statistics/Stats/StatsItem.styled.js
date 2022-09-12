import styled from "styled-components";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
export const StatsLi = styled.li`
    /* background: ${p => p.theme.colors.secondary}; */
    background: ${getRandomHexColor};
    width: 100%;
`;

export const StatsLabel = styled.span`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    text-align: center;
    color: ${p => p.theme.colors.white};
    display: block;
`;

export const StatsPercentage = styled.span`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]}px;
    text-align: center;
    color: ${p => p.theme.colors.white};
    display: block;
`;