<template>
  <div class="students-show">
    <br>
    <h1>Welcome back, {{ student.first_name }} !</h1>
    <br>

     <div class="container">

       <div v-for="participation in student.participations ">
        

          <router-link class="btn btn-secondary" style="text-align:center;display:block;" v-bind:to="'/participations/' + participation.id">{{ participation.course.course_name}} / {{ participation.course.teacher.last_name}}</router-link><br>

          
           <br>
       </div>
     </div>
  </div>
</template>

<style>

.students-show {
  text-align: center;
}

.btn {
  
  font-size: 25px;
}
</style>

<script>
  import axios from "axios";

export default {
  data: function() {
    return {
      
      student: {
        participations: []
      }
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