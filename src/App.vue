<template>
  <div id="app" class="d-flex flex-column">
    <app-header />
    <homepage />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import Homepage from '@/views/Homepage';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'Header',
  components: { AppFooter, Homepage, AppHeader },
  computed: {},
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: $body-bg;
  color: $body-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
