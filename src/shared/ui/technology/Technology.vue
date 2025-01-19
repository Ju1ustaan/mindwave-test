<template>
  <v-technology class="technology">
    <Title id="technology" title="technology stack"></Title>
    <div class="technology_wrapper">
      <div class="technology_card" v-for="item in technologyInfo">
        <TechnologyCard :path="item.path" :src="item.icon" :title="item.title" :desc="item.desc" :color="item.color">
        </TechnologyCard>
      </div>
    </div>
  </v-technology>
</template>

<script setup lang="ts">
import { Title } from '../title';
import { TechnologyCard } from '../technology-card';
import PiniaIcon from '../../assets/icons/pinia.svg'
import TypeScriptIcon from '../../assets/icons/ts.png'
import VueIcon from '../../assets/icons/vue.svg'
import ViteIcon from '../../assets/icons/vite.svg'

const technologyInfo = [
  {
    path: 'https://vite.dev',
    icon: ViteIcon,
    title: 'vite',
    desc: 'Vite is a blazing fast frontend build tool powering the next generation of web applications.',
    color: '#646cffaa'
  },
  {
    path: 'https://vuejs.org/',
    icon: VueIcon,
    title: 'Vue3',
    desc: 'An approachable, performant and versatile framework for building web user interfaces.',
    color: '#42b883aa'
  },
  {
    path: 'https://www.typescriptlang.org/',
    icon: TypeScriptIcon,
    title: 'TypeScript',
    desc: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    color: '#3178c6'
  },
  {
    path: 'https://pinia.vuejs.org/',
    icon: PiniaIcon,
    title: 'pinia',
    desc: 'Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
    color: '#ffe062'
  },
]
</script>

<style scoped>
.technology_wrapper {
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
}

.technology_card {
  width: 23%;
  transition: filter 300ms;
}

.technology_wrapper a {
  text-transform: capitalize;
  text-align: center;
  color: #fff;
}

.logo {
  height: 10em;
  will-change: filter;
}

.stack-btn {
  display: flex;
  gap: 5px;
  fill: #fff;
}
</style>