<script setup lang="ts">
import { Wallet, Home, BaggageClaim } from "lucide-vue-next";

const navlinks = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    name: "CrytoCurrencies",
    icon: Wallet,
    path: "/cryptocurrencies",
  },
  {
    name: "ECommerce",
    icon: BaggageClaim,
    // path: "/ecommerce",
  },
];
const sidebar = useSidebar();
// console.log(count.value);
</script>

<template>
  <div>
    <div class="flex justify-center p-3 border-b-[1px] border-gray-700">
      <img src="~/assets/images/logo.png" alt="logo" />
    </div>

    <div class="pl-3 flex flex-col gap-[1.5rem]">
      <!-- p-3 -->
      <div class="pt-3 flex flex-col">
        <span
          class="text-xs tracking-wide font-bold text-gray-600"
          v-if="sidebar == true"
          >DASHBOARD</span
        >
      </div>

      <div class="flex flex-col gap-[2rem] pl-2">
        <nuxtLink
          to="/"
          class="my-link gap-2 flex no-underline items-center space-x-2"
        >
          <div class="link-icon-container">
            <Home class="text-gray-500 link-icon" />
          </div>
          <span
            class="text-sm tracking-wide font-semibold text-gray-500"
            v-if="sidebar == true"
            >Dashboard</span
          >
        </nuxtLink>

        <nuxtLink
          to="/cryptocurrencies"
          class="my-link gap-2 flex no-underline items-center space-x-2"
        >
          <div class="link-icon-container">
            <Wallet class="text-gray-500 link-icon" />
          </div>
          <span
            class="text-sm tracking-wide font-semibold text-gray-500"
            v-if="sidebar == true"
            >CryptoCurrency</span
          >
        </nuxtLink>

        <nuxtLink to="/" class="flex gap-2 no-underline items-center space-x-2">
          <div class="link-icon-container">
            <BaggageClaim class="text-gray-500 link-icon" />
          </div>
          <span
            class="text-sm tracking-wide font-semibold text-gray-500"
            v-if="sidebar == true"
            >ECommerce</span
          >
        </nuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-link.router-link-active {
  @apply bg-gray-200 dark:bg-darkBody;
  border-radius: 30px 0 0 30px;
  padding: 0.3rem 0.3rem;
}
.my-link.router-link-active span {
  @apply text-base text-sm;
}
.my-link.router-link-active .link-icon-container {
  @apply bg-indigo-500 p-2 rounded-full;
}
.my-link.router-link-active .link-icon {
  @apply text-white;
}
</style>
