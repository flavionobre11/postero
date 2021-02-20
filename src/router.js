import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from './pages/login/Login.vue'
import DashComponent from './pages/home/Dash'
import ClienteComponent from './pages/clientes/Clientes'


Vue.use(VueRouter);


const Router = new VueRouter({
    routes: [
        {path:'*', redirect: '/', meta: { title: 'Postero' }},
        {path:'/', name:'login', component: LoginComponent, meta: { title: 'Postero - Login' }},
        {path:'/dash', name:'dash', component:DashComponent, meta: { title: 'Postero - Dashboard' }},
        {path:'/clientes', name:'clientes', component: ClienteComponent, meta: { title: 'Postero - Clientes' }}
    ]
});

Router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
  })

export default Router