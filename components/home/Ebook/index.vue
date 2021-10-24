<template>
  <div>
    <ul class="md:flex md:flex-wrap md:items-center">
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
    <br />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, error,
      porro soluta eligendi quisquam cumque ipsum, ab quia dignissimos deserunt
      vel voluptate numquam id omnis. Quos error tempore recusandae aspernatur.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomeEbook',
  computed: {
    getDirection(): string {
      return this.$store.getters.getDirection
    },
  },
})
</script>

<style lang="scss" scoped>
p {
  @apply text-black dark:text-gray-300;
  font-family: var(--font-family);
  font-size: var(--font-size);
}
</style>
