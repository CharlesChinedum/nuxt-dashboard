<script setup lang="ts">
defineProps({
  category: String,
  description: String,
  amount: String,
  percentage: String,
  changePercentage: String,
});
</script>

<template>
  <div class="bg-white rounded-2xl">
    <div class="flex w-full p-4">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col">
          <span
            class="text-[13px] text-[#1d212f] font-bold uppercase tracking-wide"
          >
            {{ category }}
          </span>
          <span class="text-[12px] text-[#8f8fb1]">{{ description }} </span>
        </div>
        <div>
          <h1 class="text-[1.3125rem] text-[#1d212f] font-bold">
            {{ amount }}
          </h1>
          <span class="font-bold text-xs"
            >{{ percentage }}
            <span class="text-[#8d95b1] font-light uppercase">{{
              changePercentage
            }}</span></span
          >
          <!-- #19b159 -->
        </div>
      </div>
      <div class="flex items-end">
        <!-- <img src="" alt="" /> -->
        <span>X</span>
      </div>
    </div>
  </div>
</template>
