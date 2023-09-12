<script setup lang="ts">
definePageMeta({
  title: "Crypto Currencies",
  description: "This is the crypto currencies page",
});

const { data: crypto } = await useFetch("/api/crypto", {
  transform: (_crypto) => _crypto.data,
});
const cryptoData = toRaw(crypto.value.coins);
</script>

<template>
  <div>
    <div class="w-full px-3 py-4">
      <div class="flex w-full justify-between">
        <Header title="Crypto Market" />
      </div>

      <!-- Cards -->
      <!-- <div
        class="flex flex-col lg:flex-row gap-3 w-full justify-between pt-4 pb-3"
      >
        <div v-for="crypto in cryptoData" class="w-full md:w-[50%]">
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
      </div> -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 pb-3">
        <div v-for="crypto in cryptoData" class="grid">
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
