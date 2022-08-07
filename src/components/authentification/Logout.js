import { useEffect, Fragment } from "react";
import { connect } from "react-redux";


import LoadingBar from "react-redux-loading-bar";
import { logout } from "../../actions/authentification";
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
const Logout= ({dispatch}) => {

    const handleLogout = () => {
        dispatch(logout());
                }
   
return (<MenuItem key={`Logout`} onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
        </MenuItem>);
};



export default connect(null)(Logout);