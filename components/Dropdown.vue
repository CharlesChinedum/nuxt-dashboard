<script setup lang="ts">
import Dropdown from "primevue/dropdown";

import { ref } from "vue";

const selectedCity = ref();
const browsers = ref([
  { name: "Firefox" },
  { name: "Chrome" },
  { name: "Safari" },
  { name: "Opera" },
  { name: "Internet Explorer" },
]);
</script>

<template>
  <div class="flex w-full justify-content-center">
    <!-- <Dropdown
      v-model="selectedCity"
      :options="browsers"
      optionLabel="name"
      placeholder="Choose one"
      :class="['w-full border-0 p-0 m-0']"
    /> -->
    <select
      name=""
      id=""
      class="w-full px-1 focus:border-0 focus:outline-0 dark:bg-darkTheme dark:text-slate-400"
    >
      <option value="">Choose one</option>
      <option value="">Firefox</option>
      <option value="">Chrome</option>
      <option value="">Safari</option>
      <option value="">Opera</option>
      <option value="">Internet Explorer</option>
    </select>
  </div>
</template>
