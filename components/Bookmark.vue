<template>
  <div>
    <h1>{{ bookmarkTitle }}</h1>
    <b-button @click="playBookmark">Play</b-button>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: String,
      required: true,
    },
    track: {
      type: String,
      required: true,
    },
    bookmarkTitle: {
      type: String,
      required: true,
    },
    positionMs: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async playBookmark() {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          await this.$axios.$post('/api/play', {
            album: this.album,
            track: this.track,
            position_ms: this.positionMs,
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
