<template>
  <div id="app">
    <NavbarCustom/>
    <router-view/>
    <FooterCustom/>
  </div>
</template>

<script>
import NavbarCustom from './components/NavbarCustom.vue';
import FooterCustom from './components/FooterCustom.vue';

export default {
  name: 'App',
  components: {
    NavbarCustom,
    FooterCustom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
