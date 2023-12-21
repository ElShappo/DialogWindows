<script lang="ts">
import ManagerComponent from 'src/components/ManagerComponent.vue';
import { domains } from 'src/constants';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ManagerComponent },
  setup() {
    return {
      domains,
    };
  },
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <manager-component
      :managers="['Станислав', 'Евгений', 'Виталий', 'Григорий', 'Петр']"
      :domains="domains"
    />
  </q-page>
</template>
