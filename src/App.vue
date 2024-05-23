<template>
<HomeView/>
 <RegistrationForm @submit="console.log"/>
  <LoginForm @submit="console.log"/>
</template>
<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'

</script>
