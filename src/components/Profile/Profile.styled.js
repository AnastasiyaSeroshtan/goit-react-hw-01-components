import styled from "styled-components";

export const UserPhoto = styled.img`
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
    width: 150px;
    height: 150px;
    margin: 0 auto;

`;

export const UserName = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[5]}px;
    padding-top: ${p => p.theme.space[1]}px;
    padding-bottom: ${p => p.theme.space[1]}px;

`;

export const UserInfo = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding-top: ${p => p.theme.space[1]}px;
    padding-bottom: ${p => p.theme.space[1]}px;
`;