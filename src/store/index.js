import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: 0,
        own: {
            id: 'nnnn',
            name: '我',
            score: 0
        },
        other: {
            id: 'aaa',
            name: '你',
            score: 0
        },
        word: {
            'word': 'apple',
            'chinese': [
                '苹果',
                '香蕉',
                '李子',
                '梨',
                '没有正确答案'
            ],
        },
        room_num: 0,
        timestamp: 0,
        question_amount: 0,
        question_num: 0,
    },
    mutations: {
        increment(state) {
            state.own.score++;
        }
    }
});
