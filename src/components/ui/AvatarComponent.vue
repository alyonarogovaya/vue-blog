<template>
  <div
    :class="[
      'rounded-full flex justify-center items-center text-black border-2 border-black bg-gray-300',
      sizeClasses,
      styles,
    ]"
  >
    AR
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size?: 'sm' | 'lg'
  styles?: string
}>()

const sizeClasses = computed(() => {
  const sizes: Record<'sm' | 'lg', string> = {
    sm: 'text-sm w-12 h-12',
    lg: 'text-4xl w-32 h-32',
  }
  return sizes[props.size || 'sm']
})
</script>
