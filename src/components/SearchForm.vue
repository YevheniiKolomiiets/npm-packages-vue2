<template>
  <div>
    <b-form @submit.prevent="handleFormSubmit" inline>
      <b-form-input v-model="packageName" type="text" placeholder="search all of npm" class="mr-sm-2" required />

      <b-button type="submit" variant="primary" :disabled="loading" class="mt-2 mt-sm-0">
        <b-icon v-if="loading" icon="circle-fill" animation="throb" font-scale="1" />
        Search
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { PACKAGES_PER_PAGE } from '@/config';

export default {
  name: 'SearchForm',
  data: () => ({
    packageName: '',
  }),
  computed: {
    ...mapGetters({
      loading: 'packages/loading',
    }),
  },
  methods: {
    ...mapActions({
      getPackages: 'packages/getPackages',
    }),
    handleFormSubmit() {
      this.getPackages({
        packageName: this.packageName,
        query: `?text=${this.packageName}&size=${PACKAGES_PER_PAGE}`,
      });
    },
  },
};
</script>
