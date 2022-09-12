import styled from "styled-components";

export const UserPhoto = styled.img`
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
    width: 170px;
    height: 170px;
    margin: 0 auto;

`;

export const UserName = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    margin-top: ${p => p.theme.space[4]}px;
    text-align: center;

`;

export const UserInfo = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    text-align: center;
`;

export const UserLocation = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    text-align: center;
`;

export const UserStats = styled.li`
    display: block;
`;

export const UserStatsLabel = styled.span`
    display: block;
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[1]}px;

`;

export const UserStatsQuantity = styled.span`
    display: block;
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[1]}px;
    text-align: center;
`;