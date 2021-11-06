<template>
  <div
    class="w-full h-full"
    :style="{ direction: getDirection === 'rtl' ? 'rtl' : 'ltr' }"
  >
    <layout-header v-show="!getReadingMode" />
    <div
      :class="
        !getReadingMode ? 'container md:px-0 px-3 pt-5 pb-12' : 'px-3 pt-3 pb-8'
      "
    >
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
  watch: {
    $route() {
      if (
        this.$route.name !== 'ebook___en' as any ||
        this.$route.name !== 'ebook___fa' as any
      ) {
        this.changeReadingModeStatus()
      }
    },
  },
  methods: {
    changeReadingModeStatus() {
      this.$store.dispatch('changeReadingModeStatus', false)
    },
  },
})
</script>

<style></style>
