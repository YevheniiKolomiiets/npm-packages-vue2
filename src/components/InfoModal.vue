<template>
  <b-modal id="info-modal" :title="title" ok-only>
    <pre>{{ data }}</pre>
  </b-modal>
</template>

<script>
export default {
  name: 'InfoModal',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return this.data?.package?.name ?? '';
    },
  },
};
</script>
