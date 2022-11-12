<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="tw-bg-white tw-h-14 tw-text-black tw-border-b-2 tw-border-gray-200" height-hint="150"

    >


      <q-tabs align="center">
        <router-link exact to="/index"  class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center" active-class="tw-text-black">主页</router-link>
        <router-link to="/papers" class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center" active-class="tw-text-black" >成果</router-link>
        <router-link to="/member" class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center" active-class="tw-text-black">成员</router-link>
        <router-link to="/project" class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center" active-class="tw-text-black">项目</router-link>
        <router-link to="/hire" class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center" active-class="tw-text-black">招聘</router-link>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script setup>

</script>
