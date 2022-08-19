import { useNavigate} from "react-router-dom";
import {connect} from "react-redux";

const ProtectedPath = ({children, isAuthenticated}) => {

    const navigate = useNavigate();
    const hosteName = window.location.host;
    const currentUrl= window.location.href;
    const pathArray=currentUrl.toString().split(hosteName);
    console.log("kkkkkk.....");
    console.log(currentUrl.toString());
    console.log(hosteName);
    console.log(pathArray[1]);
    return isAuthenticated ? children : (navigate(`/login?urlTo=${pathArray[1]}`));
};

const mapStateToProps = ({ authentification, }) => {
    const isAuthenticated= authentification.authedUser !== null;
    return {
      isAuthenticated,
    }
  };
export default connect(mapStateToProps)(ProtectedPath);