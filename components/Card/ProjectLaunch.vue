<template>
  <div
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="rounded-2xl"
  >
    <div class="flex justify-between w-full p-4">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-[0.3rem]">
          <span
            class="text-[13px] text-[#1d212f] dark:text-white tracking-[.3px] leading-[1] font-bold uppercase"
            >Project Launch</span
          >
          <span class="text-[13px] text-[#8f8fb1] tracking-[.3px]"
            >the project is goin to launch</span
          >
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-[1.5rem] text-base font-bold">145 days </span>
          <span class="text-[14px] text-[#8f8fb1] font-normal"
            >12 Monday, Oct 2020</span
          >
        </div>
      </div>
      <div>
        <div class="w-28 h-28">
          <img
            class="w-full h-full"
            src="~/assets/images/space-ship.png"
            alt="project launch"
          />
        </div>
      </div>
    </div>
  </div>
</template>
