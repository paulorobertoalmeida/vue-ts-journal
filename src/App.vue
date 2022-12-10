<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { reactive, provide, inject } from "vue";
import type { InjectionKey } from "vue";

import type User from "./types/User";
// import type Emoji from "./types/Emoji";
import type Entry from "./types/Entry";

const entries: Entry[] = reactive([]); // Each type inside the array will be an "entries"

const userInjectionKey = Symbol() as InjectionKey<User>;

const user: User = reactive({
  id: 1,
  username: "pauloalmeida.eth",
  settings: [] as string[],
});
provide(userInjectionKey, user);

const injectedUser = inject(userInjectionKey);
console.log(user.id);
console.log(user.setting);

const handleCreateEntry = (entry: Entry) => {
  entries.unshift(entry);
  console.log(entry);
};
</script>

<template>
  <span class="text-black">{{ user.id }}</span>
  <main class="container p-10 m-auto">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry" />
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
