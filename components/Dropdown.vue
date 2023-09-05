<script setup lang="ts">
const show = ref(false)

const props = defineProps({
  options: {
    type: [],
    default: 'Dropdown Button'
  }
})

const { options } = props;
</script>

<template>
    <BDropdown v-model="show" text="Choose One" variant="outline" class="border-0 outline-none">
        <BDropdownItem v-for="option in options" :key="option.id">
        {{ option.value }}
        </BDropdownItem>
    </BDropdown>
  </template>
  
 