import { connect } from "react-redux";
import { useEffect } from "react";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";
import { handleToggleTweet } from "../actions/questions";
import { useNavigate,  } from "react-router-dom";
import QuestionWidget from "./QuestionWidget";
import Box, { BoxProps } from '@mui/material/Box';
import { Link } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
const NofFound = () => {
    const navigate = useNavigate();


    return( <div style={{ width: '100%' }}>
       
        <Box component='span' sx={{ justifyContent: 'center', color: 'primary.main', fontSize: 17 }}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Question not found
        </Typography>
        <Typography variant="h5" component="div">
          You tried to fetch a question with no available ID.
        </Typography>
        
        <Typography variant="body2">
          
          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
      <Link
                component="button"
                variant="body2"
                onClick={() => {
                    navigate('/');
                }}
                >
                Return to Home Page
                </Link>
       
      </CardActions>
    </Card>
    </Box>
       
     </div>);
}


export default connect(() => ({}))(NofFound);
