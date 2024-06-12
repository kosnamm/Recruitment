<template>
    <pageTop></pageTop>
    <div class="login-container">
    <h1>Welcome</h1>
    <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required /><br>
        <input type="password" v-model="password" placeholder="Password" required /><br>
        <button type="submit">Login</button>
    </form>
    <div class="sign-login-link">
        <span>没有账号？马上</span>
        <router-link to="signup">注册</router-link>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
import pageTop from '../components/pagetop.vue'
export default {
    name: 'LoginView',
    components: {
        pageTop
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('/login', {
                    username: this.username,
                    password: this.password,
                })
                console.log(response.data);
            } catch (error) {
                console.error('Login failed:', error);
            }
        }
    },
};
</script>
<style>
@import "../assets/css/stylesheet.min.67a6fb6e33089cb29e856bcc95d7aa39f70049a42b123105531265a0d9f1258b.css";
</style>
