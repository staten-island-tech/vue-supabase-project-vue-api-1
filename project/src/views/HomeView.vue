<script setup>
import { onMounted, ref } from 'vue'
import Auth from '@/components/AuthUser.vue'
import { supabase } from '@/lib/SupabaseClient.js'
import { RouterLink, RouterView } from 'vue-router'
import { createPinia } from 'pinia'
const pinia = createPinia()
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Auth />
  </div>
</template>
