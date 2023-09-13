<script setup lang="ts">
import {
  Menu,
  Search,
  Settings,
  MessageSquare,
  Bell,
  Maximize,
  Moon,
  Sun,
} from "lucide-vue-next";
import ContextMenu from "primevue/contextmenu";
import { ref } from "vue";

type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};

// const options = [
//   { value: "Firefox", id: 1 },
//   { value: "Chrome", id: 2 },
//   { value: "Safari", id: 3 },
//   { value: "Opera", id: 4 },
//   { value: "Internet Explorer", id: 5 },
// ];

const menu = ref();
const items = ref([
  { label: "French", icon: "pi pi-fw pi-search" },
  { label: "Germany", icon: "pi pi-fw pi-trash" },
  { label: "Italy", icon: "pi pi-fw pi-trash" },
  { label: "Russia", icon: "pi pi-fw pi-trash" },
  { label: "Spain", icon: "pi pi-fw pi-trash" },
]);

const onImageClick = (event) => {
  menu.value.show(event);
};
</script>

<template>
  <nav
    class="flex items-center bg-white py-3 px-5 w-full shadow-md light:shadow-slate-300"
  >
    <div class="flex w-full justify-between items-center">
      <div class="flex gap-5 items-center">
        <Menu />
        <div
          class="flex items-center rounded-l-md rounded-r-lg outline-[1px] outline outline-purple-200"
        >
          <div class="px-3">
            <Dropdown />
          </div>
          <div class="flex border-l-[1px] border-purple-200">
            <input
              type="text"
              class="border-0 outline-0 w-full px-3"
              placeholder="search for anything..."
            />
            <button
              class="border-0 outline-none bg-indigo-500 p-2 rounded-r-md"
            >
              <Search class="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button
          @click="
            setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
          "
        >
          <Moon v-if="$colorMode.value == 'light'" />
          <Sun v-else />
        </button>
        <div class="">
          <div
            @click="onImageClick"
            aria-haspopup="true"
            class="cursor-pointer h-8 w-8"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
              alt=""
              class="rounded-full h-full w-full object-cover"
            />
          </div>
          <ContextMenu ref="menu" :model="items" />
        </div>
        <Maximize />
        <Bell />
        <MessageSquare />
        <div class="w-8 h-8">
          <img
            src="~/assets/images/user.jpg"
            class="rounded-full"
            alt="user picture"
          />
        </div>
        <Menu />
        <Settings class="animate-spin" />
      </div>
    </div>
  </nav>
</template>
