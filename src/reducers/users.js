import { USERS_COMPLETED,RECEIVE_USERS } from "../actions/users";
import { SAVE_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
        
      };
    case SAVE_ANSWER:
        const { authedUser, qid, answer } = action;
        return {
          ...state,
          [authedUser]: {
            ...users[authedUser],
            "answers": {
              ...state[authedUser].answers,
              [qid]: answer
                       }
                       }
        };
        case USERS_COMPLETED:
          return {
            ...state,
            "completed": {
              ...action.info,
            },
          };
    default:
      return state;
  }
}
