import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import SearchView from '../views/SearchView.vue'
import UploadView from '../views/UploadView.vue'
import store from '../store'

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
        component: UploadView,
        meta:{requiresAuth:true},
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes
})

// beforEach    
router.beforeEach((to,from,next)=>{
    if(to.matched.some((record)=>record.meta.requiresAuth)){
        if (!store.getters.isAuthenticated){
            store.dispatch('showAlert','Please login before uploading.');
            // next({name:'Login'});
            next(false);
        }else{
            next();
        }
    }else{
        next();
    }
})
export default router