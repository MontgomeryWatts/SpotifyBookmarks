<template>
  <div class="container">
    <b-button :href="authorizeUrl"> Login </b-button>
    <bookmark />
  </div>
</template>

<script>
import Bookmark from '@/components/Bookmark';

export default {
  components: {
    Bookmark,
  },
  async asyncData({ $axios }) {
    try {
      const authorizeUrl = await $axios.$get('/api/authorizeUrl');
      return {
        authorizeUrl,
      };
    } catch (e) {
      return {
        authorizeUrl: '',
      };
    }
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
