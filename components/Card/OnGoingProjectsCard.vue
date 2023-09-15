<script setup lang="ts">
import { MoreHorizontal } from "lucide-vue-next";
import ContextMenu from "primevue/contextmenu";

import { ref } from "vue";

const menu = ref();
const items = ref([
  { label: "Today", icon: "pi pi-fw pi-search" },
  { label: "Last Week", icon: "pi pi-fw pi-trash" },
  { label: "Last Month", icon: "pi pi-fw pi-trash" },
  { label: "Last Year", icon: "pi pi-fw pi-trash" },
]);

const onImageClick = (event) => {
  menu.value.show(event);
};

defineProps({
  team: String,
  date: String,
  project: String,
  done: String,
  image: String,
});
</script>

<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkBody' : 'bg-gray-100 ']"
    class="w-full h-full flex justify-between p-3 rounded-2xl"
  >
    <div class="h-full flex flex-col gap-4 justify-between">
      <div class="flex gap-2">
        <div class="relative">
          <div class="w-7 h-7">
            <!-- First image -->
            <img
              src="~/assets/images/flicker.jpg"
              alt="Image 1"
              class="absolute inset-0 border-[2px] border-white dark:border-darkBody rounded-full w-full h-full object-cover"
            />

            <!-- Second image -->
            <img
              src="~/assets/images/flicker-male.jpg"
              alt="Image 2"
              class="absolute inset-x-4 border-[2px] border-white dark:border-darkBody rounded-full w-full h-full object-cover"
            />

            <!-- Third image -->
            <img
              src="~/assets/images/intoxica.jpg"
              alt="Image 3"
              class="absolute inset-x-8 border-[2px] border-white dark:border-darkBody rounded-full w-full h-full object-cover"
            />

            <!-- Fourth image -->
            <img
              src="~/assets/images/flicker-male-2.jpg"
              alt="Image 4"
              class="absolute inset-x-12 border-[2px] border-white dark:border-darkBody rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
        <span class="text-[.875rem] text-darkBlue dark:text-slate-400 ml-12">{{ team }}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-[10px] text-base dark:text-slate-400 font-medium uppercase">{{
          date
        }}</span>
        <span class="text-[.875rem] font-medium">{{ project }}</span>
      </div>
    </div>

    <div class="h-full flex flex-col gap-4 justify-between">
      <div class="">
        <div
          @click="onImageClick"
          aria-haspopup="true"
          class="cursor-pointer h-8 w-8"
        >
          <MoreHorizontal size="17" />
        </div>
        <ContextMenu ref="menu" :model="items" />
      </div>
      <span class="text-[.875rem]">{{ done }}</span>
    </div>
  </div>
</template>
