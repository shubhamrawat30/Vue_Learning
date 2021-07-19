import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
// vue.use(Router)

// export default new Router({
// routes: [
//     {path:'/',component: Home},
//     {path:'/Login',component: Login}
// ]
// })
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
        path: "/Register",
        name: "Register",
        component: Register
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;