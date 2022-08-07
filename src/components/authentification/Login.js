import { useEffect, Fragment,useState } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import { login,logout } from "../../actions/authentification";
import { signInAction } from "../../actions/shared";
import Leaderboard from "../Leaderboard";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const PaperStyled = styled(Box)(({ theme }) => ({
   
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: 'red 0px solid',
  }));

const Login = ({isAuthenticated,dispatch}) => {
const navigate = useNavigate();   
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const signin = (e) => {
                        e.preventDefault();
                        dispatch(login({username, password}));
                      }

const handleChangePassword =(e) => {
                        const currvalue = e.target.value;
                        setPassword(currvalue);
                    };

const handleChangeUsername =(e) => {
    const currvalue = e.target.value;
    setUsername(currvalue);
  };

return (isAuthenticated?(()=>(navigate('/'))):(
    <Box sx={{ flexGrow: 1,backgroundColor:"rose" }}>
        <Grid container flex-direction="row" border="0px" width="100wv" height="100vh" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
    <Grid container flex-direction="column" border="0px" justifyContent="center" alignItems="center" spacing={2}>
         <Grid item xs={12}>
         <CardMedia
                component="img"
                height="194"
                image="../../images/paella.jpg"
                alt="Paella dish"
             />
         </Grid>
        
        <Grid item xs={12}>
          <PaperStyled>
          <input type="text" placeholder="Enter Username" name="uname" value={username}
          onChange={handleChangeUsername} required />

          </PaperStyled>
          </Grid>
          <Grid item xs={12}>
          <PaperStyled>
          <input type="password" placeholder="Enter Password" name="psw"  onChange={handleChangePassword} value={password} required />
          </PaperStyled>
          </Grid>
          <Grid item xs={12}>
          <PaperStyled>
          <button  onClick={signin}>Login</button>
          </PaperStyled>
        </Grid>
    </Grid>
    </Grid>
    </Grid>
    </Box>
));
};

const mapStateToProps = ({ authentification }) => {
  return {
    loading: authentification.authedUser === null,
    isAuthenticated:authentification.authedUser !== null,
  }
 
};

export default connect(mapStateToProps)(Login);