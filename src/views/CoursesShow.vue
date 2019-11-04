<template>
  <div class="courses-show">
    <h1>Help Requests: </h1>

    <ul>
      <li v-for="participation in course.participations" v-bind:class="{'open-request': true, 'closed-request': false }">{{ participation.student.first_name }} {{ participation.student.last_name}}</li>
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
    
    }
  };
</script>