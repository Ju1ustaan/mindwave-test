<template>
    <div
      v-if="show.show"
      class="snackbar"
      :style="`filter: drop-shadow(0 0 2em ${show.color})`"
      :class="{ 'snackbar-hide': hide }"
    >
      <p>{{ show.message }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from "vue";
  import { useSnackbar } from "../../../app/store";
  
  const show = useSnackbar();
  const hide = ref(false); 
  
  watch(
  () => show.show,
  (newVal) => {
    if (newVal) {
     
      setTimeout(() => {
        hide.value = true; 
        setTimeout(() => {
          show.showSnackbar(false); 
          hide.value = false; 
        }, 300); 
      }, 3000); 
    }
  },
  { immediate: true }
);
  </script>
  
  <style scoped>
  .snackbar {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 1em 2em;
    border-radius: 10px;
    z-index: 300;
    background: rgba(94, 94, 94, 0.753);
    backdrop-filter: blur(10px);
    animation: appearance 0.3s ease-in forwards;
  }
  
  .snackbar-hide {
    animation: disappearance 0.3s ease-out forwards;
  }
  
  @keyframes appearance {
    0% {
      transform: translateX(120%);
    }
    100% {
      transform: translateX(-10px);
    }
  }
  
  @keyframes disappearance {
    0% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(120%);
    }
  }
  </style>
  