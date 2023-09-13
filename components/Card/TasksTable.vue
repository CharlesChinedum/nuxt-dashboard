<script setup lang="ts">
defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="w-full">
    <BTableSimple hover small borderless caption-top responsive>
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
          <BTh class="px-4">Task</BTh>
          <BTh class="px-4">Team</BTh>
          <BTh class="px-4">Open Task</BTh>
          <BTh class="px-4">Priority</BTh>
          <BTh class="px-4">Status</BTh>
          <BTh class="px-4"></BTh>
        </BTr>
      </BThead>
      <BTbody>
        <BTr v-for="task in tasks" :key="task.task">
          <BTd class="py-3 px-4">
            <div class="flex items-center gap-3">
              <!-- <input type="radio" class="w-4 h-5 text-base" /> -->
              <div
                class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
              >
                <input
                  aria-labelledby="label1"
                  checked
                  type="radio"
                  name="radio"
                  class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div
                  class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"
                ></div>
              </div>
              <span>{{ task.task }}</span>
            </div>
          </BTd>
          <BTd class="py-3 px-4">{{ task.team }}</BTd>
          <BTd class="py-3 px-4">{{ task.openTask }}</BTd>
          <BTd
            class="py-3 px-4"
            :class="[
              task.priority === 'High' ? 'text-green-300' : 'text-red-300',
              'text-orange-300',
            ]"
            >{{ task.priority }}</BTd
          >
          <!-- <BTd class="py-3 px-4"> -->
          <!-- <span :class="[crypto.up ? 'text-green-500' : 'text-red-500', crypto.orange && 'text-orange-500'  ]">
          {{ crypto.Change_24H }}
        </span> -->
          <!-- </BTd> -->
          <BTd class="py-3 px-4">{{ task.status }}</BTd>
        </BTr>
      </BTbody>
    </BTableSimple>
  </div>
</template>
