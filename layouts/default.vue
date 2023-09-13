<script setup lang="ts">
const sidebar = useSidebar();
</script>
<template>
  <div class="bg-[#e2e3e5] dark:bg-darkBody">
    <div class="w-full flex relative">
      <div
        :class="[sidebar ? ' w-[15rem]' : 'w-[5rem]']"
        class="hidden lg:block fixed h-[100vh] bg-darkBlue"
      >
        <Sidebar />
      </div>
      <div
        :class="sidebar ? 'lg:pl-[15rem]' : 'lg:pl-[5rem]'"
        class="flex flex-col w-full"
      >
        <div class="hidden md:block">
          <Navbar />
        </div>
        <div class="md:hidden">
          <MobileNavbar />
        </div>
        <main class="">
          <slot />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
