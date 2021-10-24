<template>
  <div
    class="w-full h-full"
    :style="{ direction: getDirection === 'rtl' ? 'rtl' : 'ltr' }"
  >
    <layout-header />
    <div class="container pt-5 pb-12">
      <Nuxt />
    </div>
    <div class="fixed bottom-0 left-0">
      <global-toggle-theme />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {}
  },
  computed: {
    getDirection(): string {
      return this.$store.getters.getDirection
    },
  },
})
</script>

<style></style>
