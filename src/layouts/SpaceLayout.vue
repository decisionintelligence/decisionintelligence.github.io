
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="tw-bg-transparent">
      <q-toolbar>

        <q-btn class="tw-text-zinc-900" dense flat round icon="menu" @click="drawer=!drawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="right" bordered>
      <!-- 其他导航栏 -->
      <q-list>
        <q-item clickable to="/space/file">
          <q-item-section>文件</q-item-section>
        </q-item>
        <q-item clickable to="/space/blog">
          <q-item-section>博客</q-item-section>
        </q-item>

      </q-list>


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

