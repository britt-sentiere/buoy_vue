<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-secondary btn-lg">Large button</button>


  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Buoy!"
    };
  },
  created: function() {},
  methods: {}
};
</script>