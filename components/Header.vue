<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Dashboard'
  }
})
const { title } = props;
</script>

<template>
    <div class="">
        <h1 class="text-darkBlue text-2xl">{{ title }}</h1>
    </div>
</template>