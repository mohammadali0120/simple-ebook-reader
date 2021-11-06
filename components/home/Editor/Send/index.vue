<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form action="" @submit.prevent="handleSubmit(sendData)">
        <ValidationProvider
          v-slot="{ errors }"
          name="inputs.name"
          rules="required|min:5|max:255"
        >
          <div class="form-group mb-2">
            <input
              v-model="name"
              class="form-input"
              type="text"
              :placeholder="$t('placeholder.editorInput')"
            />
          </div>
          <p v-if="errors && errors.length >= 1" class="mb-2 text-red-500">
            {{ errors[0] }}
          </p>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="inputs.content"
          rules="required|min:32"
        >
          <div class="form-group mb-2">
            <textarea
              v-model="content"
              class="form-input"
              :placeholder="$t('placeholder.editorTextarea')"
            ></textarea>
          </div>
          <p v-if="errors && errors.length >= 1" class="mb-2 text-red-500">
            {{ errors[0] }}
          </p>
        </ValidationProvider>
        <div
          class="
            block
            w-full
            py-2
            text-center
            border-2 border-gray-100
            dark:border-gray-800
            text-black
            dark:text-white
            bg-white
            dark:bg-black
            rounded-md
          "
        >
          <button class="block w-full">{{ $t('buttons.send') }}</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default defineComponent({
  name: 'HomeEditorSend',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      name: '' as string,
      content: '' as string,
    }
  },
  methods: {
    sendData(): void {
      const x = JSON.stringify({ name: this.name, content: this.content })
      process.browser ? localStorage.setItem('ebook', x as any) : ''
      const url: any = this.$route.fullPath
      const newUrl = url.substring(0, url.lastIndexOf('/'))
      setTimeout(() => {
        this.$router.push(newUrl + '/ebook')
      }, 500)
    },
  },
})
</script>

<style scoped>
textarea {
  height: calc(100vh - 230px);
}
</style>
