<template>
  <b-media>
    <template v-slot:aside>
      <b-img
        :src="bookmark.track.imageSrc"
        :alt="`Album art for ${bookmark.track.title}`"
        width="150"
        height="150"
      />
    </template>
    <div class="d-inline-flex">
      <h2>{{ bookmark.title }}</h2>
      <b-button
        size="sm"
        class="ml-2 h-50 align-middle mt-2"
        pill
        @click="playBookmark"
      >
        <b-icon-caret-right-fill />
      </b-button>
    </div>
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
      const refreshToken = localStorage.getItem('refreshToken');
      if (accessToken) {
        try {
          const response = await this.$axios.post('/api/play', {
            album: `spotify:album:${this.bookmark.track.albumId}`,
            track: `spotify:track:${this.bookmark.track.id}`,
            position_ms: this.bookmark.positionMs,
            accessToken,
            refreshToken,
          });
          if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
          }
        } catch (e) {
          console.log('need to log in brother');
        }
      }
    },
  },
};
</script>
