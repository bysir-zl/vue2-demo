<template>
  <div>
    <div>
      <h1 v-loading="isLoading">{{ msg }}</h1>
      <button @click="isLoading= !isLoading">ch</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'welcome',
        isLoading: true,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #666;

  }
</style>
