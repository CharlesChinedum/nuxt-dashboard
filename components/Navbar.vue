<script setup lang="ts">
 import {Menu, Search, Settings} from "lucide-vue-next"

 const options = [
    {value: 'Firefox', id:1},
    {value: 'Chrome', id:2},
    {value: 'Safari', id:3},
    {value: 'Opera', id:4},
    {value: 'Internet Explorer', id:5}
 ]
</script>

<template>
    <nav class="flex items-center bg-white py-3 px-5 w-full shadow-md shadow-slate-300">
        <div class="flex w-full justify-between items-center">
            <div class="flex gap-5 items-center">
            <Menu />
        <div class="flex items-center rounded-l-md rounded-r-lg outline-[1px] outline outline-purple-200">
            <div class="px-3">
                <Dropdown :options="options"/>
            </div>
            <div class="flex border-l-[1px] border-purple-200">
                <input type="text" class="border-0 outline-0 w-full px-3" placeholder="search for anything...">
                <button class="border-0 outline-none bg-indigo-500 p-2 rounded-r-md">
                    <Search class="text-white" />
                </button>
            </div>
        </div>
    </div>

    <div>
        <div class="w-8 h-8">
            <Settings class="animate-spin" />
        </div>
    </div>
</div>
    </nav>
</template>