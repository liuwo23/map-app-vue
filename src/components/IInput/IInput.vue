<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';

const props = defineProps<{
  label: string;
  placeholder?: string;
  type?: string;
  modelValue: string;
  error: boolean;
}>();
defineOptions({
  inheritAttrs: false
});
const emit = defineEmits(['update:modelValue']);

const showPassword = ref(false);

const baseStyles =
  'w-full text-sm rounded-[4px] border-light-gray border-[1px] py-2 px-3 focus:outline-primary';

const isTextarea = computed<boolean>(() => {
  return props.type === 'textarea';
});

const inputStyles = computed<string>(() => {
  return isTextarea.value ? baseStyles + ' resize-none' : baseStyles;
});
const componentName = computed<string>(() => {
  return isTextarea.value ? 'textarea' : 'input';
});
const getType = computed(() => {
  if (props.type !== 'password') {
    return props.type;
  } else {
    if (props.type === 'password' && showPassword.value) {
      return 'text';
    }
    return 'password';
  }
});
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block relative">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <component
        :is="componentName"
        rows="3"
        :class="error ? inputStyles + ' !border-red-500' : inputStyles"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        :type="getType"
        @input="emit('update:modelValue', $event.target.value)"
      />
      <button
        type="button"
        v-if="props.type === 'password'"
        class="absolute p-2 top-[25px] right-2"
        @click="showPassword = !showPassword"
        :class="showPassword ? 'fill-accent' : 'fill-light-gray'"
      >
        <EyeIcon />
      </button>
    </label>
  </div>
</template>

<style scoped></style>
