import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import { Box } from "./Box";

export const App = () => {
  return (
    <Box bg="muted" display="flex" justifyItems="center" >
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    </Box>
  );
};
