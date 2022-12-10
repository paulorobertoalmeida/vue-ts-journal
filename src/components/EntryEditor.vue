<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import type Emoji from "../types/Emoji";
import { ref, computed } from "vue";
import type Entry from "@/types/Entry";

//data
const charCount = computed<number>(() => text.value.length);
const text = ref("");
const emoji = ref<Emoji | null>(null);
const maxChar: number = 280;

//emits
const emit = defineEmits<{
  (e: "@create", entry: Entry): void;
}>();

//methods
const handleTextInput = (e: Event) => {
  const textArea = e.target as HTMLTextAreaElement;
  console.log(textArea.value);
  if (textArea.value.length <= maxChar) {
    text.value = textArea.value;
  } else {
    text.value = textArea.value = textArea.value.substring(0, maxChar);
  }
};

const handleSubmit = () => {
  emit('@create', {
        body: text.value,
        emoji: emoji.value,
        createdAt: new Date(),
        userId: 1,
        id: Math.random(),
      });
      text.value = "";
      emoji.value = null;
}
</script>
<template>
  <form
    class="entry-form"
    @submit.prevent="handleSubmit"
  >
    <textarea
      :value="text"
      @keyup="handleTextInput"
      placeholder="New Journal Entry"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span> {{ charCount }} / {{ maxChar }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
