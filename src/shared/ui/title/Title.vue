<template>
    <h2 class="title" >{{ title }} <span>_</span></h2>
</template>

<script setup lang="ts">
defineProps<{title: string}>()
</script>

<style scoped>
.title {
    font-size: 2.5em;
    text-transform: capitalize;
}
.title span {
    transition: 1s;
    animation: blink 1s infinite;
}
@keyframes blink {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>