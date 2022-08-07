import {saveQuestion,saveQuestionAnswer} from "./api";
import {formatQuestion} from "./_DATA"

describe('Check saveQuestion',  () => {
    it('will return an array of formatted questions', async () => {
        const optionOneText = "ttty";
        const optionTwoText = "hjgjhgj";
        const author = "mtsamis";
        const q = { optionOneText, optionTwoText, author };
        const result = await saveQuestion(q);
        console.log(Object.values(result).length);
        expect(Object.values(result).length).toBeGreaterThan(1);
        
    });

    it('check the result error of saveQuestion if provided argument is missing author', async () => {
        const result =  saveQuestion({ optionOneText:"ttty", optionTwoText:"hjgjhgj" });
        expect(result).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})

describe('Check saveQuestionAnswer',  () => {
    it('will return an array of formatted questions', async () => {
        const authedUser = "mtsamis";
        const qid = "6ni6ok3ym7mf1p33lnez";
        const answer = "optionOne";
        const answerOfQuestion = {authedUser, qid,answer};
        
        const result = await saveQuestionAnswer(answerOfQuestion);
        let {questions,users} = result;
        console.log(questions);
        console.log(Object.values(result).length);
        expect(Object.values(questions)).toBeDefined();
        expect(Object.values(users["mtsamis"]).length).toBeGreaterThan(1);
        
    });

    it('check the result error of saveQuestionAnswer if provided argument is missing author', async () => {
        const authedUser = "mtsamis";
        const qid = "6ni6ok3ym7mf1p33lnez";
        const result =  saveQuestionAnswer({authedUser, qid});
        expect(result).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
})
