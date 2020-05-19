<template>
    <div class='resultMask' v-show="visible">
        <div class='content'>
            <div class='waiting' v-show="waiting">等待对方提交答案。。。。</div>
            <!--
            <div class='button' id="showResult" v-on:click="showResult()">显示结果</div>
            -->
            <div class='result' v-show="result">
                <div class='result'>
                    <div class="own">
                        <div id="own_name">{{own_name}}</div>
                        <div id="own_score">{{own_score}}</div>
                        <div id="own_time">{{own_time}}</div>
                    </div>
                    <div class="other">
                        <div id="other_name">{{other_name}}</div>
                        <div id="other_score">{{other_score}}</div>
                        <div id="other_time">{{other_time}}</div>
                    </div>
                </div>

                <div id="answer">{{answer}}</div>
                <div class="button">
                    <div id="hide" v-on:click="close()">开始下一题</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default{
        name: "RoundResult",
        data(){
            return {
                visible: false,
                waiting: true,
                result: false
            }
        },
        computed: mapState({
            own_name        : state => state.own.name,
            other_name      : state => state.other.name,
            own_score       : state => state.round.own_score,
            other_score     : state => state.round.other_score,
            own_time        : state => state.round.own_time,
            other_time      : state => state.round.other_time,
            answer          : state => state.round.answer,
        }),
        methods: {
            open(){
                this.visible = true;
                this.$emit("show");
            },
            close(){
                this.visible = false;
                this.waiting = true;
                this.result = false;
                this.$emit("restartWordsCraft");
                this.$emit("hide");
                console.log("22222222222", this.$store.state.question_num, this.$store.state.question_amount);
                if (this.$store.state.question_num >= this.$store.state.question_amount){
                    console.log("1111111111111111111111111");
                    this.$router.push("/");
                }
            },
            showResult(){
                console.log("333333333", this.$store.state.question_num, this.$store.state.question_amount);
                this.waiting = false
                this.result = true;
            }
        },
        mounted(){
        }

    }
</script>

<style scoped>
    div.content {
        background-color:#83BBA5;
        width: 200px;
    }
    div.result {
        width: 200px;
    }
    div.own{
        float: left;
    }
    div.other{
        float: right;
    }
	div.resultMask{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.3);
	}
    div.button {
        height:30px;
        background-color:#55B696;
        border: 2px solid #76BAAE;
        margin: 10px;
}
</style>

