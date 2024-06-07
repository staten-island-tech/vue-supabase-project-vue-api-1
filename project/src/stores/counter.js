import { ref } from "vue";
import { defineStore } from "pinia";

export const checkin = defineStore("store", async () => {
  const loggedin = ref(false);
  const email = ref("");

  return { loggedin, email };
});
