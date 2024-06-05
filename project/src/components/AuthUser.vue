<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/SupabaseClient.js'
import router from '@/router'
const loading = ref(false)
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) throw error
    router.push('/account')
  } catch (error) {
    if (error instanceof Error) {
      alert('error ')
    }
  } finally {
    loading.value = false
  }
}
const signup = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (error) throw error
    router.push('/account')
  } catch (error) {
    if (error instanceof Error) {
      alert('error')
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
