<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/1');
      this.title = response.title;
    } catch (error) {
      console.error('Axios request failed:', error);
    }
  },
};
</script>
