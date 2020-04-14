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
    </div>


</template>

<script>

    import { mapState } from "vuex";

    const TIME_COUNT = 10;
    
    export default{
        name: 'WordsCraft',
        data() {
            return {
                time_countdown: TIME_COUNT,
            }
        },
        methods: {
            clickAnswer(answer_num){
                if (answer_num == 0){
                    //this.time_countdown = TIME_COUNT;
                    //this.word_num = 1;
                    //this.own_score +=10;
                    //this.word = tstData.words[this.word_num].word;
                    //this.answer = Object.assign([], this.answer, tstData.words[this.word_num].chinese);
                }
            }
        },
        computed: mapState({
            own_score       : state => state.own.score,
            own_name        : state => state.own.name,
            word_num        : state => state.question_num,
            question_amount : state => state.question_amount,
            other_name      : state => state.other.name,
            other_score     : state => state.other.score,
            word            : state => state.word.word,
            answer          : state => state.word.chinese
        }),
        mounted() {

            setInterval(()=>{
                this.time_countdown--;
                this.$store.state.own.score++;
            }, 1000)

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
