<template>
  <div class="w-full">
    <div
      class="relative flex flex-col md:flex-row items-center px-[0.8rem] md:px-0 py-[0.8rem] bg-indigo-500 rounded-2xl"
    >
      <div class="hidden md:block md:absolute bottom-0 left-0">
        <img src="~/assets/images/mockup.png" alt="mockup" />
      </div>
      <span class="hidden md:block ml-[20rem]"></span>
      <div class="flex flex-col z-10">
        <h2 class="text-white text-md">Sonia Taylor!</h2>
        <p class="text-white text-sm">
          You have two projects to finish, you had completed
          <span class="text-orange-400 font-medium">57%</span> from your montly
          level, Keep going to your level
        </p>
      </div>
      <div class="md:hidden w-full">
        <div class="w-[60%]">
          <img src="~/assets/images/mockup.png" alt="mockup" />
        </div>
      </div>
    </div>
  </div>
</template>
