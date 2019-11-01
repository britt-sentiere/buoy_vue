import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import StudentShow from '../views/StudentShow.vue'
import CoursesIndex from '../views/CoursesIndex.vue'
import TeacherShow from '../views/TeacherShow.vue'
import Dock from '../views/Dock.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
   {path: "/", name: "home", component: Dock },
   {path: "/signup", name: "signup", component: Signup },
   {path: "/login", name: "login", component: Login },
   {path: "/students/:id", name: "studentshow", component: StudentShow },
   {path: "/courses", name: "courseindex", component: CoursesIndex },
   {path: "/teachers/:id", name: "teachershow", component: TeacherShow },
   {path: "/dock", name: "dock", component: Dock },
   {path: "/logout", name: "logout", component: Logout }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


