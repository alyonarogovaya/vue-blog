import { computed, ref } from 'vue'

export function useCounter() {
  const count = ref(0)

  const addCounter = () => {
    count.value = count.value + 1
  }

  const counter = computed(() => count.value)

  return { counter, addCounter }
}
