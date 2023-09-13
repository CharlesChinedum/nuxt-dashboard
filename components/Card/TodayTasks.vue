<script setup lang="ts">
const tasks = [
  {
    title: "Today Tasks",
    task: "Ux Ui & Backend Developement",
    label: "Project",
    status: "Inprogress",
    projectBudget: "$5,240",
    dateRange: "May 28 - June 01 (2018)",
  },
];
</script>
<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="rounded-2xl"
  >
    <div class="w-full p-4">
      <div class="flex justify-between gap-3" v-for="task in tasks">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col w-full">
            <span
              class="text-[14px] text-textHeader dark:text-white font-extrabold tracking-[.2px] uppercase mb-2"
            >
              {{ task.title }}
            </span>
            <span class="text-[11px] text-textMuted uppercase">{{
              task.task
            }}</span>
          </div>
          <div>
            <p class="text-md dark:text-slate-400">Project-Budget</p>
            <p class="text-[1.53125rem] text-base font-bold">
              {{ task.projectBudget }}
            </p>
            <span class="text-[13px] text-textMuted">{{ task.dateRange }}</span>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <div class="flex gap-3">
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 rounded-full bg-base"></div>
              <span class="dark:text-textMuted text-sm">{{ task.label }}</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 rounded-full bg-slate-400"></div>
              <span class="dark:text-textMuted text-sm">{{ task.status }}</span>
            </div>
          </div>
          <div class="">
            <img
              src="~/assets/images/doughnut-chart.svg"
              class=""
              alt="doughnut chart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
