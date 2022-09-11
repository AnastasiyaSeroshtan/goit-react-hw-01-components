import PropTypes from 'prop-types';
import { UserPhoto, UserName, UserInfo } from './Profile.styled';

import { Box } from 'components/Box';

export const Profile = ({username, tag, location, avatar, stats}) =>{
    return (
        <Box bg="background" m="0 auto">
         <Box>
            <UserPhoto
              src={avatar}
              alt={username}
            />
            <UserName>{username}</UserName>
            <UserInfo>@{tag}</UserInfo>
            <UserInfo>{location}</UserInfo>
          </Box>
        
          <Box as="ul">
            <li>
              <span>Followers</span>
              <span>{stats.followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span>{stats.views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span>{stats.likes}</span>
            </li>
          </Box>
        </Box>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    stats:PropTypes.objectOf(PropTypes.number).isRequired,   
}