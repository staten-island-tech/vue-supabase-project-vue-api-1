<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/SupabaseClient.js'
import router from '@/router'
const loading = ref(false)
const email = ref('')
const password = ref('')
const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log('logout failed')
  } else {
    console.log('logout successful')
  }
  router.push('/')
}
const make_a_post = async () => {
  router.push('/post')
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <div><input type="submit" class="button" @click="logout" /> login out</div>
      <div><input type="submit" class="button" @click="make_a_post" /> make a post</div>
    </div>
  </form>
</template>
