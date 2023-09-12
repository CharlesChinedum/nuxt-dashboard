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
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedCity"
      :options="browsers"
      optionLabel="name"
      placeholder="Choose one"
      class="w-full border-0 p-0 m-0"
    />
  </div>
</template>
