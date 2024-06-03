<script setup>
import { onMounted, ref } from 'vue'
import Auth from '@/components/Auth.vue'
import { supabase } from '@/lib/SupabaseClient.js'
import { RouterLink, RouterView } from 'vue-router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Auth />
  </div>
</template>
