import axios from 'axios';

export default {
  getPackages(query) {
    const endpoint = `${process.env.VUE_APP_API_BASE}/search${query}`;
    return axios.get(endpoint);
  },
};
