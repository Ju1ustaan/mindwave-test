<script setup lang="ts">
import { onMounted } from 'vue';
import { useItems } from './store';

import { AddProject } from '../widgets/add-project';
import { Table } from '../widgets/table';

import { Header } from '../shared/ui/header';
import { AboutMe } from '../shared/ui/about-me';
import { Technology } from '../shared/ui/technology';
import { Title } from '../shared/ui/title';
import { Snackbar } from '../shared/ui/snackbar';


const dataFetch = useItems()

onMounted(async () => {
  await dataFetch.getItems();
});


</script>

<template>
  <main>
    <Header></Header>

    <AboutMe></AboutMe>

    <Technology></Technology>

    <Title id="work" title="Work"></Title>

    <AddProject></AddProject>

    <Table :data="dataFetch.items"></Table>

    <Snackbar></Snackbar>
  </main>

</template>

<style scoped>
main {
  padding: 1em 0 3em;
}
</style>
