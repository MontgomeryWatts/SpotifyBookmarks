<template>
  <b-container>
    <b-row class="text-center">
      <b-col>
        <b-button class="my-2" @click="authorize"> Login to Spotify </b-button>
        <b-button class="my-2"> My Bookmarks </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    async authorize() {
      try {
        const authorizeUrl = await this.$axios.$get('/api/authorizeUrl');
        window.location.href = authorizeUrl;
      } catch (e) {}
    },
  },
};
</script>
