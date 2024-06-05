<template>
  <div class="Account">
    <h1>This is a main view page</h1>
    <Auth />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Auth from '@/components/MainSite.vue'
import { supabase } from '@/lib/SupabaseClient.js'
import { RouterLink, RouterView } from 'vue-router'
import { createPinia } from 'pinia'
const pinia = createPinia()
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
