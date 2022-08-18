<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <Upload :addSong="addSong" />
      </div>
      <div class="col-span-2">
        <div
          class="bg-white rounded border border-gray-200 relative flex flex-col"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
              class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6"></div>
          <!-- Composition Items -->
          <CompositionItem
            v-for="(song, i) in songs"
            :key="song.docID"
            :song="song"
            :updateSong="updateSong"
            :index="i"
            :removeSong="removeSong"
            :updateUnsavedFlag="updateUnsavedFlag"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Upload, CompositionItem } from '@/components';
import { songsCollections, auth } from '@/includes/firebase';
export default {
  name: 'Manage',
  components: { Upload, CompositionItem },
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    };
  },
  methods: {
    updateSong(i, values) {
      this.songs[i].modifiedName = values.modifiedName;
      this.songs[i].genre = values.genre;
    },
    removeSong(i) {
      this.songs.splice(i, 1);
    },
    addSong(doc) {
      const song = { ...doc.data(), docID: doc.id };
      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    },
  },
  async created() {
    const snapshot = await songsCollections
      .where('uid', '==', auth.currentUser.uid)
      .get();

    snapshot.forEach(this.addSong);
  },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next();
    } else {
      const leave = confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
      next(leave);
    }
  },
};
</script>

<style></style>
