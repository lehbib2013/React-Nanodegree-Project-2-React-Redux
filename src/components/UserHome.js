import { connect } from "react-redux";
import UnansweredQuestions from "./UnansweredQuestions";
import AnsweredQuestions from "./AnsweredQuestions";
//import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";
import { handleToggleTweet } from "../actions/questions";
import { useNavigate, Link } from "react-router-dom";
import Box, { BoxProps } from '@mui/material/Box';

const UserHome = ({authedUser,answeredQuestions,newQuestions}) => {
    return(<div>
       <Box component='h1' sx={{display: 'flex',flexDirection:'row', justifyContent: 'center', color: 'primary.secondary', fontSize: 22 }}>
       Polls of {authedUser.username}
        </Box>
       
       {(<div style={{ width: '100%' }}>
       
       <AnsweredQuestions answereds={answeredQuestions} />
       <UnansweredQuestions unanswereds={newQuestions} />
    
      </div>)}
            
        
     </div>);
}

const mapStateToProps = ({ authentification,users, questions }) => {
  console.log("authentification....");
  console.log(authentification);
  const user = users[authentification.authedUser.username];
  console.log("users");
  console.log(users);
  const arrQuestions = Object.values(questions).filter(q=>q.hasOwnProperty("id")).sort((a,b)=>(b.timestamp-a.timestamp));
  const answeredKeys = user!=null ? Object.keys(user.answers):[];

  const answeredQuestions = Object.values(arrQuestions).filter((q)=>(answeredKeys.includes(q.id)));
  console.log(answeredQuestions);
  console.log("newQuestions44");
  console.log(arrQuestions);
  const newQuestions = Object.values(arrQuestions).filter((q)=>(!answeredKeys.includes(q.id)));
  console.log("newQuestions");
  console.log([newQuestions]);
  return {
    authedUser: authentification.authedUser,
    answeredQuestions,
    newQuestions,
  };
};

export default connect(mapStateToProps)(UserHome);