<template>
    <div class="flex justify-center items-center">
        <a :href="profileUrls.linkedIn" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
        </a>
        <a :href="profileUrls.github" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" class="icon" />
        </a>
    </div>
</template>

<script setup lang="ts">
const profileUrls = {
    linkedIn: 'https://linkedin.com/in/dávid-cseresznyés-623085287',
    github: 'https://github.com/cseri502'
}
</script>