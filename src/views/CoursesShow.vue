<template>
  <div class="courses-show">
    <h1>Help Requests: </h1>

    <button v-for="participation in course.participations" v-on:click="completeRequest(participation.student.open_help_request.id)" class="btn btn-primary btn-lg block m-2" >{{ participation.student.first_name }} {{ participation.student.last_name}} - {{ participation.student.open_help_request.formatted.created_at }}</button>

 
  </div>
</template>

<style>

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      student: {},
      course: {
        participations: []
          }
  
    };
  },
  created: function() {
    axios 
      .get("/api/courses/" + this.$route.params.id)
      .then(response => {
        this.course = response.data;
      });
  },
  methods: {
    completeRequest: function(requestId) {
      axios
        .patch("/api/help_requests/" + requestId + "/complete")
        .then(response => {
          console.log("Help Request completed");
          this.course = response.data;
        });
    }
    }
  };
</script>



<!-- where request (for time SQL with ? syntax) where list of help_requests are being pulled together from database -->