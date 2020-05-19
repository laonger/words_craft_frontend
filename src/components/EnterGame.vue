<template>
    <div>
        <div class='popContainer'>
            等待其他玩家。。。。 
        </div>
    </div>
</template>

<script>
    import api from "../api/api.js"
    export default{
         name: "EnterGame",
        data() {
            return {
            }
        },
        methods: {
        },   
        mounted(){
            api.enterGame(this.$root, (jsonObj)=>{
                if (jsonObj.NeedWait) {
                    this.$once('10101', (jsonObj)=>{
                        if (jsonObj != null) {
                            this.$router.push("/game/");
                        }
                    });
                } else {
                    this.$router.push("/game/");
                }
            });
        },
    }
</script>

<style scoped>
    div.popContainer{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
    }
</style>
