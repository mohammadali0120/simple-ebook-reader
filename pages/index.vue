<template>
  <div>
    <div class="mb-3">
      <h1
        class="
          text-black
          dark:text-gray-200
          font-bold
          w-full
          whitespace-nowrap
          overflow-hidden overflow-ellipsis
          text-2xl
        "
      >
        {{ $t('indexPageMessages.title') }}
      </h1>
    </div>
    <div class="mb-3">
      <p
        class="
          text-black
          dark:text-gray-200
          w-full
          whitespace-nowrap
          overflow-hidden overflow-ellipsis
        "
      >
        {{ $t('indexPageMessages.body') }}
      </p>
    </div>
    <ul class="mb-3">
      <li
        v-for="(feature, index) in $t('indexPageMessages.features')"
        :key="index"
      >
        <span
          class="
            inline-block
            w-2
            h-2
            rounded-full
            bg-black
            dark:bg-gray-200
            relative
            -top-0.5
          "
        ></span>
        <span class="inline-block text-black dark:text-gray-200">
          {{ feature }}
        </span>
      </li>
    </ul>
    <div class="mb-3">
      <nuxt-link
        :to="$t('indexPageMessages.hint.link')"
        class="text-blue-500 cursor-pointer"
      >
        {{ $t('indexPageMessages.hint.value') }}
      </nuxt-link>
    </div>
    <div>
      <a
        :href="$t('indexPageMessages.gitHubLink.link')"
        target="_blank"
        class="text-blue-500 cursor-pointer"
      >
        {{ $t('indexPageMessages.gitHubLink.value') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Index',
  transition: 'fade',
})
</script>
<style scoped>
p {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  display: block;
  overflow: hidden;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  text-align: justify;
}
</style>
