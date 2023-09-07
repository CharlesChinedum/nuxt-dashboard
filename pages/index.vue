<script setup lang="ts">
definePageMeta({
  title: "Dashboard",
  description: "This is the dashboard",
});

const { data: revenue } = await useFetch("/api/revenue", {
  transform: (_revenue) => _revenue.data,
});
const revenueData = toRaw(revenue.value.Data);
// console.log(revenueData);
</script>
<template>
  <div>
    <div class="w-full px-3 py-4">
      <div class="flex w-full justify-between pb-10">
        <Header title="Welcome To Dashboard" />
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div class="grid gap-4 col-span-2 border-2 border-red-300">
          <Mockup />
          <div class="grid grid-cols-3 gap-4">
            <div v-for="revenue in revenueData" class="grid">
              <CardRevenue
                :category="revenue.Category"
                :description="revenue.Description"
                :amount="revenue.Amount"
                :percentage="revenue.Percentage"
                :changePercentage="revenue.ChangePercentage"
              />
            </div>
          </div>

          <div class="grid">
            <CardChart />
          </div>
        </div>

        <div class="flex flex-col gap-4 border-2 border-red-300">
          <div>
            <CardTransactions />
          </div>
          <div>
            <CardProjectLaunch />
          </div>
          <div>
            <CardOnGoingProjects />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
