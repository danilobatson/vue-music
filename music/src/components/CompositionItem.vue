<template>
  <div class="border border-gray-200 p-3 mb-4 rounded">
    <div
      class="text-white text-center font-bold p-4 mb-4"
      v-if="showAlert"
      :class="alertVariant"
    >
      {{ alertMsg }}
    </div>
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ song.modifiedName }}</h4>
      <button
        @click.prevent="deleteSong"
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
      >
        <i class="fa fa-times"></i>
      </button>
      <button
        @click.prevent="showForm = !showForm"
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
    <div v-show="showForm">
      <vee-form
        :validation-schema="schema"
        :initial-values="song"
        @submit="edit"
      >
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <vee-field
            @input="updateUnsavedFlag(true)"
            name="modifiedName"
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Song Title"
          />
          <ErrorMessage class="text-red-600" name="modifiedName" />
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <vee-field
            @input="updateUnsavedFlag(true)"
            name="genre"
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Genre"
          />
          <ErrorMessage class="text-red-600" name="genre" />
        </div>
        <button
          type="submit"
          class="py-1.5 px-3 rounded text-white bg-green-600"
          :disabled="inSubmission"
        >
          Submit
        </button>
        <button
          type="button"
          class="py-1.5 px-3 rounded text-white bg-gray-600"
          :disabled="inSubmission"
          @click.prevent="showForm = false"
        >
          Go Back
        </button>
      </vee-form>
    </div>
  </div>
</template>

<script>
import { songsCollections, storage } from '@/includes/firebase';

export default {
  name: 'CompositionItem',
  data() {
    return {
      showForm: false,
      schema: {
        modifiedName: 'required',
        genre: 'alphaSpaces',
      },
      inSubmission: false,
      showAlert: false,
      alertVariant: 'bg-blue-500',
      alertMsg: 'Please wait. Uploading song info',
    };
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
    updateSong: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    removeSong: {
      type: Function,
      required: true,
    },
    updateUnsavedFlag: {
      type: Function,
    },
  },
  methods: {
    async deleteSong() {
      const storageRef = storage.ref();
      const songRef = storageRef.child(`songs/${this.song.originalName}`);

      await songRef.delete();

      await songsCollections.doc(this.song.docID).delete();

      this.removeSong(this.index);
    },

    async edit(values) {
      this.inSubmission = true;
      this.alertVariant = 'bg-blue-500';
      this.alertMsg = 'Please wait. Uploading song info';

      try {
        await songsCollections.doc(this.song.docID).update(values);
      } catch (err) {
        this.inSubmission = false;
        this.alertVariant = 'bg-red-500';
        this.alertMsg = err.message;
        return;
      }

      this.updateSong(this.index, values);

      this.inSubmission = false;
      this.alertVariant = 'bg-green-500';
      this.alertMsg = 'Success';
      this.showAlert = true;
      this.showForm = false;
      this.updateUnsavedFlag(false);
    },
  },
};
</script>
