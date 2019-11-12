<template>
  <div class="teacher-show">
    <h1>Welcome back, {{ teacher.first_name }} !</h1>

     <div class="container">

       <div v-for="course in teacher.courses ">

        
          <router-link class="btn btn-success" v-bind:to="'/courses/' + course.id">{{ course.course_name }}</router-link>


          
           <br>
       </div>
     </div>
  </div>
</template>

<style>
.btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

<script>
  import axios from "axios";

export default {
  data: function() {
    return {
      
      teacher: {
        courses: []
      }
    };
  },
  created: function() {
    axios
      .get("/api/teachers/current")
      .then(response => {
        this.teacher = response.data;
      });
  },
  methods: {}
};
</script>