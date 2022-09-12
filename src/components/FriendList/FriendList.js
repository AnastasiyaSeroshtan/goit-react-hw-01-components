import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <Box as="ul" bg="white" m="0 auto" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16)" borderRadius="normal" width="25%" mb={4} pt={3} pb={3}>
        { friends.map(friend => <FriendListItem key={friend.id} 
        isOnline={friend.isOnline} 
        avatar={friend.avatar} 
        name={friend.name}/>)}
        </Box>
    )
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }
        )
    )
};