<template>
  <div
    class="w-full max-w-3xl bg-blue-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] p-8 rounded-sm h-fit"
  >
    <div class="flex justify-between items-center">
      <h5 v-if="title" class="text-xl mb-4 font-bold">{{ title }}</h5>
      <button @click="closeModal" class="p-1 mt-[-16px]">
        <CloseIcon />
      </button>
    </div>
    <slot />
  </div>
  <div class="fixed bg-blue-950 opacity-70 w-dvw h-dvh top-0 left-0"></div>
</template>

<script setup lang="ts">
import CloseIcon from '../icons/CloseIcon.vue'

defineProps<{
  title?: string
}>()

const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}
</script>
