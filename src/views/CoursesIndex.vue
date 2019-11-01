<template>
  <div class="courses-show">
    <h1>{{ message }}</h1>
    <h2> {{ teacher.id }}</h2>
    <h2> {{ course.course_name }}</h2>

     <div class="container">

       <div v-for="participation in student.participations ">
        

          <router-link class="btn btn-success" v-bind:to="'/participations/' + participation.id">{{ participation.course.course_name}} / {{ participation.course.teacher.last_name}}</router-link>

          
           <br>
       </div>
     </div>
  </div>
</template>

<style>
</style>

<script>
  import axios from "axios";

export default {
  data: function() {
    return {
      
      student: {
        participations: []
      },
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {
    axios
      .get("/api/students/" + this.$route.params.id)
      .then(response => {
        this.student = response.data;
      });

    // axios
    //   .get("/api/participations")
    //   .then(response => {
    //     this.participations === response.data
    //   });
  },
  methods: {}
};
</script>

<!-- 
<template>
  <div class="student show">
    <h1>{{ message }}</h1>

    <h2> {{ teacherId}}</h2>
    <h2> {{ courseName}}</h2>
    

    <div class="container">
      
      <form v-on:getCourses.prevent="getCourses()">
      
      <div v-for="course in courses ">
          <p>{{ course.teacherId }}</p>
          
          <input type="submit" class="btn btn-primary" value=course.teacher_id>
      </div>

      <input type="submit" class="btn btn-primary" value="Refresh">
      </form>
    </div>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";
export default {
  data: function() {
    return {
      participations: {},
      teacherId: localStorage.getItem("userId"),
      teacherFirstName: localStorage.getItem("userFirstName"),
      teacherLastName: localStorage.getItem("userLastName"),

      message: `Welcome back, ${localStorage.getItem("userFirstName")} ${localStorage.getItem("userLastName")}`

    };
  },
  created: function() 
  {
    var params = 
    {
      teacher_id: localStorage.getItem("userId")
    }
    axios
      .get("api/participations", params)
      .then(response => 
      {
        this.participations = response.data;
      })

  },
  methods: 
  { 
    getCourses: function() 
    {
    
      
    }
  }
 
};
</script> -->
<!-- By current_user
type: 'Teacher'

loop courses for teacher -->