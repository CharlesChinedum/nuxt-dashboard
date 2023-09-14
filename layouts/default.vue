<script setup lang="ts">
import Sidebar from "primevue/sidebar";
import { ref } from "vue";

// const visible = ref(false);

const mobileSidebar = useMobileSidebar();
const sidebar = useSidebar();
</script>
<template>
  <div class="flex bg-[#e2e3e5] dark:bg-darkBody">
    <div class="w-full flex relative">
      <!-- Desktop Sidebar -->
      <div
        :class="[sidebar ? ' w-[15rem]' : 'w-[5rem]']"
        class="hidden lg:block fixed h-[100vh] bg-darkBlue"
      >
        <MySidebar />
      </div>

      <div
        :class="[mobileSidebar ? ' w-[15rem]' : 'hidden']"
        class="lg:hidden fixed h-[100vh] bg-darkBlue z-20"
      >
        <MySidebar />
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

<style>
@media screen and (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 3px;
    background-color: #e2e3e5;
  }
  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
  .dark ::-webkit-scrollbar {
    width: 3px;
    background-color: #1f2937;
  }
}
</style>
