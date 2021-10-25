<template>
  <div class="m-3">
    <template v-if="isUserInEbookPage">
      <client-only>
        <div
          class="
            cursor-pointer
            px-3
            font-bold
            text-yellow-300
            dark:text-yellow-500
          "
          :title="$t('buttons.headerChangeStyle')"
        >
          <template v-if="getStylesMode">
            <fa :icon="['fas', 'palette']" @click="hiddenItems" />
          </template>
          <template v-else>
            <fa :icon="['fas', 'palette']" @click="showItems" />
          </template>
        </div>
      </client-only>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GlobalChangeStyles',
  data() {
    return {
      isUserInEbookPage: false as boolean,
    }
  },
  computed: {
    getStylesMode() {
      return this.$store.getters.getStylesMode
    },
  },
  watch: {
    $route: {
      handler: 'urlStatus',
      immediate: true,
    },
  },

  methods: {
    urlStatus() {
      // eslint-disable-next-line prefer-regex-literals
      const text: RegExp = new RegExp('/ebook')
      const Url: string = process.browser ? window.location.href : ''
      const res = text.test(Url)
      if (res) {
        this.isUserInEbookPage = true
      } else {
        this.isUserInEbookPage = false
      }
    },
    showItems() {
      this.$store.dispatch('changeStyleMode', true)
    },
    hiddenItems() {
      this.$store.dispatch('changeStyleMode', false)
    },
  },
})
</script>

<style></style>
