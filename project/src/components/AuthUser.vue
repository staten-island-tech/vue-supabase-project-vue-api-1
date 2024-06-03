<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/SupabaseClient.js'

const loading = ref(false)
const email = ref('')
const password = ref('')
const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
}
const signup = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert('error password too short 6 or more letters')
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          class="inputField"
          required
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div><input type="submit" class="button" @click="signup" /> signup</div>
      <div><input type="submit" class="button" @click="login" /> login</div>
    </div>
  </form>
</template>
