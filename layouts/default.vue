<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/"> Home </b-navbar-brand>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col cols="2" class="border-right">
          <b-container>
            <b-row>
              <b-col>
                <b-nav vertical>
                  <b-nav-item @click="authorize">Login to Spotify</b-nav-item>
                  <b-nav-item>My Bookmarks</b-nav-item>
                  <b-nav-item
                    to="/create"
                    :disabled="this.$route.path === '/create'"
                    >Create Bookmark</b-nav-item
                  >
                </b-nav>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col>
          <Nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
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
