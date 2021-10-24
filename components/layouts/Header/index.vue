<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="container">
      <div class="relative md:flex md:flex-wrap">
        <ul class="md:flex md:flex-wrap md:justify-center">
          <li
            v-for="(item, index) in $t('headerItems')"
            :key="index"
            class="p-3 font-bold text-black dark:text-gray-200"
          >
            <nuxt-link :to="item.link">{{ item.value }}</nuxt-link>
          </li>
        </ul>
        <div
          class="p-3"
          :class="
            getLanguageLocalesData.direction === 'rtl' ? 'mr-auto' : 'ml-auto'
          "
        >
          <ul class="md:flex md:items-center">
            <client-only>
              <li
                v-if="isUserInEbookPage"
                class="
                  cursor-pointer
                  px-3
                  font-bold
                  text-yellow-300
                  dark:text-yellow-500
                "
                :title="$t('buttons.headerChangeStyle')"
              >
                <fa :icon="['fas', 'palette']" class="" />
              </li>
            </client-only>
            <li
              class="px-3 font-bold text-black dark:text-gray-200"
              @click="isLanguagesVisible = !isLanguagesVisible"
            >
              <nuxt-link :to="switchLocalePath(selectedLanguage.value)">
                {{ selectedLanguage.value }}
              </nuxt-link>
            </li>
          </ul>
          <ul
            class="md:absolute md:shadow bg-white dark:bg-gray-800 top-12"
            :class="[
              !isLanguagesVisible ? 'hidden' : 'block',
              getLanguageLocalesData.direction === 'rtl' ? 'left-2' : 'right-2',
            ]"
          >
            <li
              v-for="(lang, index) in languages"
              :key="index"
              class="px-5 font-bold text-black dark:text-gray-200"
            >
              <nuxt-link
                :to="switchLocalePath(lang.value)"
                @click.native="changeSelectedLanguage(lang)"
                >{{ lang.value }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { SelectedLanguage } from '~/components/types'

export default defineComponent({
  name: 'LayoutsHeader',
  data() {
    return {
      languages: [
        { value: 'fa', link: '/' },
        { value: 'en', link: '/en' },
      ] as SelectedLanguage[],
      selectedLanguage: { value: '', link: '' } as SelectedLanguage,
      isLanguagesVisible: false as boolean,
      isUserInEbookPage: false as boolean,
    }
  },
  computed: {
    getLanguageLocalesData(): any {
      return (this.$i18n.locales as any[]).find(
        (i: any) => i.code === this.$i18n.locale
      )
    },
  },
  watch: {
    $route: {
      handler: 'urlStatus',
      immediate: true,
    },
  },
  mounted() {
    this.selectedLanguage.value = this.getLanguageLocalesData.code
    this.selectedLanguage.link = '/' + this.getLanguageLocalesData.code
    this.$store.dispatch(
      'changeDirection',
      this.getLanguageLocalesData.direction
    )
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
    changeSelectedLanguage(language: SelectedLanguage): void {
      this.selectedLanguage.value = language.value
      this.selectedLanguage.link = language.link
      this.isLanguagesVisible = false
      this.$store.dispatch(
        'changeDirection',
        this.getLanguageLocalesData.direction
      )
    },
  },
})
</script>

<style></style>
