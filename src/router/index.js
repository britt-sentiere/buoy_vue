import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import StudentsShow from '../views/StudentsShow.vue'
import CoursesShow from '../views/CoursesShow.vue'
import CoursesIndex from '../views/CoursesIndex.vue'
import Charts from '../views/Charts.vue'
import ParticipationsShow from '../views/ParticipationsShow.vue'
import Logout from '../views/Logout.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
   {path: "/", name: "root-path", component: Home },
   {path: "/home", name: "home", component: Home },
   {path: "/signup", name: "signup", component: Signup },
   {path: "/login", name: "login", component: Login },
   {path: "/students/:id", name: "students-show", component: StudentsShow },
   {path: "/courses/:id", name: "courses-show", component: CoursesShow },
   {path: "/courses", name: "courses-index", component: CoursesIndex },
   {path: "/charts", name: "charts", component: Charts },
   {path: "/participations/:id", name: "participations-show", component: ParticipationsShow },
   {path: "/logout", name: "logout", component: Logout }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


