<template>
  <header class="d-sm-flex justify-content-end p-2"><search-form /></header>
</template>

<script>
import SearchForm from '@/components/SearchForm';

export default {
  name: 'AppHeader',
  components: { SearchForm },
  computed: {},
};
</script>

<style lang="scss" scoped>
header {
  padding: 10px;
  background-color: $header-bg;
}
</style>
