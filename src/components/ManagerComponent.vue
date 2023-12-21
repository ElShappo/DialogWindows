<script lang="ts">
import { useQuasar } from 'quasar';
import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ManagerComponent',
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
  setup(props) {
    const $q = useQuasar();
    const selectedManagers = ref(props.managers);
    const selectedDomains = ref(props.domains);
    const productName = ref('');
    const jiraLink = ref('');

    return {
      modelManager: ref(null),
      modelProductName: ref(null),
      modelJiraLink: ref(null),
      modelDomain: ref(null),

      selectedManagers,
      selectedDomains,
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
      onReset() {
        // name.value = null
        // age.value = null
        // accept.value = false
      },
      filterFn(value: string, update: (doneFn: () => void) => void) {
        if (value === '') {
          update(() => {
            selectedDomains.value = props.domains;
          });
          return;
        }

        update(() => {
          const needle = value.toLowerCase();
          selectedDomains.value = props.domains.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
});
</script>

<template>
  <q-form @submit="onSubmit" @reset="onReset" class="col-5">
    <section
      class="bg-cyan-3 row q-pa-lg q-gutter-y-md"
      :style="{ borderRadius: '1.5em' }"
    >
      <q-select
        filled
        v-model="modelManager"
        input-debounce="0"
        :options="selectedManagers"
        label="Менеджер"
        class="col-12 text-h6"
      >
        <template v-slot:prepend>
          <q-icon name="person" class="q-pa-sm" />
        </template>
        <template v-slot:label>
          <div class="q-pb-md">Менеджер</div>
        </template>
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> Нет совпадений </q-item-section>
          </q-item>
        </template>
      </q-select>

      <q-input
        filled
        v-model="modelProductName"
        label="Название продукта"
        class="col-12 text-h6"
      />

      <q-input
        filled
        v-model="modelJiraLink"
        label="Ссылка в Jira"
        class="col-12 text-h6"
      />

      <q-select
        filled
        v-model="modelDomain"
        input-debounce="0"
        :options="selectedDomains"
        label="Домен"
        class="col-12 text-h6"
      >
        <template v-slot:label>
          <div class="q-pb-md">Домен</div>
        </template>
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> Нет совпадений </q-item-section>
          </q-item>
        </template>
      </q-select>

      <div class="row justify-end col-12 q-pt-md">
        <q-btn label="Создать" type="submit" color="primary" />
        <!-- <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        /> -->
      </div>
    </section>
  </q-form>
</template>
