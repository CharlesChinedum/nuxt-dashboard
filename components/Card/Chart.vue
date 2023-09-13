<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="rounded-2xl"
  >
    <div class="p-4 flex flex-col gap-2">
      <div>
        <h2
          class="text-[14px] text-[#1d212f] dark:text-white tracking-[.2px] leading-[1] font-extrabold uppercase"
        >
          Project Budget
        </h2>
        <p class="text-[12.5px] text-[#8f8fb1]">
          The Project Budget is a tool used by project managers to estimate the
          total cost of a project
        </p>
      </div>
      <div class="w-full">
        <img src="~/assets/images/chart.png" alt="line chart" />
      </div>
    </div>
  </div>
</template>
