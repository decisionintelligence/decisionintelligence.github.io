<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="tw-bg-blue-500" height-hint="150">


      <q-tabs align="center">
        <q-route-tab to="/" label="主页" active-class="tw-bg-red-200" />
        <q-route-tab to="/papers" label="成果" />
        <q-route-tab to="/page3" label="成员" />
        <q-route-tab to="/page3" label="项目" />
        <q-route-tab to="/page3" label="招聘" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script setup>

</script>
