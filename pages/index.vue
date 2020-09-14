<template>
  <div>
    <bookmark
      bookmark-title="Girl never mind.."
      :position-ms="216000"
      :track="`spotify:track:7rHIOIfWnCF5MTjcmiArSG`"
      :album="`spotify:album:3aDF5TzZC6ZhPRJ1ETip4P`"
    />
    <bookmark
      bookmark-title="Ascension"
      :position-ms="140000"
      :track="`spotify:track:3NYq7c5AIUiubPz9UZl82h`"
      :album="`spotify:album:4B2pV5Zds6478QOqA8yqdj`"
    />
    <bookmark
      bookmark-title="Aquí llego tu tiburón"
      :position-ms="153000"
      :track="`spotify:track:2DEZmgHKAvm41k4J3R2E9Y`"
      :album="`spotify:album:5lJqux7orBlA1QzyiBGti1`"
    />
    <bookmark
      bookmark-title="Más lento"
      :position-ms="175000"
      :track="`spotify:track:5mj8WVFcKdGA8p9HWGTSLc`"
      :album="`spotify:album:7CjJb2mikwAWA1V6kewFBF`"
    />
  </div>
</template>

<script>
import Bookmark from '@/components/Bookmark';

export default {
  components: {
    Bookmark,
  },
};
</script>
