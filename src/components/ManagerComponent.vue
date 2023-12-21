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
    const selectedDomains = ref(props.domains);
    const productName = ref('');
    const jiraLink = ref('');

    return {
      model: ref(null),
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
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div class="bg-cyan row q-pa-lg" :style="{ borderRadius: '1.5em' }">
      <q-select
        filled
        v-model="model"
        use-input
        input-debounce="0"
        label="Simple filter"
        :options="selectedDomains"
        @filter="filterFn"
        class="col-12"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </div>
  </q-form>
</template>
