<script setup>
const {data: coins } = await useFetch("/api/allcoins", {
    transform: (_coins) => _coins.data,
})
const allCoins = toRaw(coins.value);

</script>

<template>
    <BTableSimple hover small caption-top responsive>
    <caption class="font-extrabold leading-[.2px] tracking-[1px] text-[14px] text-[#1d212f] uppercase">
        CRYPT MARKETING VALUES
        <hr />
    </caption>
    <colgroup>
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
    <col />
  </colgroup>
  <BThead head-variant="dark">
    <BTr>
      <BTh  class="px-4">No</BTh>
      <BTh  class="px-4">Name</BTh>
      <BTh  class="px-4">Last Price</BTh>
      <BTh  class="px-4">MArket Cap</BTh>
      <BTh  class="px-4">Change</BTh>
      <BTh  class="px-4"></BTh>
    </BTr>
  </BThead>
  <BTbody>
    <BTr v-for="crypto in allCoins" :key="crypto.Name">
        <BTd class="py-3 px-4">{{ crypto.No }}</BTd>
        <BTd class="py-3 px-4">{{ crypto.Name }}</BTd>
        <BTd class="py-3 px-4">{{ crypto.Last_Price }}</BTd>
        <BTd class="py-3 px-4">{{ crypto.Market_Cap }}</BTd>
        <BTd class="py-3 px-4">
        <span :class="[crypto.up ? 'text-green-500' : 'text-red-500', crypto.orange && 'text-orange-500'  ]">
            {{ crypto.Change_24H }}
        </span>
        </BTd>
        <BTd class="py-3 px-4">
            <button class="border-[1px] border-violet-600 px-2 py-[2px] text-violet-600 rounded-[0.2rem]">Trade</button>
        </BTd>
    </BTr>
  </BTbody>
 
</BTableSimple>
</template>