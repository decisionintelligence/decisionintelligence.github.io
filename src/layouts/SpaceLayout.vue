
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="tw-bg-transparent">
      <q-tabs class="tw-text-black">
        <q-route-tab label="文件"  to="/space/file">
        </q-route-tab>
        <q-route-tab label="博客"  to="/space/blog" >
        </q-route-tab>
        <q-route-tab  to="/space/upload" label="上传">
        </q-route-tab>
      </q-tabs>
    </q-header>
    <q-page-container >
      <router-view class="tw-bg-gray-200" />
    </q-page-container>

  </q-layout>
</template>


<script setup>
</script>

