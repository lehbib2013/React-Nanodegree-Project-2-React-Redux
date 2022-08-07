
import { connect } from "react-redux";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import{ Paper }from "@mui/material";


import {handleAddQuestion} from "../actions/questions";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const NewQuestion = ({dispatch, authentification}) => {

        const navigate = useNavigate();
        const [optionA, setOptionA] = useState("");
        const [optionB, setOptionB] = useState("");
        const [error, setError] = useState(false);
         
        const handleSubmit = (e) => {
        const optionOneText = optionA;
        const optionTwoText = optionB;
        console.log({optionOneText,optionTwoText})
        e.preventDefault();
        
        if (optionA ==="" || optionB==="") {
            setError(true);
            return;
        }
       console.log("{after optionOneText,optionTwoText}");
       dispatch(handleAddQuestion({optionOneText,optionTwoText}))
       .then(()=>{ navigate('/');});
          
            };

        const handleChangeA = (e) => {
          const textOptionA = e.target.value;
          setOptionA(textOptionA);
        };

        const handleChangeB = (e) => {
          const textOptionB = e.target.value;
          setOptionB(textOptionB);
        };

  return (<div>
    
      
      <div style={{ width: '100%' ,textAlign:'center'}}>
      <Box
      sx={{
        width: '100%',
        padding:'20',
      }}
    >Create New Poll</Box>
     {error &&
                <h1 data-testid="error-happened">Error: You missed some entry fields</h1>
            }
      <Box
      sx={{
       
        width: '100%',

      }}
    >
      <TextField id="optiona" sx={{margin:5}} fullWidth label="Option One Text" inputProps={{ "data-testid": "optiona-input" }}
  value={optionA}     onChange={(event)=>{handleChangeA(event);}} />
      </Box>
      <Box
      sx={{
        width: '100%',
      }}
    >
      <TextField id="optionb" sx={{margin:5}} fullWidth={true} inputProps={{ "data-testid": "optionb-input" }}
  value={optionB}   label="Option Two Text"  onChange={(event)=>{handleChangeB(event);}} />
    </Box>
    <Box
      sx={{
        width: '100%',
      }}
    >
    <Button id="submit" data-testid="submit-button"  variant="outlined"  onClick={handleSubmit}>Add Question</Button>
    </Box>
    </div>
   
  </div>);
}

const mapStateToProps = ({ authentification }) => {
  
  return {
    currentUser:authentification.authedUser.username,
    authentification,
  };
};

export default connect(mapStateToProps)(NewQuestion);

