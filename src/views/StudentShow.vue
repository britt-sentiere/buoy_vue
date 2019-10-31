
<template>
  <div class="student show">
    <h1>{{ message }}</h1>

    <h2> {{ studentId }}</h2>

    <div class="container">
      
      <form v-on:getCourses.prevent="getCourses()">
      
      <div v-for="course in participations ">
          <h2>{{ course.course_id }}</h2>
      </div>
      <input type="submit" class="btn btn-primary" value="Refresh">


    <!-- <div v-for="recipe in recipes">
            <h2>{{ recipe.title }}</h2>
            <p>Ingredients: {{ recipe.ingredients }}</p>
            <p>Directions: {{ recipe.directions }}</p> -->
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
      participations: [],
      studentId: localStorage.getItem("userId"),
      message: "Welcome to Vue.js!"

    };
  },
  methods: 
  { 
    getCourses: function() 
    {
      var params = 
      {
        student_id: localStorage.getItem("userId")
      }
      axios
        .get("api/participations", params)
        .then(response => 
        {
          participations === response.data
        })
    }
  }
 
};
</script>


<!-- contacts.map((contact) => {
   this.selectedContacts.push(contact.id);
});

Students name
classes: name/teacher
classes: name/teacher
classes: name/teacher
classes: name/teacher

type: 'Student'

find these by looping through participations for student -->


<!-- <div v-for="recipe in recipes">
        <h2>{{ recipe.title }}</h2>
        <p>Ingredients: {{ recipe.ingredients }}</p>
        <p>Directions: {{ recipe.directions }}</p> -->