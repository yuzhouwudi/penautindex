<template>
  <div id="app">
   <heads></heads>
    <router-view/>
      <foots></foots>
  </div>
</template>

<script>
    import heads from "./components/header.vue";
    import foots from "./components/foot.vue";
export default {
  name: 'App',
    components:{
         heads,
        foots
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
