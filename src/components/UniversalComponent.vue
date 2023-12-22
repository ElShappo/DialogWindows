<script lang="ts">
import { useQuasar } from 'quasar';
import {
  DialogAnyField,
  DialogNumberField,
  DialogSelectField,
} from 'src/types';
import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ManagerComponent',
  props: {
    inputs: {
      type: Object as PropType<DialogAnyField[]>,
      required: true,
    },
  },
  setup(props) {
    const $q = useQuasar();
    const inputRefs = ref(new Array(props.inputs.length));

    return {
      inputRefs,

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
  <q-form @submit="onSubmit">
    <main
      class="row q-pa-lg q-gutter-y-md bg-blue-3 bg-red"
      :style="{ borderRadius: '1.5em' }"
    >
      <template v-for="(input, index) in inputs" :key="input.label">
        <q-select
          v-if="input.inputType === 'select'"
          filled
          v-model="inputRefs[index]"
          input-debounce="0"
          :options="(input as DialogSelectField).availableValues"
          :label="input.label"
          :prefix="input.prefix"
          :class="input.class"
        >
          <template v-slot:prepend>
            <q-icon :name="input.iconName" class="q-pa-sm" />
          </template>
        </q-select>

        <q-input
          v-else-if="input.inputType === 'text'"
          filled
          v-model="inputRefs[index]"
          :label="input.label"
          :prefix="input.prefix"
          :class="input.class"
        />
      </template>
      <div class="row justify-end col-12 q-pt-md">
        <q-btn label="Создать" type="submit" color="primary" unelevated />
      </div>
    </main>
  </q-form>
</template>
