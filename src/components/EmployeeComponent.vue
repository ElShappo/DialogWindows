<script lang="ts">
import { useQuasar } from 'quasar';
import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ManagerComponent',
  props: {
    employees: {
      type: Object as PropType<readonly string[]>,
      required: true,
    },
    directors: {
      type: Object as PropType<readonly string[]>,
      required: true,
    },
    rate: {
      type: Object as PropType<readonly string[]>,
      required: true,
    },
    businessUnit: {
      type: Object as PropType<readonly string[]>,
      required: true,
    },
  },
  setup() {
    const $q = useQuasar();
    const productName = ref('');
    const jiraLink = ref('');

    return {
      modelEmployee: ref(null),
      modelDirector: ref(null),

      productName,
      jiraLink,

      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        });
      },
    };
  },
});
</script>

<template>
  <q-form @submit="onSubmit" class="col-5">
    <main
      class="row q-pa-lg q-gutter-y-md bg-blue-3"
      :style="{ borderRadius: '1.5em' }"
    >
      <q-select
        filled
        v-model="modelEmployee"
        input-debounce="0"
        :options="employees"
        label="Менеджер"
        class="col-8 text-h6"
      >
        <template v-slot:prepend>
          <q-icon name="person" class="q-pa-sm" />
        </template>
      </q-select>

      <q-select
        filled
        v-model="modelDirector"
        input-debounce="0"
        :options="directors"
        label="Менеджер"
        class="col-8 text-h6"
      >
        <template v-slot:prepend>
          <q-icon name="person" class="q-pa-sm" />
        </template>
      </q-select>

      <q-input
        filled
        v-model="modelProductName"
        label="Название продукта"
        class="col-8 text-h6 q-pb-lg"
      />

      <q-separator class="test col-12" :style="{ padding: '1px' }" />

      <q-input
        filled
        v-model="modelJiraLink"
        label="Ссылка в Jira"
        prefix="https://"
        class="col-12 text-h6"
      >
      </q-input>

      <q-select
        filled
        v-model="modelDomain"
        input-debounce="0"
        :options="domains"
        label="Домен"
        class="col-12 text-h6"
      >
      </q-select>

      <div class="row justify-end col-12 q-pt-md">
        <q-btn label="Создать" type="submit" color="primary" unelevated />
      </div>
    </main>
  </q-form>
</template>
