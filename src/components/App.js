import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "./Leaderboard";
import LoadingBar from "react-redux-loading-bar";
import NewQuestion from "./NewQuestion";
import UserHome from "./UserHome";
import QuestionPreview from "./QuestionPreview"
import Menu from "./Menu";
import Login from "../components/authentification/Login"
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate} from "react-router-dom";

//import users from "../reducers/users";
//import questions from "../reducers/questions";
import Notfound from "./Notfound";
import ProtectedPath from "./ProtectedPath";
const App = ({ isAuthenticated,dispatch,updateCompleted  }) => {
  
  const navigate = useNavigate();
  const redirectUrl = window.location.href.toString().split(window.location.host)[1];
  useEffect(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      return (<Login />);
    }
  console.log("handling data ....")
    dispatch(handleInitialData());
}, [isAuthenticated, dispatch]);

 if (!isAuthenticated) {
    return (<Login />);
} 

/** Idea of ProtectedPath logic is inspired from https://www.makeuseof.com/create-protected-route-in-react/ */
 
  return (
    <Fragment>
      <LoadingBar />
    
      <Box sx={{ flexGrow: 1,backgroundColor:"rose" }}>
      {updateCompleted && isAuthenticated  &&  (<div>
          <Menu />
         
          </div>
        )}
      <Routes>
            <Route path="/login"  element={<Login />} />
            <Route path="/notfound"  element={<Notfound />} />
            <Route path="/" exact element={<ProtectedPath><UserHome /></ProtectedPath>} />
            <Route path="/add" element={<ProtectedPath><NewQuestion /></ProtectedPath>} /> 
            <Route path="/leaderboard" element={<ProtectedPath><Leaderboard /></ProtectedPath>} />
            <Route path="/questions/:id" element={<ProtectedPath><QuestionPreview /></ProtectedPath>} />
            <Route path="*" element={<ProtectedPath><UserHome /></ProtectedPath>} />
      </Routes>
       
       
        </Box>
    
    </Fragment>
  );
};

const mapStateToProps = ({ authentification,users,questions }) => {
  const isAuthenticated= authentification.authedUser !== null;
  const updateCompleted = users.completed && questions.completed;
  return {
    isAuthenticated,
    updateCompleted,
  }
};

export default connect(mapStateToProps)(App);
