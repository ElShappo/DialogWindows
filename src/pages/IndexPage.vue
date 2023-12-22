<script lang="ts">
import UniversalDialogWindows from 'src/components/UniversalDialogWindows.vue';
import { Window } from 'src/types';
import {
  businessUnits,
  directors,
  domains,
  employees,
  managers,
  rates,
} from 'src/constants';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { UniversalDialogWindows },
  setup() {
    function checkNotEmpty(val: string | number) {
      if (!val && val !== 0) {
        return 'Поле не может быть пустым';
      }
      return true;
    }
    return {
      checkNotEmpty,
      windows: ref<Window[]>([
        {
          title: 'Данные',
          fields: [
            {
              label: 'Менеджер',
              inputType: 'select',
              iconName: 'person',
              rules: [checkNotEmpty],
              class: ['col-8', 'col-md-5', 'text-h6'],
              availableValues: managers,
            },
            {
              label: 'Название продукта',
              inputType: 'text',
              rules: [checkNotEmpty],
              class: ['col-8', 'col-md-5', 'text-h6'],
            },
            {
              label: 'Ссылка в Jira',
              inputType: 'text',
              rules: [checkNotEmpty],
              prefix: 'https://',
              class: ['col-12', 'col-md-5', 'text-h6'],
            },
            {
              label: 'Домен',
              inputType: 'select',
              iconName: 'person',
              rules: [checkNotEmpty],
              class: ['col-12', 'col-md-5', 'text-h6'],
              availableValues: domains,
            },
          ],
        },
        {
          title: 'Создать сотрудника',
          fields: [
            {
              label: 'Сотрудник',
              inputType: 'select',
              iconName: 'person',
              rules: [checkNotEmpty],
              class: ['col-12', 'col-md-5', 'text-h6'],
              availableValues: employees,
            },
            {
              label: 'Руководитель',
              inputType: 'select',
              iconName: 'person',
              rules: [checkNotEmpty],
              class: ['col-12', 'col-md-5', 'text-h6'],
              availableValues: directors,
            },
            {
              label: 'Тип ставки',
              inputType: 'select',
              iconName: 'person',
              rules: [checkNotEmpty],
              class: ['col-12', 'col-md-5', 'text-h6'],
              availableValues: rates,
            },
            {
              label: 'Бизнес единица',
              inputType: 'select',
              iconName: 'person',
              rules: [checkNotEmpty],
              class: ['col-12', 'col-md-5', 'text-h6'],
              availableValues: businessUnits,
            },
            {
              label: 'Процент капитализации',
              inputType: 'number',
              class: ['col-12', 'col-md-5', 'text-h6'],
              rules: [
                checkNotEmpty,
                (val) => {
                  if (+val < 0 || +val > 100) {
                    return 'Число должно быть в диапазоне от 0 до 100';
                  } else {
                    return true;
                  }
                },
              ],
            },
            {
              label: 'Должность',
              inputType: 'text',
              rules: [checkNotEmpty],
              class: ['col-12', 'col-md-5', 'text-h6'],
            },
          ],
        },
      ]),
    };
  },
});
</script>

<template>
  <q-page
    class="row items-center justify-center page"
    :style="{ width: '100vw' }"
  >
    <UniversalDialogWindows :windows="windows" />
  </q-page>
</template>

<style lang="scss">
.page {
  background: #393d3f;
}
</style>
