<template>
  <div>
    <label for="username">input username</label>
    <input type="text" name="username" class="username" />
    <label for="password">input password</label>
    <input type="text" name="password" class="password" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient.js'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
