<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { ref, reactive } from "vue";

import type User from "./types/User";


const user: User = reactive({
  id: 1,
  username: "pauloalmeida.eth",
  settings: [] as string[],

});

console.log(user.id);
console.log(user.setting);
</script>

<template>
  <span class="text-black">{{user.id}}</span>
  <main class="container p-10 m-auto">
    <TheHeader />
    <EntryEditor />
    <ul>
      <li>
        <EntryCard />
      </li>
    </ul>
  </main>
</template>
