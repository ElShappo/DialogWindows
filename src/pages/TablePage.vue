<script lang="ts">
import { POSTBody } from 'src/types';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const columns = ref(['Название окна', 'Название поля', 'Значение поля']);
    const rows = ref<POSTBody>([]);

    onMounted(async () => {
      const response = await fetch('/api/get_records');
      const result = (await response.json()) as POSTBody;
      rows.value = result;
    });

    return {
      columns,
      rows,
    };
  },
});
</script>

<template>
  <q-page
    class="row items-center justify-center page"
    :style="{ width: '100vw' }"
  >
    <div class="q-pa-md">
      <q-table
        title="Сведения о добавленных полях"
        :rows="rows"
        :columns="columns"
        no-data-label="Нет добавленных значений"
      />
    </div>
  </q-page>
</template>
