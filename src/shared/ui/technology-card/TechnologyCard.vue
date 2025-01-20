<template>
    <div class="card" :style="`filter: drop-shadow(0 0 2em ${color})`">
      <div class="card_img">
        <img :src="src" class="logo vue" :alt="`${title} logo`" />
      </div>
      <p class="card_title">{{title}}</p>
      <p class="card_desc">{{desc}}</p>
      <a :href="path" target="_blank">More...</a>
    </div>
</template>

<script setup lang="ts">
defineProps<{path: string, src: string, title: string, desc: string, color: string}>()
</script>

<style scoped>
.card {
  transition: .5s;
  background: rgba(78, 78, 78, 0.247);
  border-radius: 20px;
}
.card:hover {
  background: rgba(78, 78, 78, 0.747);
}
.card_img {
  height: 100px;
}
.card_img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.card_title {
  font-size: 24px;
  text-transform: capitalize;
}
.card_desc {
  display: -webkit-box; 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;    
  text-overflow: ellipsis; 
}
</style>