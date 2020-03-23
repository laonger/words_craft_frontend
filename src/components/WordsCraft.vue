<template>
    <div id="main">
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
    import testData from '../TestData.vue';

    const TIME_COUNT = 10;
    let word_num = 0;
    
    let tstData = testData.data();

    export default{
        name: 'WordsCraft',
        data() {
            return {
                own_name: tstData.players.own.name,
                own_score: 0,
                time_countdown: TIME_COUNT,
                word_num: word_num,
                question_amount: tstData.words.length,
                other_name: tstData.players.other.name,
                other_score: 0,
                word: tstData.words[word_num].word,
                answer: tstData.words[word_num].chinese
            }
        },
        methods: {
            clickAnswer(answer_num){
                if (answer_num == tstData.words[this.word_num].answer){
                    this.time_countdown = TIME_COUNT;
                    this.word_num = 1;
                    this.own_score +=10;
                    this.word = tstData.words[this.word_num].word;
                    this.answer = Object.assign([], this.answer, tstData.words[this.word_num].chinese);
                }
            }
        },
        mounted() {
            //this.initWebSocket();

            setInterval(()=>{
                this.time_countdown--;
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
