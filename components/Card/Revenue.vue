<script setup lang="ts">
defineProps({
  category: String,
  description: String,
  amount: String,
  percentage: String,
  changePercentage: String,
  up: Boolean,
});
</script>

<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="rounded-2xl"
  >
    <div class="flex w-full p-4">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col">
          <span
            class="text-[13px] text-[#1d212f] dark:text-slate-300 font-bold uppercase tracking-wide"
          >
            {{ category }}
          </span>
          <span class="text-[12px] text-[#8f8fb1] dark:text-darkText"
            >{{ description }}
          </span>
        </div>
        <div>
          <h1 class="text-[1.3125rem] text-[#1d212f] font-bold">
            {{ amount }}
          </h1>
          <span
            :class="[up === true ? 'text-[#19b159]' : 'text-[#ff4d4f]']"
            class="font-bold text-xs"
            >{{ percentage }}
            <span class="text-[#8d95b1] font-light">{{
              changePercentage
            }}</span></span
          >
          <!-- #19b159 -->
        </div>
      </div>
      <div class="flex w-full md:w-[40%] justify-end items-end">
        <!-- <img src="" alt="" /> -->
        <div
          :class="[
            $colorMode.preference == 'dark' ? 'bg-darkBody' : 'bg-indigo-100',
          ]"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100"
        >
          <span>X</span>
        </div>
      </div>
    </div>
  </div>
</template>
