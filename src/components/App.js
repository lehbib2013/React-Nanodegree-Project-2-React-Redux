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
import { Routes, Route } from "react-router-dom";
//import users from "../reducers/users";
//import questions from "../reducers/questions";

const App = ({ isAuthenticated,dispatch,updateCompleted  }) => {

  useEffect(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        return;
    }
  console.log("handling data ....")
    dispatch(handleInitialData());
}, [isAuthenticated, dispatch]);

if (!isAuthenticated) {
    return (<Login />);
}


 
  return (
    <Fragment>
      <LoadingBar />
    
      <Box sx={{ flexGrow: 1,backgroundColor:"rose" }}>
        {updateCompleted && isAuthenticated  ?  (<div>
          <Menu />
          <Routes>
            <Route path="/" exact element={<UserHome />} />
            <Route path="/add" element={<NewQuestion />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/questions/:id" element={<QuestionPreview />} />
            
          </Routes>
          </div>
        ):null}
       
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
