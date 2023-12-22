<script lang="ts">
import { useQuasar } from 'quasar';
import {
  DialogAnyField,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  DialogNumberField,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    const inputModels = ref(new Array(props.inputs.length));
    const inputRefs = ref([]);

    return {
      inputModels,
      inputRefs,

      onSubmit() {
        let hasErrors = false;
        console.log('Running onSubmit');
        for (let inputRef of inputRefs.value) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((inputRef as any).hasError) {
            hasErrors = true;
          }
        }
        if (!hasErrors) {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Успешно!',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Форма составлена некорректно!',
          });
        }
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
          bottom-slots
          v-model="inputModels[index]"
          ref="inputRefs"
          input-debounce="0"
          lazy-rules
          :rules="input.rules"
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
          v-else-if="input.inputType === 'number'"
          type="number"
          filled
          lazy-rules
          v-model="inputModels[index]"
          ref="inputRefs"
          :label="input.label"
          :prefix="input.prefix"
          :rules="(input as DialogNumberField).rules"
          :class="input.class"
        />
        <q-input
          v-else
          filled
          lazy-rules
          :rules="input.rules"
          v-model="inputModels[index]"
          ref="inputRefs"
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
