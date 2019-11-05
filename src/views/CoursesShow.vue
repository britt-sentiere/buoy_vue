<template>
  <div class="courses-show">
    <h1>Help Requests: </h1>

    <!-- <button v-on:click="studentCheck()" class="btn btn-primary btn-lg btn block mt" v-bind:to="/help_requests/" + help_request.id>{{ participation.student.first_name }} {{ participation.student.last_name}} - {{ participation.student.open_help_request.formatted.created_at }} ; {{ participation.student.open_help_request.id }}</button> -->

    <!-- <router-link class="btn btn-primary" v-bind:to="'/participations/' + participation.id">{{student.first_name}}</router-link> -->

    <!-- <button v-on:click="studentCheck()" class="btn btn-primary btn-lg btn block mt" v-bind:to="'/help_requests/'" + {{}}>Student Check</button> -->

    <ul>
      <li v-for="participation in course.participations" v-bind:class="{'open-request': true, 'closed-request': false }">{{ participation.student.first_name }} {{ participation.student.last_name}} - {{ participation.student.open_help_request.formatted.created_at }} ; {{ participation.student.open_help_request.id }}</li>
    </ul>
    <ul>
      <li v-for>
        
      </li>
    </ul>
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
    studentCheck: function() {
      console.log("Student added")

      // var helpParams = {
      //   participation.student.open_help_request.id: this.participation.student.open_help_request.id
      // }
      axios
        .post("/api/help_requests/" + this.$route.params.id)
        .then(response => {
          this.help_request = response.data;
        });
    }
    }
  };
</script>

<!-- method -- passed in as arugment -- {{ participation.student.open_help_request.id }}
v-on:click triggers method
axios 
help_request_id back and fills in the completed time -->

<!-- where request (for time SQL with ? syntax) where list of help_requests are being pulled together from database -->