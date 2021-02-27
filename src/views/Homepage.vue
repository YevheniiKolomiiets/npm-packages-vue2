<template>
  <main class="p-4 flex-grow-1"><packages-table /></main>
</template>

<script>
import PackagesTable from '@/components/PackagesTable';
export default {
  name: 'Homepage',
  components: { PackagesTable },
};
</script>
