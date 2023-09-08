<script setup>
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        type: "bar",
        label: "Total Project",
        backgroundColor: documentStyle.getPropertyValue("--indigo-500"),
        data: [50, 25, 12, 48, 90, 76, 42, 42, 42, 42],
        barThickness: 6,
      },
      {
        type: "bar",
        label: "On Going",
        backgroundColor: documentStyle.getPropertyValue("--gray-200"),
        data: [21, 84, 24, 75, 37, 65, 34, 42, 42, 42],
        barThickness: 6,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>

<template>
  <div class="bg-white rounded-2xl">
    <div class="flex flex-col w-full p-4">
      <div class="w-full flex justify-between">
        <div class="flex flex-col">
          <h2
            class="text-[14px] text-[#1d212f] tracking-[.3px] leading-[1] font-bold uppercase"
          >
            Website Design
          </h2>
          <p class="text-[13px] text-[#8f8fb1]">Task completed : 7/10</p>
        </div>
        <div>
          <p class="text-[12px] text-[#8f8fb1]">Running</p>
        </div>
      </div>

      <div>
        <Chart
          type="bar"
          :data="chartData"
          :options="chartOptions"
          class="h-30rem"
        />
      </div>
      <div class="flex w-full items-center justify-between">
        <div>
          <span class="text-[15px] text-[#8f8fb1]">
            Client:
            <span class="ml-2 font-semibold text-textHeader">John Doe</span>
          </span>
          <p class="text-[13px] text-[#8f8fb1]">
            Deadline: <span class="ml-2">25 Dec 2020</span>
          </p>
        </div>
        <div class="h-12 w-12">
          <img
            src="~/assets/images/project-launch-logo.png"
            alt="Website Design Task Logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
