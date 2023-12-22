<script lang="ts">
import { Window } from 'src/types';
import { PropType, defineComponent, ref } from 'vue';
import UniversalComponent from './UniversalComponent.vue';

export default defineComponent({
  name: 'DialogWindows',
  components: { UniversalComponent },
  props: {
    windows: {
      type: Object as PropType<Window[]>,
      required: true,
    },
  },
  setup(props) {
    return {
      tab: ref(props.windows[0].title),
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
    <q-card
      :style="{ borderRadius: '1.5em', width: '50vw' }"
      class="q-pa-sm bg-grey-2"
    >
      <q-tabs
        v-model="tab"
        class="text-grey-10 q-pb-md"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
        dense
      >
        <q-tab
          v-for="window in windows"
          :key="window.title"
          :name="window.title"
          :label="window.title"
        >
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel
          v-for="window in windows"
          :key="window.title"
          :name="window.title"
          :label="window.title"
          class="bg-grey-2"
        >
          <UniversalComponent :inputs="window.fields" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>
