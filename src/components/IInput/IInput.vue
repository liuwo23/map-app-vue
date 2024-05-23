<script setup lang="ts">
import {defineProps, } from 'vue';

const props = defineProps<{
  label: string,
  placeholder?: string
  type?:string
  modelValue: string

}>()
defineOptions({
  inheritAttrs:false
})
const emit=defineEmits(['update:modelValue'])
</script>

<template>
    <div class="w-full text-[#2C2C2C]">
      <label  class="block">
        <span class="block text-xs px-3 mb-2">{{props.label}}</span>
        <input
               class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
               v-bind="{...$props, ...$attrs}"
               :value="modelValue"
               @input="emit('update:modelValue', $event.target.value)"
        />
      </label>
    </div>
</template>

<style scoped>

</style>