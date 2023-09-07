<script setup lang="ts">
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
      <span>...</span>
      <span class="text-[.875rem]">{{ done }}</span>
    </div>
  </div>
</template>
