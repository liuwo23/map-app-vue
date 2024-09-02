<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';
</script>

<template>
  <BaseLayout>
    <router-view v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.name">
          <section class="w-full bg-white px-2 py-5 md:p-10 rounded-lg md:rounded-2xl">
            <div class="flex items-center justify-center gap-10 mb-10">
              <RouterLink to="registration" class="text-gray" exact-active-class="text-primary"
                >创建帐户
              </RouterLink>
              <RouterLink to="login" class="text-gray" exact-active-class="text-primary"
                >登陆
              </RouterLink>
            </div>

            <component :is="Component"></component>
          </section>
        </div>
      </Transition>
    </router-view>
  </BaseLayout>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.5s ease-out;
}
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
