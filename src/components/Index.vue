<template>
    <div id='index'>
        <router-link to='/game/'><div id="enter_name">进入游戏</div></router-link>
    </div>
</template>

<script>
    export default{
        name: 'Index',
        methods: {
        }
    }
</script>

<style scoped>
#enter_name {
    width: 200px;
    height:30px;
    background-color:#55B696;
    border: 2px solid #76BAAE;
    margin: 10px;
    float:left;
}

</style>
