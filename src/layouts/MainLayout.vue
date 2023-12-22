<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <nav>
        <q-btn
          color="primary"
          label="Главная"
          icon="home"
          @click="getRecords"
          class="text-h4 text-white q-pa-lg"
          flat
          no-caps
        />
        <q-btn
          color="primary"
          label="Таблица"
          icon="table_chart"
          @click="getRecords"
          class="text-h4 text-white q-pa-lg"
          flat
          no-caps
        />
        <q-btn
          color="primary"
          label="FAQ"
          icon="help"
          @click="getRecords"
          class="text-h4 text-white q-pa-lg"
          flat
          no-caps
        />
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
