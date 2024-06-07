<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/SupabaseClient.js";
import router from "@/router";
import { checkin } from "@/stores/counter";
const loading = ref(false);
const email = ref("");
const password = ref("");
const store = checkin();
const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("logout failed");
  } else {
    console.log("logout successful");
    store.loggedin = ref(false);
  }
  router.push("/");
};
const make_a_post = async () => {
  if ((store.loggedin = ref(true))) {
    router.push("/post");
  } else {
    alert("no permission");
  }
};

let feedlist = ref([]);

onMounted(async () => {
  await getdata();
  await dating();
});

async function getdata() {
  const { data, error } = await supabase.from("posts").select().order("id", { ascending: false });
  if (error) {
    console.error(error);
    alert("Unable to fetch posts");
  } else {
    feedlist.value = data;
    console.log(feedlist.value);
  }
}

let dategood = false;
let feedingdate = [];
async function dating() {
  feedingdate = feedlist.value.map((post) => {
    console.log(post.created_at);
    const createdDate = new Date(post.created_at);
    createdDate.toString();
    return createdDate;
  });
  dategood = true;
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <div><input type="submit" class="button" @click="logout" /> login out</div>
      <div><input type="submit" class="button" @click="make_a_post" /> make a post</div>
    </div>
  </form>

  <div class="feed" v-if="dategood">
    <li>
      <div v-for="(post, index) in feedlist">
        <div class="timestamp">{{ feedingdate[index] }}</div>
        <div class="text">{{ post.input }}</div>
        <img :src="post.image" alt="" />
      </div>
    </li>
  </div>
</template>

<style scoped></style>
