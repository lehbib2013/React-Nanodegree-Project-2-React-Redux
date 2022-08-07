import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UserSummary from "../components/UserSummary";
import Box  from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
const UserList = (props)=>{
    return (
      <div>
        
      {props.usersKeys.map((ukey) => (
        <Box sx={{ border: 1,marginBottom:1, }}>
          <UserSummary id={ukey} />
        </Box>
           
        ))}
    </div> );

}
export default UserList;