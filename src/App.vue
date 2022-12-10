<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { ref, reactive } from "vue";

import type User from "./types/User";
import type Emoji from "./types/Emoji";

defineEmits<{
  (e: "@create", entry: { text: string; emoji: Emoji | null }): void;
}>();

const user: User = reactive({
  id: 1,
  username: "pauloalmeida.eth",
  settings: [] as string[],

});

console.log(user.id);
console.log(user.setting);

const handleCreateEntry = (entry: { text: string; emoji: Emoji | null }) => {
  console.log(entry);
};

</script>

<template>
  <span class="text-black">{{user.id}}</span>
  <main class="container p-10 m-auto">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry" />
    <ul>
      <li>
        <EntryCard />
      </li>
    </ul>
  </main>
</template>
