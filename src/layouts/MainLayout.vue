<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <nav>
        <q-btn flat color="primary" label="Главная" @click="getRecords" />
      </nav>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    async function getRecords() {
      const response = await fetch('/api/get_records');
      const result = await response.json();
      console.log(result);
    }
    return {
      getRecords,
    };
  },
});
</script>
