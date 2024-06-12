import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import SearchView from '../views/SearchView.vue'
import UploadView from '../views/UploadView.vue'


// const originalPush = VueRouter.prototyep.originalPush;
// VueRouter.prototyep.originalPush = function push(location){
//     return originalPush.call(this, location).catch(err => err);
// }


const routes = [
    {
        path : '/',
        name : 'Home',
        component: HomeView
    },
    {
        path : '/search',
        name : 'Search',
        component : SearchView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView
    },
    {
        path: '/upload',
        name: 'Upload',
        component: UploadView
    },
];
const router = new createRouter({
    history: createWebHistory(),
    routes
})
export default router