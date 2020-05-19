import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        is_on: false,
        own: {
            id: '',
            name: '',
            level: 0
        },
        other: {
            id: '',
            name: '',
            level: 0
        },
        round: {
            own_score: 0,
            other_score: 0,
            own_time: 0,
            other_time: 0,
            answer: "",
        },
        own_score: 0,
        other_score: 0,
        word: {
            //'word': 'apple',
            //'chinese': [
            //    '苹果',
            //    '香蕉',
            //    '李子',
            //    '梨',
            //    '没有正确答案'
            //],
        },
        room_num: 0,
        timestamp: 0,
        question_amount: 0,
        question_num: 0,
    },
    mutations: {
        login(state){
            state.is_on = true;
        },
        logout(state){
            state.is_on = false;
        },
        resetScore(state) {
            state.own_score = 0;
            state.other_score = 0;
        },
        updateOwn(state, playerObj) {
            state.own = {
                id    : playerObj.Id,
                name  : playerObj.Name,
                level : playerObj.Level
            };
        },
        updateOther(state, playerObj) {
            state.other = {
                id    : playerObj.Id,
                name  : playerObj.Name,
                level : playerObj.Level
            };
        },
        updateGame(state, gameObj) {
            state.room_num        = gameObj.RoomNum
            state.timestamp       = gameObj.Timestamp
            state.question_amount = gameObj.QuestionAmount
            state.question_num    = gameObj.Num
        },
        updateRoundResult(state, jsonObj){
            state.round.own_score = jsonObj.GetScore
            state.round.other_score = jsonObj.OtherScore
            state.round.answer = jsonObj.Answer
            state.own_score += jsonObj.GetScore
            state.other_score += jsonObj.OtherScore
            state.question_num = jsonObj.Num
        },
        updateWord(state, wordObj){
            state.word = wordObj;
        }
    }
});
