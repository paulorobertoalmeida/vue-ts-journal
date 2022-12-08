<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import type Emoji from "../types/Emoji";
import { ref, computed } from "vue";

//data
const charCount = computed<number>(() => text.value.length);
const text = ref("");
const emoji = ref<Emoji | null>(null);
const maxChar: number = 280;
//emits
defineEmits(["@create"]);
//methods
const handleTextInput = (e: Event) => {
  const textArea = e.target as HTMLTextAreaElement;
 console.log(textArea.value);
 if(textArea.value.length <= maxChar){
  text.value = textArea.value;
 } else {
  text.value = textArea.value = textArea.value.substring(0, maxChar);
 }
};

</script>
<template>
  <form class="entry-form" @submit.prevent="$emit('@create', { text, emoji})">
    <textarea :value="text" @keyup="handleTextInput" placeholder="New Journal Entry for pauloalmeida.eth"></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span> {{charCount}} / {{maxChar}}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
