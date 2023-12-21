<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import ManagerComponent from './ManagerComponent.vue';

export default defineComponent({
  name: 'DialogWindows',
  components: { ManagerComponent },
  props: {
    managers: {
      type: Object as PropType<readonly string[]>,
      required: true,
    },
    domains: {
      type: Object as PropType<readonly string[]>,
      required: true,
    },
  },
  setup() {
    return {
      tab: ref('Data'),
      alert: ref(false),
    };
  },
});
</script>

<template>
  <q-btn
    label="Открыть диалоговое окно"
    color="primary"
    class="text-h5"
    no-caps
    @click="alert = true"
  />
  <q-dialog v-model="alert">
    <q-card :style="{ borderRadius: '1.5em' }" class="q-pa-sm bg-grey-2">
      <q-tabs
        v-model="tab"
        class="text-grey-10 q-pb-md"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
        dense
      >
        <q-tab name="Data" label="Данные" />
        <q-tab name="Create employee" label="Создать сотрудника" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Data" class="bg-grey-2">
          <ManagerComponent :managers="managers" :domains="domains" />
        </q-tab-panel>

        <q-tab-panel name="Create employee">
          <div class="text-h6">Создать сотрудника</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>
