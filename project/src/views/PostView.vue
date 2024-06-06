<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient.js'
import router from '@/router'
const go_to_main_site = async () => {
  router.push('/mainsite')
}

let texting = "";
let image = "";

const createPost = async () => {
  const postBody = texting
  if (!postBody || !image){
    alert('Enter in empty fields!')
     texting = "";
     image = "";
      return;
  }
  const {data, error } = await supabase.auth.getSession();
  if(error){
  console.log(error);
  alert(error)
  }
await supabase.from('posts').insert([{input: postBody, img: image, user_id: data.session.user.id}])
alert('You Posted! Go back to the feed to check')
texting = "";
 image = "";
 }

</script>

<style lang="scss" scoped></style>
<template>
  <div>
    <div><input type="submit" class="button" @click="go_to_main_site" /> go back</div>
    <form @submit.prevent>
      <div>
        <input class="input" required type="text" placeholder="insert what your posting" v-model="texting" >
      </div>
      <div>
        <input class="input" required type="text" placeholder="insert Image URL" v-model="image">
      </div>
      <div><input type="submit" class="button" @click="createPost" /> New Post</div>
      
    </form>
  </div>
</template>