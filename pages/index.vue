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
    <div class="px-3 py-4">
      <div class="flex w-full justify-between pb-10">
        <Header title="Welcome To Dashboard" />
      </div>

      <div class="grid md:grid-cols-1 xl:grid-cols-3 gap-3">
        <div class="w-full grid gap-3 col-span-2">
          <div class="grid gap-3">
            <div class="">
              <Mockup />
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div
                v-for="revenue in revenueData"
                class="grid col-span-3 md:col-span-1 lg:col-span-1"
              >
                <CardRevenue
                  :category="revenue.Category"
                  :description="revenue.Description"
                  :amount="revenue.Amount"
                  :percentage="revenue.Percentage"
                  :changePercentage="revenue.ChangePercentage"
                />
              </div>
            </div>

            <div class="grid gap-3">
              <CardChart />
              <div class="grid md:grid-cols-2 gap-3">
                <CardTodayTasks />
                <CardInquiries />
                <!--  <div class="h-[20rem]"></div>  -->
              </div>
              <div class="overflow-x-auto">
                <CardTasks />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:gap-3 col-span-2 w-full md:col-span-2 lg:col-span-1">
          <div class="grid gap-3">
            <div>
              <CardTransactions />
            </div>
            <div>
              <CardProjectLaunch />
            </div>
            <div>
              <CardOnGoingProjects />
            </div>
            <div>
              <CardWebDesign />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
