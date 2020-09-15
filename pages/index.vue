<template>
  <div>
    <bookmark
      v-for="(bookmark, index) in bookmarks"
      :key="index"
      :bookmark="bookmark"
    />
  </div>
</template>

<script>
import Bookmark from '@/components/Bookmark';

export default {
  components: {
    Bookmark,
  },
  data() {
    return {
      bookmarks: [
        {
          title: 'Más lento',
          track: {
            id: '5mj8WVFcKdGA8p9HWGTSLc',
            title: 'Cuando Perriabas',
            artists: [
              {
                name: 'Bad Bunny',
                id: '4q3ewBCX7sLwd24euuV69X',
              },
            ],
            albumId: '7CjJb2mikwAWA1V6kewFBF',
            imageSrc:
              'https://i.scdn.co/image/ab67616d0000b2732fbd77033247e889cb7d2ac4',
          },
          positionMs: 175000,
        },
        {
          title: 'Girl Never Mind...',
          track: {
            id: '7rHIOIfWnCF5MTjcmiArSG',
            title: 'Ninety - Electric',
            artists: [
              {
                name: 'Jaden',
                id: '0xOeVMOz2fVg5BJY3N6akT',
              },
            ],
            albumId: '3aDF5TzZC6ZhPRJ1ETip4P',
            imageSrc:
              'https://i.scdn.co/image/ab67616d0000b273e8610dffd7d87061551ff869',
          },
          positionMs: 216000,
        },
        {
          title: 'Aquí llego tu tiburón',
          track: {
            id: '2DEZmgHKAvm41k4J3R2E9Y',
            title: 'Safaera',
            artists: [
              {
                name: 'Bad Bunny',
                id: '4q3ewBCX7sLwd24euuV69X',
              },
              {
                name: 'Jowell & Randy',
                id: '4IMAo2UQchVFyPH24PAjUs',
              },
              {
                name: 'Ñengo Flow',
                id: '12vb80Km0Ew53ABfJOepVz',
              },
            ],
            albumId: '5lJqux7orBlA1QzyiBGti1',
            imageSrc:
              'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0',
          },
          positionMs: 153000,
        },
        {
          title: 'The 6th Dimension',
          track: {
            id: '3NYq7c5AIUiubPz9UZl82h',
            title: 'PrettyGirlz',
            artists: [
              {
                name: 'WILLOW',
                id: '3rWZHrfrsPBxVy692yAIxF',
              },
            ],
            albumId: '4B2pV5Zds6478QOqA8yqdj',
            imageSrc:
              'https://i.scdn.co/image/ab67616d0000b2733e0c22d13bc9b4044e90ab9f',
          },
          positionMs: 140000,
        },
      ],
    };
  },
};
</script>
