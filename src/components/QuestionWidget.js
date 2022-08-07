import { connect } from "react-redux";
//import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";
//import { handleToggleTweet } from "../actions/tweets";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QuestionWidget = ({question, currentQuestion}) => {

    const navigate = useNavigate();

    const toQuestionPreview = (e,id) => {
        e.preventDefault();
        console.log("id---");
        console.log(id);
        navigate(`/questions/${id}`);
      };

    return <Box sx={{
                  display: 'flex',
                  flexDirection:'row',
                  flexWrap: 'wrap',
                  p: 1,
                  m: 1,
                  border:2,
                  bgcolor: 'sky',
                  maxWidth: 300,
                  borderRadius: 1,
                }}>  
                {question?(<Typography component="div">
                        <Box sx={{ textAlign: 'center', m: 1 }}> {question.author} </Box>
                        <Box sx={{ textAlign: 'center', m: 1 }}> {question.id} </Box>
                        <Box sx={{ textAlign: 'center', m: 1 }}>
                        <Button onClick={(e) => toQuestionPreview(e,question.id)}>Show</Button>
                        </Box> 
            </Typography>):('no question was passed to widget')}
       </Box>;
}

const mapStateToProps = ({ authentification,users, questions },{question}) => {
  const user = users[authentification.authedUser.username];
  const currentQuestion = question;
  console.log("question");
  console.log(question);
  console.log("questions array ");
  console.log(questions);
  console.log("currentQuestion");
  console.log(currentQuestion);
  console.log(user);
  
  

  return {
    authedUser: authentification.authedUser,
    question,
  };
};

export default connect(mapStateToProps)(QuestionWidget);