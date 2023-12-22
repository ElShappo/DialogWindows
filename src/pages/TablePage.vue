<script lang="ts">
import { POSTBody, POSTRecord } from 'src/types';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const columns = ref([
      {
        name: 'Название окна',
        label: 'Название окна',
        field: (row: POSTRecord) => row.title,
      },
      {
        name: 'Название поля',
        label: 'Название поля',
        field: (row: POSTRecord) => row.label,
      },
      {
        name: 'Значение поля',
        label: 'Значение поля',
        field: (row: POSTRecord) => row.value,
      },
    ]);
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
