import { connect } from "react-redux";
import {AnsweredQuestions} from "./AnsweredQuestions";
//import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";
import { handleToggleTweet } from "../actions/questions";
import { useNavigate, Link } from "react-router-dom";
import QuestionWidget from "./QuestionWidget";
import Box, { BoxProps } from '@mui/material/Box';

const UnansweredQuestions = ({unanswereds}) => {
    return( <div style={{ width: '100%' }}>
        
        <Box  sx={{display: 'flex',flexDirection:'row', justifyContent: 'center', color: 'primary.main', fontSize: 17 }}>
        New Questions
        </Box>
        <Box
        sx={{
                display: 'grid',
                gap: 1,
                gridTemplateColumns: 'repeat(4, 1fr)',
                }}
                >
            {
            unanswereds.map((question)=>(
                <QuestionWidget key={question.id} question={question}  />
            ))    
            }
          
        </Box>
     </div>);
}

export default UnansweredQuestions;
