<template>
  <footer
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="w-full py-2"
  >
    <div class="flex items-center justify-center pt-2">
      <p class="text-sm dark:text-white">
        Copyright © 2022 <span class="text-indigo-400">Spruha</span>. Designed
        by <span class="text-indigo-400">Spruko</span> All rights reserved.
      </p>
    </div>
  </footer>
</template>
