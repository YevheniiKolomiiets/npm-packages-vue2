<template>
  <footer class="d-sm-flex justify-content-end p-2">
    <a href="https://github.com/YevheniiKolomiiets/npm-packages-vue2" class="d-flex align-items-center">
      GitHub
      <b-icon icon="github" class="ml-2" />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {},
};
</script>

<style lang="scss" scoped>
footer {
  padding: 10px;
  background-color: $footer-bg;
}
</style>
