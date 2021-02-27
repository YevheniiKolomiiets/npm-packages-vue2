<template>
  <div>
    <b-table striped hover :items="packages" :busy="loading" :fields="fields">
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

      <template #cell(actions)="data">
        <b-button size="sm" variant="info" class="mr-1" @click="handleInfoClick(data.item)">Info</b-button>
      </template>
    </b-table>
    <b-pagination
      v-if="isPaginationShown"
      v-model="currentPage"
      :total-rows="totalPackages"
      :per-page="perPage"
      align="fill"
      size="sm"
      first-number
      last-number
      @change="handlePaginationChange"
    />

    <info-modal :data="activeItem" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { PACKAGES_PER_PAGE } from '@/config';
import InfoModal from '@/components/InfoModal';
export default {
  name: 'PackagesTable',
  components: { InfoModal },
  data: () => ({
    fields: [
      { key: 'package.name', label: 'Package name' },
      { key: 'package.version', label: 'Version' },
      { key: 'package.description', label: 'Description' },
      { key: 'actions', label: '' },
    ],
    perPage: PACKAGES_PER_PAGE,
    activeItem: {},
  }),
  computed: {
    ...mapGetters({
      packages: 'packages/packages',
      packageName: 'packages/packageName',
      currentPage: 'packages/currentPage',
      totalPackages: 'packages/totalPackages',
      loading: 'packages/loading',
    }),
    isPaginationShown() {
      return !this.loading && this.totalPackages;
    },
  },
  methods: {
    ...mapActions({
      getPackages: 'packages/getPackages',
    }),
    handlePaginationChange(page) {
      this.getPackages({
        packageName: this.packageName,
        page,
        query: `?text=${this.packageName}&size=${this.perPage}&from=${(page - 1) * this.perPage}`,
      });
    },
    handleInfoClick(item) {
      this.activeItem = item;
      this.$bvModal.show('info-modal');
    },
  },
};
</script>
