<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
  label: string
  placeholder?: string
  type?: string
  modelValue: string
}>()
defineOptions({
  inheritAttrs: false
})
const emit = defineEmits(['update:modelValue'])

const baseStyles =
  'w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary'

const isTextarea = computed<boolean>(() => {
  return props.type === 'textarea'
})

const inputStyles = computed<string>(() => {
  return isTextarea.value ? baseStyles + ' resize-none' : baseStyles
})
const componentName = computed<string>(() => {
  return isTextarea.value ? 'textarea' : 'input'
})
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <component
        :is="componentName"
        rows="3"
        :class="inputStyles"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>

<style scoped></style>
