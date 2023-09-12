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
  <div class="w-full h-full flex justify-between p-3 bg-gray-100 rounded-2xl">
    <div class="h-full flex flex-col gap-4 justify-between">
      <div class="flex gap-2">
        <div>X</div>
        <span class="text-[.875rem] text-darkBlue">{{ team }}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-[10px] text-base font-medium uppercase">{{
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
