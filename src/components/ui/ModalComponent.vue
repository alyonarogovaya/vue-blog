<template>
  <div class="w-full max-w-3xl bg-blue-50 absolute z-[100] p-8 rounded-sm inset-x-0 mx-auto">
    <div class="flex justify-between items-center">
      <h5 v-if="title" class="text-xl mb-4 font-bold">{{ title }}</h5>
      <button @click="closeModal">Close</button>
    </div>
    <slot />
  </div>
  <div class="fixed bg-blue-950 opacity-70 w-dvw h-dvh top-0 left-0"></div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()

const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}
</script>
