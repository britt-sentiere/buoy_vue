import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Dock from '../views/Dock.vue'
// import TeacherDock from '../views/TeacherDock.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
   {path: "/", name: "home", component: Dock },
   {path: "/signup", name: "signup", component: Signup },
   {path: "/login", name: "login", component: Login },
   {path: "/dock", name: "dock", component: Dock },
   // {path: "/teacher-dock", name: "teacher-dock", component: TeacherDock },
   {path: "/logout", name: "logout", component: Logout }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


