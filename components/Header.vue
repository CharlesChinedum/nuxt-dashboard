<script setup lang="ts">
import { Download, Filter, DownloadCloud } from "lucide-vue-next";

const props = defineProps({
  title: {
    type: String,
    default: "Dashboard",
  },
});
const { title } = props;
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between w-full">
    <h1 class="text-darkBlue text-2xl">{{ title }}</h1>
    <div class="flex items-center gap-3">
      <div class="flex gap-2 items-center bg-white py-2 px-2 rounded-[0.2rem]">
        <Download :size="15" class="text-xs" />
        <span class="text-sm">Import</span>
      </div>
      <div class="flex gap-2 items-center bg-white py-2 px-2 rounded-[0.2rem]">
        <Filter :size="15" />
        <span class="text-sm">Filter</span>
      </div>
      <div>
        <button
          class="flex gap-2 items-center text-white bg-indigo-500 py-2 px-3 rounded-[0.2rem]"
        >
          <DownloadCloud :size="15" />
          <span class="text-sm">Download Report</span>
        </button>
      </div>
    </div>
  </div>
</template>
