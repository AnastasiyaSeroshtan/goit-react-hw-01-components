import PropTypes from 'prop-types';
import { FriendItem, UserName, UserImg, UserStatus } from './FriendListItem.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <FriendItem>
            <UserStatus status={isOnline}></UserStatus>
            <UserImg src={avatar} alt={name} width="48" />
            <UserName>{name}</UserName>
        </FriendItem>
    )
}

FriendListItem.prototype = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

