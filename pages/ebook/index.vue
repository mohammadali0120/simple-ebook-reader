<template>
  <div>
    <ul v-show="getStylesMode" class="md:flex md:flex-wrap md:items-center">
      <li class="w-1/3">
        <div :class="getDirection === 'rtl' ? 'pl-2' : 'pr-2'">
          <home-ebook-change-font-family />
        </div>
      </li>
      <li class="w-1/3">
        <div class="px-1">
          <home-ebook-change-font-size />
        </div>
      </li>
      <li class="w-1/3">
        <div :class="getDirection === 'rtl' ? 'pr-2' : 'pl-2'">
          <home-ebook-reading-mode />
        </div>
      </li>
    </ul>
    <h1 v-if="!getReadingMode" class="mb-2" :title="getEbook.name">
      {{ getEbook.name }}
    </h1>
    <p>
      {{ getEbook.content }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Ebook',
  transition: 'fade',
  computed: {
    getEbook(): any {
      return process.browser
        ? JSON.parse(localStorage.getItem('ebook') as any)
        : ''
    },
    getDirection(): string {
      return this.$store.getters.getDirection
    },
    getStylesMode(): boolean {
      return this.$store.getters.getStylesMode
    },
    getReadingMode() {
      return this.$store.getters.getReadingMode
    },
  },
})
</script>

<style lang="scss" scoped>
h1 {
  @apply text-black dark:text-gray-300 font-bold w-full whitespace-nowrap overflow-hidden overflow-ellipsis;
  font-family: var(--font-family);
  font-size: var(--font-size);
}
p {
  @apply text-black dark:text-gray-300;
  font-family: var(--font-family);
  font-size: var(--font-size);
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  display: block;
  overflow: hidden;
  hyphens: auto;
  text-align: justify;
}
</style>
