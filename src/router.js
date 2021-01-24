import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from './pages/login/Login.vue'
import DashComponent from './pages/home/Dash'
import ClienteComponent from './pages/clientes/Clientes'


Vue.use(VueRouter);


const Router = new VueRouter({
    routes: [
        {path:'*', redirect: '/'},
        {path:'/', name:'login', component: LoginComponent},
        {path:'/dash', name:'dash', component:DashComponent},
        {path:'/clientes', name:'clientes', component: ClienteComponent}
    ]
});

export default Router