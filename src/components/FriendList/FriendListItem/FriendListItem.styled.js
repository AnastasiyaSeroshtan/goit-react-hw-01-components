import styled from "styled-components";

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16);
    margin-bottom: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    
    :last-child{
        margin-bottom: ${p => p.theme.space[0]}px;
    }
`;

export const UserStatus = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: ${p => p.theme.radii.round};
    margin-right: ${p => p.theme.space[4]}px;
    background-color: ${p => p.status ? 'green' : 'red'};
`;

export const UserImg = styled.img`
    margin-right: ${p => p.theme.space[4]}px;
`;

export const UserName = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
`;