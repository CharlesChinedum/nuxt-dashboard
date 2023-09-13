<script setup lang="ts">
defineProps({
  symbol: {
    type: String,
    required: true,
  },
  name: String,
  amount: Number,
  price: String,
  change: Number,
  volume: String,
  up: Boolean,
  image: String,
});
</script>
<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="w-full rounded-2xl"
  >
    <div class="px-4 py-4 w-full flex items-center">
      <div class="w-full">
        <h2 class="text-[14px] dark:text-slate-400 font-medium">
          {{ symbol }}
        </h2>
        <div class="flex gap-2 items-end mb-1">
          <span
            class="text-[1.3125rem] dark:text-white font-medium leading-tight"
            >{{ amount }}</span
          >
          <span class="text-[12px] font-medium text-[#8f8fb1]">{{
            price
          }}</span>
        </div>
        <div>
          <span
            class="font-bold text-[13px] mr-1"
            :class="up ? 'text-green-500' : 'text-red-400'"
            >{{ change }} %</span
          >
          {{ " " }}
          <span class="text-[13px] text-[#8f8fb1] break-all"
            >Volume - {{ volume }}</span
          >
        </div>
      </div>
      <!-- <div class=""> -->
      <img class="" :src="image" :alt="name" />
      <!-- </div>  -->
    </div>
  </div>
</template>
