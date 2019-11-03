<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/students">Student Show</router-link> |
      <router-link to="/participation">Participation Show</router-link> |
      <router-link to="/courses">Courses Show</router-link> |
      <router-link to="/teachers">Teacher Show</router-link> |
      <router-link to="/logout">Logout</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
