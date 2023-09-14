<script setup lang="ts">
import { Download, Filter, DownloadCloud } from "lucide-vue-next";

const props = defineProps({
  title: {
    type: String,
    default: "Dashboard",
  },
  from: String,
  to: String,
});
const { title, from, to } = props;
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between w-full">
    <div class="flex flex-col gal-1">
      <h1 class="text-darkBlue dark:text-white text-2xl">{{ title }}</h1>
      <span class="text-[14px] dark:text-slate-200"
        >{{ from }}<span class="text-textMuted"> / {{ to }}</span></span
      >
    </div>

    <div class="flex items-center gap-3">
      <div
        :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
        class="flex gap-2 items-center py-2 px-2 rounded-[0.2rem]"
      >
        <Download :size="15" class="text-xs dark:text-white" />
        <span class="text-sm dark:text-white">Import</span>
      </div>
      <div
        :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
        class="flex gap-2 items-center py-2 px-2 rounded-[0.2rem]"
      >
        <Filter class="dark:text-white" :size="15" />
        <span class="text-sm dark:text-white">Filter</span>
      </div>
      <div>
        <button
          class="flex gap-2 items-center text-white bg-indigo-500 py-2 px-2 md:px-3 rounded-[0.2rem]"
        >
          <DownloadCloud :size="15" />
          <span class="text-sm dark:text-white">Download Report</span>
        </button>
      </div>
    </div>
  </div>
</template>
