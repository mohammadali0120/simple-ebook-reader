<template>
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
    <button type="button" class="w-full block" @click="readingMode">
      {{ $t('buttons.readingMode') }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomeEbookReadingMode',
  methods: {
    readingMode() {
      // 
    },
  },
})
</script>

<style></style>
