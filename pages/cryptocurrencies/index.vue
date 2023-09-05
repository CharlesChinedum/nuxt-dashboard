<script setup lang="ts">
import {Download, Filter, DownloadCloud} from "lucide-vue-next";

const {data: crypto } = await useFetch("/api/crypto", {
    transform: (_crypto) => _crypto.data,
})
const cryptoData = toRaw(crypto.value.coins);


</script>

<template>
    <div>
        <div class="w-full px-3 py-4">
            <div class="flex w-full justify-between">
                <Header title="Crypto Market" />
                <div class="flex items-center gap-3">
                    <div class="flex gap-2 items-center bg-white py-2 px-2 rounded-[0.2rem]">
                        <Download  :size="15" class="text-xs" />
                        <span class="text-sm">Import</span>
                    </div>
                    <div class="flex gap-2 items-center bg-white py-2 px-2 rounded-[0.2rem]">
                        <Filter :size="15" />
                        <span class="text-sm">Filter</span>
                    </div>
                    <div>
                        <button class="flex gap-2 items-center text-white bg-indigo-500 py-2 px-3 rounded-[0.2rem]">
                            <DownloadCloud :size="15" />
                            <span class="text-sm">Download Report</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Cards -->
            <div class="flex gap-3 w-full justify-between pt-4 pb-3">
                <div v-for="crypto in cryptoData" class="w-[50%]">
                    <Card
                        :symbol="crypto.symbol"
                        :name="crypto.name"
                        :amount="crypto.amount"
                        :price="crypto.price"
                        :change="crypto.change"
                        :image="crypto.image"
                        :volume="crypto.volume"
                        :up="crypto.up"
                    />
                </div>
            </div>

            <!-- Table -->
            <div class="bg-white p-4 rounded-xl">
                <Table />
            </div>

        </div>
    </div>
</template>