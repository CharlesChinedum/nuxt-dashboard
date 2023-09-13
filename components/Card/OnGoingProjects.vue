<script setup lang="ts">
const { data: projects } = await useFetch("/api/projects", {
  transform: (_projects) => _projects.data,
});
const projectsData = toRaw(projects.value.Data);
</script>

<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="rounded-2xl"
  >
    <div class="flex flex-col gap-4 justify-between w-full p-4">
      <div class="flex flex-col gap-1">
        <span
          class="text-[13px] text-[#1d212f] dark:text-white tracking-[.3px] leading-[1] font-bold uppercase"
          >ON GOING PROJECTS</span
        >
        <span class="text-[12px] text-[#8f8fb1] tracking-[.3px]"
          >Projects where development work is on completion</span
        >
      </div>
      <div class="flex flex-col gap-3">
        <div v-for="project in projectsData">
          <CardOnGoingProjectsCard
            :team="project.team"
            :date="project.date"
            :project="project.project"
            :done="project.done"
          />
        </div>
      </div>
    </div>
  </div>
</template>
