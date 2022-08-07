import { connect } from "react-redux";
import UserList from "./UserList";

const Leaderboard = ({usersKeys}) => {
  return (
    <div>
      <h1>Leader Page</h1>
      {usersKeys.length>0?(<div data-testid="users-list" ><UserList usersKeys={usersKeys} /></div>):(<div data-testid="empty-list">There are no users</div>)}

    </div>
  );
};

const mapStateToProps = ({ users }) => {

  const usersArr = Object.values(users).filter(q=>q.hasOwnProperty("id"));
  console.log("usersArr");
  console.log(usersArr);
  const usersK = usersArr.sort(
    (a, b) => a.id - b.id  
        );
    console.log("jjjj...");
    console.log(usersK);
    const usersKeys = usersK.map((el)=>{ return el.id});
  return {
    usersKeys,
  }

};

export default connect(mapStateToProps)(Leaderboard);
