import { connect } from "react-redux";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box  from "@mui/material/Box";
import Grid from '@mui/material/Grid';


const UserSummary = (props) => {
            return (  <Grid key={props.id} container rowGap={{ xs: 2,}} direction="row" sx={{marginBottom:5,textAlign: 'center',justifyContent: 'center', }} spacing={{ xs: 34}} columns={{ xs: 12}}>
               
               <Grid item xs={3}  key={props.id}>
            
               <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={`${props.avatar}`} />
               </ListItemAvatar>
              
                  
                   
                   </Grid> 

                   <Grid item xs={3}>
                  
               <ListItemText key={`${props.id}`+1} primary={`  ${props.name}`} />
             
              </Grid>

              <Grid item xs={3}>
              
              Answered : <ListItemText key={`${props.id}`+2} primary={`  ${props.answered}`} />
               
               </Grid>

               <Grid item xs={3}>
               
               Unanswered :<ListItemText key={`${props.id}`+3} primary={`  ${props.created}`} />
               
               </Grid>
            
            </Grid>);
}
const mapStateToProps = ({  users,  }, { id }) => {
    const user = users[id];
    console.log("users...")
    console.log(users)
    console.log("user id")
    console.log(id)
    console.log("user current")
    console.log(user);
    const name = users[id].name;
    const avatar = users[id].avatarURL;
    
    const answered = Object.keys(user.answers).length;
    const created = Object.keys(user.questions).length;
    return {
      avatar,
      name,
      answered,
      created,
    };
  };

export default connect(mapStateToProps)(UserSummary);