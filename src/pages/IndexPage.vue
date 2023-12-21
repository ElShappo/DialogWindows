<script lang="ts">
import DialogWindows from 'src/components/DialogWindows.vue';
import { domains } from 'src/constants';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { DialogWindows },
  setup() {
    return {
      domains,
    };
  },
});
</script>

<template>
  <q-page class="row items-center justify-evenly page">
    <DialogWindows
      :managers="['Станислав', 'Евгений', 'Виталий', 'Григорий', 'Петр']"
      :domains="domains"
    />
  </q-page>
</template>

<style lang="scss">
.page {
  background: #393d3f;
}
</style>
