<script setup lang="ts">
import { ArrowUp } from "lucide-vue-next";
import { ArrowDown } from "lucide-vue-next";

const inquiries = [
  { category: "Brand identity", value: 80, percentage: 24.75, up: true },
  { category: "UI & UX design", value: 70, percentage: 12.34, up: false },
  { category: "Product design", value: 30, percentage: 12.75, up: true },
];
</script>
<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="rounded-2xl"
  >
    <div class="flex h-full justify-between flex-col w-full p-4">
      <div class="flex flex-col">
        <span
          class="text-[14px] text-textHeader dark:text-white font-extrabold tracking-[.2px] uppercase mb-1"
        >
          Top Inquiries
        </span>
        <span class="text-[13px] text-textMuted"
          >project work involves a group of students investigating .
        </span>
      </div>

      <div class="flex flex-col" v-for="inquiry in inquiries">
        <div class="flex justify-between">
          <div class="w-[50%]">
            <span class="dark:text-slate-400">{{ inquiry.category }}</span>
          </div>
          <div class="w-[50%] flex items-center gap-3">
            <div class="w-[70%]">
              <BProgress :value="inquiry.value" height="6px" />
            </div>
            <div class="flex items-center gap-1">
              <div>
                <ArrowUp v-if="inquiry.up" class="text-green-400" size="15" />
                <ArrowDown v-else class="text-red-400" size="15" />
              </div>

              <span>{{ inquiry.percentage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
