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
    router.push('/mainsite')
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
    router.push('/mainsite')
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
    <h1>login page</h1>
    <div class="col-6-form-widget" id="col-6-form-widget">
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
      <div><input type="submit" class="button" id="button" @click="signup" /> signup</div>
      <div><input type="submit" class="button" id="button" @click="login" /> login</div>
    </div>
  </form>
</template>
<style lang="css">
body * {
  box-sizing: border-box;
  font-size: 110%;
  margin: 0;
  padding: 0;
}
.col-6-form-widget {
  width: 30rem;
  margin: 1rem auto;
  border-radius: 2rem;
  object-fit: cover;
  border-radius: 2rem;
  justify-content: space-around;
  margin-top: 6rem;
}
.button {
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 7px;
  background-color: #0070f3;
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}
input {
  padding: 0.5rem, 1rem;
  background: rgb(31, 32, 35);
  border: 1px solid rgb(60, 63, 68);
  border-radius: 4px;
  font-size: 2rem;
  color: rgb(247, 248, 248);
  height: 3rem;
  appearance: none;
  transition: border 0.15s ease 0s;
}
</style>
