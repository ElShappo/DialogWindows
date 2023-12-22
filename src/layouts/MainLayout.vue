<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {
      alert: ref(false),
    };
  },
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <nav class="row">
        <div class="col">
          <q-btn
            to="/"
            color="primary"
            label="Главная"
            icon="home"
            class="text-h4 text-white q-pa-lg"
            flat
            no-caps
          />
          <q-btn
            to="/table"
            color="primary"
            label="Таблица"
            icon="table_chart"
            class="text-h4 text-white q-pa-lg"
            flat
            no-caps
          />
          <q-btn
            color="primary"
            label="FAQ"
            icon="help"
            @click="alert = true"
            class="text-h4 text-white q-pa-lg"
            flat
            no-caps
          />
        </div>
        <div class="col row justify-end">
          <q-btn
            color="primary"
            label="CV"
            target="_blank"
            href="https://hh.ru/resume/517802e0ff0b4c11110039ed1f4f5177584a54"
            icon="badge"
            class="text-h4 text-white q-pa-lg"
            flat
            no-caps
          />
          <q-btn
            color="primary"
            label="Мой веб-сайт"
            target="_blank"
            href="https://elshappo.netlify.app/"
            icon="web"
            class="text-h4 text-white q-pa-lg"
            flat
            no-caps
          />
          <q-btn
            color="primary"
            label="GitHub"
            target="_blank"
            href="https://github.com/ElShappo"
            class="text-h4 text-white q-pa-lg"
            flat
            no-caps
          />
        </div>
      </nav>
    </q-header>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Кратко о написанном компоненте</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Был написан универсальный компонент (UniversalDialogWindows.vue),
          который принимает в себя произвольное число окон (т.е. табов в рамках
          единственного диалогового окна, где каждый таб определяется
          компонентом UniversalTab.vue: каждый такой таб также полностью
          конфигурируем и может иметь произвольное кол-во полей разных видов).
          <br />
          <br />
          Каждое из таких полей представляет собой input произвольного типа
          (выбор из множества, текстовый ввод, ввод числа). Более подробно с
          тем, какими свойствами описывается каждое поле, можно ознакомиться в
          файле types.ts.
          <br />
          <br />
          Для того, чтобы убедиться, что отправка формы работает, как следует,
          был написан сервер (на Serverless функциях, предоставляемых Netlify),
          куда данные формы отправляются через POST-запрос.
          <br />
          <br />
          На странице "Таблица" отображаются добавленные данные из формы
          (которые получаются GET-запросом с сервера). Написанный универсальный
          компонент адаптивен, на больших экранах строки каждого таба
          располагаются в 2-х столбцах.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
