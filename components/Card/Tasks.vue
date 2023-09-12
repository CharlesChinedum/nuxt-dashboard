<script setup lang="ts">
import { MoreVertical } from "lucide-vue-next";

import ContextMenu from "primevue/contextmenu";

import { ref } from "vue";

const menu = ref();
const items = ref([
  { label: "Task", icon: "pi pi-fw pi-search" },
  { label: "Team", icon: "pi pi-fw pi-trash" },
  { label: "Status", icon: "pi pi-fw pi-trash" },
  { label: "Settings", icon: "pi pi-fw pi-trash" },
]);
const onImageClick = (event) => {
  menu.value.show(event);
};

const { data: tasks } = await useFetch("/api/tasks", {
  transform: (_tasks) => _tasks.data,
});
const tasksData = toRaw(tasks.value.data);
</script>

<template>
  <div class="bg-white rounded-2xl">
    <div class="flex flex-col w-full p-4">
      <div class="w-full flex justify-between">
        <div class="flex flex-col">
          <h2
            class="text-[14px] text-[#1d212f] tracking-[.3px] leading-[1] font-bold uppercase"
          >
            Tasks
          </h2>
          <p class="text-[13px] text-[#8f8fb1]">
            A task is accomplished by a set deadline, and must contribute toward
            work-related objectives.
          </p>
        </div>
        <div class="">
          <div
            class="text-slate-500 text-sm"
            @click="onImageClick"
            aria-haspopup="true"
          >
            <MoreVertical />
          </div>
          <ContextMenu ref="menu" :model="items" />
        </div>
      </div>

      <div class="bg-white p-4 border-[1px] border-slate-200">
        <CardTasksTable :tasks="tasksData" />
      </div>
    </div>
  </div>
</template>
