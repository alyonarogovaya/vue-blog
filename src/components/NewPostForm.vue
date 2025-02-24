<template>
  <form class="form flex flex-col gap-4" @submit.prevent="submit">
    <label class="flex flex-col">
      <span class="font-semibold mb-1">Text</span>
      <textarea
        class="px-4 py-2 rounded-sm border bg-white"
        v-model.trim="formValues.text"
      ></textarea>
      <div class="text-red-500">{{ textError }}</div>
    </label>
    <label class="flex flex-col">
      <span class="font-semibold mb-1">Image URL</span>
      <input
        class="px-4 py-2 rounded-sm border bg-white"
        v-model.trim="formValues.imageUrl"
        type="text"
      />
      <div class="text-red-500">{{ imageUrlError }}</div>
    </label>
    <ButtonComponent type="submit">Submit</ButtonComponent>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ButtonComponent from './ui/ButtonComponent.vue'
const emit = defineEmits(['post-submit'])

const formValues = ref({
  text: '',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png',
})

const imageUrlError = computed(() => {
  return validateUrl()
})

const textError = computed(() => {
  return validateText()
})

function submit() {
  if (imageUrlError.value || textError.value) return

  emit('post-submit', formValues.value)
}

function validateUrl() {
  const regex = /(https?:\/\/.*\.(?:png|jpg))/i
  // https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png

  if (!formValues.value.imageUrl) {
    return 'The field is required'
  } else if (!formValues.value.imageUrl.match(regex)) {
    return 'The URL is invalid.'
  }

  return ''
}

function validateText() {
  if (!formValues.value.text) {
    return 'The field is required'
  }
  return ''
}

// v-model
// ref
// @input/@click/@mouseenter/@enter/@submit
// function (submit, validate, fetch, etc)
// computed calculated value
</script>
