<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-h3 text-weight-light text-center q-py-lg">
      Better Dialog Windows
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
});
</script>
