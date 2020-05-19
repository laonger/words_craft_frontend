<template>
    <div id="words_craft">
        <div id="own">
            <div id="own_name"             > {{ own_name  }} </div >
            <div id="own_score"            > {{ own_score }} </div >
        </div>
        <div id="question">
            <div id="question_num"         > {{ word_num+1 }}/{{ question_amount      }}</div >
            <div id="time_countdown"       > Time: {{ time_countdown }} </div >

            <div id="english_word"         > {{ word }} </div >
            <div class="chinese_meaning" v-for="(a, i) of answer" :key="i" v-on:click="clickAnswer(i)"> {{ a }} </div >
        </div>
        <div id="other">
            <div id="other_name"           > {{ other_name           }} </div >
            <div id="other_score"          > {{ other_score          }} </div >
        </div>
        <RoundResult ref="RoundResult"></RoundResult>
    </div>


</template>

<script>

    import api from "../api/api.js";
    import { mapState } from "vuex";
    import RoundResult from "./RoundResult.vue";

    const TIME_COUNT = 10;
    var timer = null;
    export default{
        name: 'WordsCraft',
        components: {
            RoundResult,
        },
        data() {
            return {
                time_countdown: TIME_COUNT,
            }
        },
        methods: {
            startTimer(){
                timer = setInterval(()=>{
                    this.time_countdown--;
                    this.$store.state.own.score++;
                    if (this.time_countdown <= 0) {
                        clearInterval(timer);
                        this.timeout();
                    }
                }, 1000)
            },
            timeout(){
                this.clickAnswer(-1);
            },
            clickAnswer(answer_num){
                clearInterval(timer);
                api.commitAnswer(this.$root, ()=>{
                    this.$refs.RoundResult.showResult();
                    this.$once("restartWordsCraft", ()=>{
                        this.time_countdown = TIME_COUNT;
                        this.startTimer();
                    })
                }, String(answer_num), String(TIME_COUNT-this.time_countdown))
                this.$refs.RoundResult.open();
            }
        },
        computed: mapState({
            own_score       : state => state.own_score,
            own_name        : state => state.own.name,
            word_num        : state => state.question_num,
            question_amount : state => state.question_amount,
            other_name      : state => state.other.name,
            other_score     : state => state.other_score,
            word            : state => state.word.word,
            answer          : state => state.word.chinese
        }),
        mounted() {
            this.startTimer();
        },
        props: {
        }
    }

</script>

<style scoped>

div {
}

#own {
    float:left;
}

#question {
    width: 200px;
    float:left;
}

#english_word {
    font-size: 24pt;
}

#other {
    float:left;
}

.chinese_meaning {
    height:30px;
    background-color:#55B696;
    border: 2px solid #76BAAE;
    margin: 10px;
}

</style>
