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

const menu = ref();
const items = ref([
  { label: "French"},
  { label: "Germany" },
  { label: "Italy" },
  { label: "Russia" },
  { label: "Spain"},
]);

const onImageClick = (event) => {
  menu.value.show(event);
};

let sidebar = useSidebar();
const handleSidebar = () => {
  sidebar.value = !sidebar.value;
};
</script>

<template>
  <nav
    :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
    class="flex items-center py-3 px-5 w-full shadow-md light:shadow-slate-300"
  >
    <div class="flex w-full justify-between items-center">
      <div class="flex gap-5 items-center">
        <div @click="handleSidebar">
          <Menu />
        </div>
        <div
          class="flex items-center rounded-l-md rounded-r-lg outline-[1px] outline outline-purple-200 dark:outline-slate-600"
        >
          <div class="px-3">
            <Dropdown />
          </div>
          <div class="flex border-l-[1px] border-purple-200">
            <input
              type="text"
              :class="[
                $colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white',
              ]"
              class="border-0 outline-0 w-full px-3 dark:text-white"
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

      <div class="flex items-center gap-4 dark:text-slate-300">
        <button
          @click="
            setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
          "
        >
          <Moon v-if="$colorMode.value == 'light'" size="20" />
          <Sun v-else size="20" />
        </button>
        <div class="">
          <div
            @click="onImageClick"
            aria-haspopup="true"
            class="cursor-pointer h-5 w-5"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
              alt=""
              class="rounded-full h-full w-full object-cover"
            />
          </div>
          <ContextMenu ref="menu" :model="items" />
        </div>
        <Maximize size="20" />
        <Bell size="20" />
        <MessageSquare size="20" />

        <div class="w-7 h-7">
          <img
            src="~/assets/images/user.jpg"
            class="rounded-full"
            alt="user picture"
          />
        </div>
        <Menu size="20" />
        <Settings class="animate-spin" size="20" />
      </div>
    </div>
  </nav>
</template>
