<template>
  <div>
    <form action="" @submit.prevent="sendData">
      <div class="form-group mb-2">
        <input
          v-model="name"
          class="form-input"
          type="text"
          :placeholder="$t('placeholder.editorInput')"
        />
      </div>
      <div class="form-group mb-2">
        <textarea
          v-model="content"
          class="form-input"
          name=""
          :placeholder="$t('placeholder.editorTextarea')"
        ></textarea>
      </div>
      <div
        class="
          block
          w-full
          py-2
          text-center
          border-2 border-gray-100
          dark:border-gray-800
          text-black
          dark:text-white
          bg-white
          dark:bg-gray-900
          rounded-md
        "
      >
        <nuxt-link to="" class="block"> Send </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomeEditorSend',
  data() {
    return {
      name: '' as string,
      content: '' as string,
    }
  },
  methods: {
    sendData(): void {
      //
    },
  },
})
</script>

<style scoped>
textarea {
  height: calc(100vh - 230px);
}
</style>
