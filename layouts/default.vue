<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2" class="border-right">
        <vertical-navbar />
      </b-col>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VerticalNavbar from '@/components/VerticalNavbar';
export default {
  components: {
    VerticalNavbar,
  },
};
</script>
