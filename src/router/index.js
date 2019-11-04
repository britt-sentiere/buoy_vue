import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import StudentShow from '../views/StudentShow.vue'
import CoursesShow from '../views/CoursesShow.vue'
import CoursesIndex from '../views/CoursesIndex.vue'
import ParticipationShow from '../views/ParticipationShow.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
   {path: "/", name: "home", component: Login },
   {path: "/signup", name: "signup", component: Signup },
   {path: "/login", name: "login", component: Login },
   {path: "/students/:id", name: "studentshow", component: StudentShow },
   {path: "/courses/:id", name: "courseshow", component: CoursesShow },
   {path: "/courses", name: "coursesindex", component: CoursesIndex },
   {path: "/participations/:id", name: "participationshow", component: ParticipationShow },
   {path: "/logout", name: "logout", component: Logout }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


