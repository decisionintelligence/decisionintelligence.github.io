
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="tw-bg-transparent">
      <q-toolbar>
<!--          <q-breadcrumbs>-->
<!--            <q-breadcrumbs-el label="Home" />-->
<!--            <q-breadcrumbs-el label="Components" />-->
<!--            <q-breadcrumbs-el label="Breadcrumbs" />-->
<!--          </q-breadcrumbs>-->

        <q-btn class="tw-text-zinc-900" dense flat round icon="menu" @click="drawer=!drawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="right" bordered>
      <!-- 其他导航栏 -->


    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<script setup>
import { ref } from 'vue'
import { useQuasar } from "quasar";
const drawer = ref(false)
const $q = useQuasar();
const screen = $q.screen;
</script>

