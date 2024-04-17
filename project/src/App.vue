<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient.js'
import { RouterLink, RouterView } from 'vue-router'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
