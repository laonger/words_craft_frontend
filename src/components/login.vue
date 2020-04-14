<template>
    <div>
        <div id='input_box'>
            <p>用户名<input type="text" v-model="user_name" name="" id="" value=""></p>
            <p>密码<input type="text" v-model="password" name="" id="" value=""></p>
        </div>
        <div id='buttons'>
            <div id='regist'>注册</div>
            <div id='login'>登录</div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Login',
        data(){
            return {
                user_name: '',
                password: ''
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
#input_box,#buttons {
    float:left;
}
#regist,#login {
    width: 200px;
    height:30px;
    background-color:#55B696;
    border: 2px solid #76BAAE;
    margin: 10px;
}
</style>
