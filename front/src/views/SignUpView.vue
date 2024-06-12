<template>
    <pageTop></pageTop>
    <div class="login-container">
        <h1>Please Sign Up</h1>
        <form @submit.prevent="signup">
            <input type="text" v-model="username" placeholder="Username" required/><br>
            <input type="password" v-model="password" placeholder="Password" required/><br>
            <button type="submit">SignUp</button>
        </form>
        <div class="sign-login-link">

            <span>已有账号？点击</span>
            <router-link to="login">登录</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import pageTop from '../components/pagetop.vue';
export default{
    name: 'SignUpView',
    components:{
        pageTop
    },
    data(){
        return {
            username : '',
            password : '',
        }
    },
    methods:{
        async SignUp(){
            try {
                const response = await axios.post('/signup',{
                    username:this.username,
                    password:this.password,
                })
                console.log(response.data);
            }catch(error){
                console.error('SignUp failed:',error);
            }
        }
    },
};
</script>
<style>
@import "../assets/css/stylesheet.min.67a6fb6e33089cb29e856bcc95d7aa39f70049a42b123105531265a0d9f1258b.css"
</style>
