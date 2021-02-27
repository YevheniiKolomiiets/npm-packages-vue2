import PackagesApi from '@/services/api/packages.api';

const state = {
  packages: [],
  packageName: '',
  totalPackages: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

const getters = {
  packages: (state) => state.packages,
  packageName: (state) => state.packageName,
  totalPackages: (state) => state.totalPackages,
  currentPage: (state) => state.currentPage,
  loading: (state) => state.loading,
  error: (state) => state.error,
};

const mutations = {
  setPackages(state, payload) {
    state.packages = payload;
  },
  setPackageName(state, payload) {
    state.packageName = payload;
  },
  setTotalPackages(state, payload) {
    state.totalPackages = payload;
  },
  setCurrentPage(state, payload) {
    state.currentPage = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
};

const actions = {
  async getPackages({ commit }, { packageName, page = 1, query }) {
    try {
      commit('setPackages', []);
      commit('setPackageName', '');
      commit('setTotalPackages', 0);
      commit('setCurrentPage', 1);
      commit('setLoading', true);
      commit('setError', null);

      const response = await PackagesApi.getPackages(query);

      commit('setPackages', response.data.objects);
      commit('setPackageName', packageName);
      commit('setTotalPackages', response.data.total);
      commit('setCurrentPage', page);
      commit('setLoading', false);

      return response.data;
    } catch (error) {
      commit('setLoading', false);
      commit('setError', error);

      console.error(error);

      throw error;
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
