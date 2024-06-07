<script setup>
import { onMounted, ref } from 'vue'
import Auth from '@/components/AuthUser.vue'
import { supabase } from '@/lib/SupabaseClient.js'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Auth />
  </div>
</template>
