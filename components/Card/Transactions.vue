<script setup lang="ts">
defineProps({
  Image: String,
  Task: String,
  Description: String,
  Amount: String,
  Date: String,
});

const { data: transaction } = await useFetch("/api/transactions", {
  transform: (_transaction) => _transaction.data,
});
const transactionData = toRaw(transaction.value.Data);
</script>

<template>
  <div class="bg-white rounded-2xl">
    <div class="flex flex-col w-full p-4">
      <div>
        <h2
          class="text-[14px] text-[#1d212f] tracking-[.3px] leading-[1] font-bold uppercase"
        >
          RECENT TRANSCATIONS
        </h2>
        <p class="text-[13px] text-[#8f8fb1]">
          Projects where development work is on completion
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col" v-for="transaction in transactionData">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10">
                <img
                  :src="transaction.Image"
                  class="rounded-full"
                  :alt="`${transaction.Task} Image`"
                />
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-[.875rem] text-[#1d212f] font-medium">{{
                  transaction.Task
                }}</span>
                <span class="text-[13px] text-[#8f8fb1]">
                  {{ transaction.Description }}
                </span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="text-[15px] text-[#1d212f] font-medium">{{
                transaction.Amount
              }}</span>
              <span class="text-[11px] text-[#8f8fb1]">{{
                transaction.Date
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
