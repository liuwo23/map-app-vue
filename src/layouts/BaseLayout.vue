<script setup lang="ts"></script>

<template>
  <section class="flex-1 flex justify-center items-center px-5 bg-primary">
    <div class="text-white max-w-[500px] w-full">
      <slot></slot>
    </div>
  </section>

  <section class="hidden md:block md:flex-1">
    <img class="h-full w-full object-cover" src="../assets/img/static-map.png" alt="" />
  </section>
</template>

<style scoped></style>
