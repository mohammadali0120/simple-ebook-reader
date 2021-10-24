<template>
  <div class="relative" tabindex="0" @blur="closeSelectFontFamilyBox">
    <div
      :class="isOpen ? 'border-b-0 rounded-bl-none rounded-br-none' : ''"
      class="
        cursor-pointer
        w-full
        rounded-md
        border-2 border-gray-100
        dark:border-gray-800
      "
      @click="isOpen = !isOpen"
    >
      <p class="p-2 text-black dark:text-gray-200">
        {{ selectedFont.text }}
      </p>
    </div>
    <ul
      v-show="isOpen"
      class="
        absolute
        w-full
        z-10
        bg-gray-50
        dark:bg-gray-900
        rounded-md
        border-2 border-gray-100
        dark:border-gray-800
        scrollable
        h-28
        overflow-auto
      "
      :class="isOpen ? 'border-t-0 rounded-tl-none rounded-tr-none' : ''"
    >
      <li
        v-for="(item, index) in fonts"
        :key="index"
        class="
          cursor-pointer
          px-2
          py-1
          text-black
          transition-colors
          duration-300
          dark:text-gray-200
          hover:bg-gray-100
          dark:hover:bg-gray-800
        "
        :class="
          item.value === selectedFont.value
            ? 'bg-gray-100 dark:bg-gray-800'
            : ''
        "
        @click="selectFontFamily(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { SelectedItem } from '~/components/types'

export default defineComponent({
  name: 'HomeEbookChangeFontFamily',
  data() {
    return {
      isOpen: false as boolean,
      selectedFont: {
        text: 'Monospace',
        value: 'ui-monospace',
      } as SelectedItem,
      fonts: [
        {
          text: 'Roboto',
          value: 'Roboto',
        },
        {
          text: 'Sans-Serif',
          value: 'sans-serif',
        },
        {
          text: 'Monospace',
          value: 'ui-monospace',
        },
        {
          text: 'Quicksand',
          value: 'Quicksand',
        },
        {
          text: 'Oxygen',
          value: 'Oxygen',
        },
        {
          text: 'Lora',
          value: 'Lora',
        },
        {
          text: 'Pacifico',
          value: 'Pacifico',
        },
        {
          text: 'UnifrakturCook',
          value: 'UnifrakturCook',
        },
      ] as SelectedItem[],
    }
  },
  methods: {
    selectFontFamily(item: SelectedItem) {
      this.selectedFont = { text: item.text, value: item.value }
      process.browser
        ? document.documentElement.style.setProperty(
            '--font-family',
            this.selectedFont.value
          )
        : ''
      this.closeSelectFontFamilyBox()
    },
    closeSelectFontFamilyBox() {
      this.isOpen = false
    },
  },
})
</script>

<style lang="scss" scoped></style>
