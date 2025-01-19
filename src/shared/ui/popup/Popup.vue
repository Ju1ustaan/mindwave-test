<template>
    <div class="popup">
        <div class="popup_wrapper">
            <p>{{title}}</p>
            <slot name="delete-item"></slot>
            <slot name="edit-item"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()

</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(10, 10, 10, 0.616);
    z-index: 200;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup_wrapper {
    width: 30%;
    padding: 2em;
    border-radius: 20px;
    background: #a28ada;
}

.popup_wrapper p {
    font-size: 18px;
    margin-bottom: 10px;
}

</style>