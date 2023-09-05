<script setup lang="ts">
import {Wallet, Home, BaggageClaim } from "lucide-vue-next";

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
]
</script>

<template>
    <div>
        <div class="flex justify-center p-3 border-b-[1px] border-gray-700">
            <img src="~/assets/images/logo.png" alt="logo" />
        </div>

        <div class="p-3 flex flex-col gap-[1.5rem]">

            <div class="flex flex-col">
                <span class="text-xs tracking-wide font-bold text-gray-600">DASHBOARD</span>
            </div>

            <div class="flex flex-col gap-[2rem]">
                <div class="flex gap-3 text-gray-500">
                    <Home />
                    <nuxtLink to="/" class="flex no-underline items-center space-x-2">
                        <span class="text-sm tracking-wide font-semibold text-gray-500">Dashboard</span>
                    </nuxtLink>
                </div>
                <div class="flex gap-3 text-gray-500">
                    <Wallet />
                    <nuxtLink to="/cryptocurrencies" class="flex no-underline items-center space-x-2">
                        <span class="text-sm tracking-wide font-semibold text-gray-500">CryptoCurrency</span>
                    </nuxtLink>
                </div>
                <div class="flex gap-3 text-gray-500">
                    <BaggageClaim/>
                    <nuxtLink to="/" class="flex no-underline items-center space-x-2">
                        <span class="text-sm tracking-wide font-semibold text-gray-500">ECommerce</span>
                    </nuxtLink>
                </div>
            </div>
        <!-- <Wallet />
        <Home /> -->
        </div>
    </div>
</template>

<!-- <div v-for="link in navlinks">
    <div class="flex">
        <nuxtLink :to="link.path" class="flex no-underline items-center space-x-2">
            <link.icon />
            <span class="text-xs tracking-wide font-bold text-gray-600">{{ link.name }}</span>
        </nuxtLink>
    </div>
</div> -->