<template>
  <b-media>
    <template v-slot:aside>
      <b-img
        :src="bookmark.track.imageSrc"
        :alt="`Album art for ${bookmark.track.title}`"
        width="250"
        height="250"
      />
    </template>
    <h1>{{ bookmark.title }}</h1>
    <p>
      on
      <a
        target="blank"
        :href="`https://open.spotify.com/track/${bookmark.track.id}`"
        >{{ bookmark.track.title }}</a
      >
    </p>
    <p>
      by
      <span
        v-for="(artist, index) in bookmark.track.artists"
        :key="artist.id"
        target="blank"
      >
        <span v-if="index !== 0">,</span>
        <a
          target="blank"
          :href="`https://open.spotify.com/artist/${artist.id}`"
        >
          {{ artist.name }}
        </a>
      </span>
    </p>
    <b-button @click="playBookmark">Play</b-button>
  </b-media>
</template>

<script>
export default {
  props: {
    bookmark: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async playBookmark() {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          await this.$axios.$post('/api/play', {
            album: `spotify:album:${this.bookmark.track.albumId}`,
            track: `spotify:track:${this.bookmark.track.id}`,
            position_ms: this.bookmark.positionMs,
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
