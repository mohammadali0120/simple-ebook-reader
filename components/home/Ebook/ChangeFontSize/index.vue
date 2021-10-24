<template>
  <div class="flex items-center text-black dark:text-gray-200">
    <button
      type="button"
      class="
        text-center
        border-2 border-gray-100
        dark:border-gray-800
        text-black
        dark:text-white
        bg-white
        dark:bg-gray-900
        rounded-md
        py-2
        w-1/3
      "
      @click="decreaseFontSize"
    >
      -
    </button>
    <span class="w-1/3 text-center">{{ fontSize + 'px' }}</span>
    <button
      type="button"
      class="
        text-center
        border-2 border-gray-100
        dark:border-gray-800
        text-black
        dark:text-white
        bg-white
        dark:bg-gray-900
        rounded-md
        py-2
        w-1/3
      "
      @click="increaseFontSize"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomeEbookChangeFontSize',
  data() {
    return {
      fontSize: 36 as number,
    }
  },
  methods: {
    increaseFontSize() {
      this.fontSize++
      process.browser
        ? document.documentElement.style.setProperty(
            '--font-size',
            this.fontSize + 'px'
          )
        : ''
    },
    decreaseFontSize() {
      this.fontSize--
      process.browser
        ? document.documentElement.style.setProperty(
            '--font-size',
            this.fontSize + 'px'
          )
        : ''
    },
  },
})
</script>

<style></style>
