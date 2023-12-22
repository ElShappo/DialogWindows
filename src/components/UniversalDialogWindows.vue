<script lang="ts">
import { Window } from 'src/types';
import { PropType, computed, defineComponent, ref } from 'vue';
import UniversalTab from './UniversalTab.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'DialogWindows',
  components: { UniversalTab },
  props: {
    windows: {
      type: Object as PropType<Window[]>,
      required: true,
    },
  },
  setup(props) {
    const $q = useQuasar();
    let size = computed(() => {
      switch ($q.screen.name) {
        case 'lg':
          return '70vw';
        case 'xs':
          return '95vw';
        case 'sm':
          return '90vw';
        case 'md':
          return '70vw';
        case 'xl':
          return '70vw';
        default:
          return '60vw';
      }
    });
    return {
      size,
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
      :style="{ borderRadius: '1.5em', maxWidth: size }"
      class="q-pa-sm q-pl-md bg-grey-2"
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
          <UniversalTab :inputs="window.fields" :title="window.title" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>
