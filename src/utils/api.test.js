import { _saveQuestion, _saveQuestionAnswer} from "./_DATA"

describe('Check _saveQuestion', () => {
    it('will return an array of formatted questions', async () => {
        const optionOneText = "ttty";
        const optionTwoText = "hjgjhgj";
        const author = "mtsamis";
        const q = { optionOneText, optionTwoText, author };
        const result = await _saveQuestion(q);
        console.log("result...xxx");
        console.log(result);
        console.log(Object.values(result).length);
        expect(Object.keys(result).length).toBeGreaterThan(1);
        expect((Object.values((result))[0]).optionOne).toBeDefined();
        expect((Object.values((result))[0]).optionTwo).toBeDefined();
        expect(Object.values(Object.values((result))[0]).length).toBeGreaterThan(0);
     });

    it('check the result error of _saveQuestion if provided argument is missing author', async () => {
        const result =  _saveQuestion({ optionOneText:"ttty", optionTwoText:"hjgjhgj" });
        expect(result).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})

describe('Check saveQuestionAnswer',  () => {
    it('will return an array of formatted questions answers', async () => {
        const authedUser = "mtsamis";
        const qid = "6ni6ok3ym7mf1p33lnez";
        const answer = "optionOne";
        const answerOfQuestion = {authedUser, qid,answer};
        const result = await  Promise.all([
            _saveQuestionAnswer(answerOfQuestion),
        ]);
       
        console.log("result....");
        console.log(result[0][0]["mtsamis"]);
      
        console.log(Object.values(result[0][0]).length);
        expect(Object.values(result[0][1])).toBeDefined();
        expect((Object.values((result[0][0]["mtsamis"]).questions)).length).toBeGreaterThan(0);
        expect(Object.keys((result[0][0]["mtsamis"]).answers).length).toBeGreaterThan(0);
        expect((result[0][0]["mtsamis"]).name).toEqual("Mike Tsamis");
    });

    it('check the result error of saveQuestionAnswer if provided argument is missing author', async () => {
        const authedUser = "mtsamis";
        const qid = "6ni6ok3ym7mf1p33lnez";
        const result =  _saveQuestionAnswer({authedUser, qid});
        expect(result).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
})
