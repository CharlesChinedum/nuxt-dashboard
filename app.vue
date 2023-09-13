<script setup lang="ts">
// type Theme = "light" | "dark";

// const setColorTheme = (newTheme: Theme) => {
//   useColorMode().preference = newTheme;
// }
</script>

<template>
  <div class="h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
