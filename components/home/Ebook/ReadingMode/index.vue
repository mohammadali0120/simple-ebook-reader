<template>
  <div
    class="
      block
      w-full
      py-2
      text-center
      border-4 border-gray-100
      dark:border-gray-800
      text-black
      dark:text-white
      bg-transparent
      dark:bg-black
      rounded-md
    "
  >
    <template v-if="getReadingMode">
      <button type="button" class="w-full block" @click="disableReadingMode">
        {{ $t('buttons.disableReadingMode') }}
      </button>
    </template>
    <template v-else>
      <button type="button" class="w-full block" @click="enableReadingMode">
        {{ $t('buttons.enableReadingMode') }}
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomeEbookReadingMode',
  data() {
    return {
      status: false as boolean,
    }
  },
  computed: {
    getReadingMode() {
      return this.$store.getters.getReadingMode
    },
  },
  methods: {
    enableReadingMode() {
      this.$store.dispatch('changeReadingModeStatus', true)
    },
    disableReadingMode() {
      this.$store.dispatch('changeReadingModeStatus', false)
    },
  },
})
</script>

<style></style>
