<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/SupabaseClient.js'
import router from '@/router'
const go_to_main_site = async () => {
  router.push('/mainsite')
}
const posting = async () => {
  const { error } = await supabase.from('everythingelse').insert({ input: 'hehe' })
}
</script>

<style lang="scss" scoped></style>
<template>
  <div>
    <div><input type="submit" class="button" @click="go_to_main_site" /> go back</div>
    <div><input type="submit" class="button" @click="posting" /> post</div>
  </div>
</template>
