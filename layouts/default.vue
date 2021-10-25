<template>
  <div
    class="w-full h-full"
    :style="{ direction: getDirection === 'rtl' ? 'rtl' : 'ltr' }"
  >
    <layout-header v-show="!getReadingMode" />
    <div :class="!getReadingMode ? 'container pt-5 pb-12' : 'p-3'">
      <Nuxt />
    </div>
    <div class="fixed bottom-0 left-0">
      <global-toggle-theme />
    </div>
    <div class="fixed bottom-0 left-20">
      <global-change-styles />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  computed: {
    getDirection(): string {
      return this.$store.getters.getDirection
    },
    getReadingMode(): boolean {
      return this.$store.getters.getReadingMode
    },
  },
})
</script>

<style></style>
