import { QUESTIONS_COMPLETED,RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [action.question.id]: question,
         };
   
 
     case QUESTIONS_COMPLETED:
      return {
        ...state,
        "completed": {
          ...action.info,
        },
      };
    case SAVE_ANSWER:
      const { qid, authedUser, answer } = action;
      console.log("{ qid, authedUser, answer }");
      console.log({ qid, authedUser, answer });
      return {
        ...state,
         [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            "votes": state[qid][answer].votes.concat([authedUser])
          }
        }
      };
    default:
      return state;
  }
}
