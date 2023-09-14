<script setup lang="ts">
import { ref } from "vue";
import {
  Menu,
  Search,
  Settings,
  MessageSquare,
  Bell,
  Maximize,
  Moon,
  Sun,
  MoreVertical,
} from "lucide-vue-next";
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};

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

let sidebar = useMobileSidebar();
// const handleMobileSidebar = () => {
//   sidebar.value = !sidebar.value;
// };
const dropMenu = ref(false);
const handleDropMenu = () => {
  dropMenu.value = !dropMenu.value;
};
</script>
<template>
  <nav>
    <div
      :class="[$colorMode.preference == 'dark' ? 'bg-darkTheme' : 'bg-white']"
      class="w-full"
    >
      <div class="flex items-center justify-between px-3 py-2">
        <!-- <Button icon="pi pi-arrow-right" @click="visible = true" /> -->
        <div>
          <Menu @click="sidebar = !sidebar" class="dark:text-slate-400" />
        </div>
        <div class="flex justify-center">
          <img
            v-if="$colorMode.preference == 'light'"
            src="~/assets/images/mobile-logo.png"
            class="w-[80%]"
            alt="logo"
          />
          <img
            v-else
            src="~/assets/images/logo.png"
            class="w-[80%]"
            alt="logo"
          />
        </div>
        <div class="flex items-center">
          <div class="w-8 h-8">
            <MoreVertical @click="handleDropMenu" class="dark:text-slate-400" />
          </div>
          <div class="w-8 h-8">
            <Settings class="animate-spin dark:text-slate-400" />
          </div>
        </div>
      </div>

      <div
        :class="[dropMenu ? 'block' : 'hidden']"
        class="px-3 py-2 border-t-2 border-slate-400"
      >
        <div class="flex items-center gap-4 dark:text-slate-300">
          <button
            @click="
              setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
            "
          >
            <Moon v-if="$colorMode.value == 'light'" size="16" />
            <Sun v-else size="16" />
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
          <Maximize size="16" />
          <Bell size="16" />
          <MessageSquare size="16" />
          <div class="w-8 h-8">
            <img
              src="~/assets/images/user.jpg"
              class="rounded-full"
              alt="user picture"
            />
          </div>
          <Menu size="16" />
        </div>
      </div>
    </div>
  </nav>
</template>
