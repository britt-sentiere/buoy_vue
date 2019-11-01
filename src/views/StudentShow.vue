<template>
  <div class="student-show">
    <h1>{{ message1 }}</h1>
    <h2> {{ student.id }}</h2>
    <h2> {{ student.first_name }}</h2>

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
      message1: "Welcome to Vue.js!"
    };
  },
  created: function() {
    axios
      .get("/api/students/" + this.$route.params.id)
      .then(response => {
        this.student = response.data;
      });
  },
  methods: {}
};
</script>