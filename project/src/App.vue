<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/SupabaseClient.js";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/mainsite">Post</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
