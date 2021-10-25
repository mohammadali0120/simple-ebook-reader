<template>
  <div
    class="
      cursor-pointer
      m-3
      w-16
      h-7
      rounded-2xl
      bg-gray-900
      flex
      items-center
      direction-rtl
    "
    @click="switchTheme"
  >
    <div
      class="
        relative
        transform
        w-6
        h-6
        mx-1
        translate-x-0
        rounded-full
        duration-500
        transition-all
        direction-rtl
      "
      :class="[
        !toggle ? '-translate-x-8' : '',
        !toggle ? 'text-yellow-300' : 'text-gray-100',
      ]"
    >
      <light-icon v-show="!toggle" />
      <dark-icon v-show="toggle" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LightIcon from '~/assets/icons/light.svg?inline'
import DarkIcon from '~/assets/icons/dark.svg?inline'

export default defineComponent({
  name: 'GlobalToggleTheme',
  components: {
    LightIcon,
    DarkIcon,
  },
  data() {
    return {
      toggle: false as boolean,
      currentTheme: process.browser ? localStorage.getItem('theme') : '',
    }
  },

  mounted() {
    process.browser
      ? document.documentElement.classList.add(this.currentTheme!)
      : ''
    if (this.currentTheme === 'dark') {
      this.toggle = true
    } else {
      this.toggle = false
    }
  },
  methods: {
    switchTheme(): void {
      this.toggle = !this.toggle
      if (
        this.toggle === true ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        process.browser ? document.documentElement.classList.add('dark') : ''

        process.browser ? localStorage.setItem('theme', 'dark') : ''
      } else {
        process.browser
          ? document.documentElement.classList.replace('dark', 'light')
          : ''
        process.browser ? localStorage.setItem('theme', 'light') : ''
      }
    },
  },
})
</script>
