import PropTypes from 'prop-types';
import { UserPhoto, UserName, UserInfo, UserLocation, UserStats, UserStatsLabel, UserStatsQuantity } from './Profile.styled';

import { Box } from 'components/Box';

export const Profile = ({username, tag, location, avatar, stats}) =>{
    return (
        <Box bg="white" m="0 auto" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16)" borderRadius="normal" width="25%" >
         <Box  pt={4} pb={4}  >
            <UserPhoto
              src={avatar}
              alt={username}
            />
            <UserName>{username}</UserName>
            <UserInfo>@{tag}</UserInfo>
            <UserLocation>{location}</UserLocation>
          </Box>
        
          <Box as="ul" display="flex" justifyContent="space-around" bg="lightGray" pt={3} pb={3}>
            <UserStats>
              <UserStatsLabel>Followers</UserStatsLabel>
              <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
            </UserStats>
            <UserStats>
              <UserStatsLabel>Views</UserStatsLabel>
              <UserStatsQuantity>{stats.views}</UserStatsQuantity>
            </UserStats>
            <UserStats>
              <UserStatsLabel>Likes</UserStatsLabel>
              <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
            </UserStats>
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