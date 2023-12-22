<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import UniversalComponent from './UniversalComponent.vue';
import { DialogAnyField } from 'src/types';
import { domains } from 'src/constants';
// import EmployeeComponent from './EmployeeComponent.vue';

export default defineComponent({
  name: 'DialogWindows',
  components: { UniversalComponent },
  props: {
    windows: {
      type: Object as PropType<Window[]>,
      required: true,
    },
  },
  setup() {
    return {
      tab: ref('Data'),
      alert: ref(false),

      inputs: ref<DialogAnyField[]>([
        {
          label: 'Менеджер',
          inputType: 'select',
          iconName: 'person',
          class: ['col-8', 'text-h6'],
          availableValues: [
            'Станислав',
            'Евгений',
            'Виталий',
            'Григорий',
            'Петр',
          ],
        },
        {
          label: 'Название продукта',
          inputType: 'text',
          class: ['col-8', 'text-h6'],
        },
        {
          label: 'Ссылка в Jira',
          inputType: 'text',
          prefix: 'https://',
          class: ['col-12', 'text-h6'],
        },
        {
          label: 'Домен',
          inputType: 'select',
          iconName: 'person',
          class: ['col-12', 'text-h6'],
          availableValues: domains,
        },
      ]),
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
        <q-tab name="Data" label="Данные" />
        <q-tab name="Create employee" label="Создать сотрудника" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Data" class="bg-grey-2">
          <UniversalComponent :inputs="inputs" />
        </q-tab-panel>

        <q-tab-panel name="Create employee">
          <div class="text-h6">Создать сотрудника</div>
          <EmployeeComponent />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>
