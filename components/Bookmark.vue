<template>
  <div>
    <h1>Girl Nevermind</h1>
    <b-button @click="playBookmark">Play</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    async playBookmark() {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          await this.$axios.$post('/api/play', {
            album: 'spotify:album:3aDF5TzZC6ZhPRJ1ETip4P',
            track: 'spotify:track:7rHIOIfWnCF5MTjcmiArSG',
            position_ms: 216000,
            accessToken,
          });
        } catch (e) {
          console.log('need to log in brother');
        }
      }
    },
  },
};
</script>
