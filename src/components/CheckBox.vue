<template>
    <div class="flex text-left">
        <div class="flex items-center h-5">
            <input :id="inputId" :checked="value" v-model="checked" @change="$emit('shareState', [event, checked])" :aria-describedby="helperId" type="checkbox" value=""
                class="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 focus:ring-2">
        </div>
        <div class="ml-2 text-sm">
            <label :for="inputId" class="font-medium text-gray-900">{{ label }}</label>
            <p :id="helperId" class="text-xs font-normal text-gray-500">{{ helperText }}</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
    inputId: string,
    value: boolean,
    helperId: string,
    label: string,
    helperText: string,
    event: string
}>()

const checked = ref<boolean>()

onMounted(() => {
    checked.value = props.value
})
</script>