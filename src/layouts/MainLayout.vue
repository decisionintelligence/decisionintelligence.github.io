<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="tw-bg-white tw-h-14 tw-text-black tw-border-b-2 tw-border-gray-200" height-hint="150"
    >
      <q-tabs align="center" v-if="screen.width>640">
        <router-link exact to="/index"
                     class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center"
                     active-class="tw-text-black">主页
        </router-link>
        <router-link to="/papers"
                     class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center"
                     active-class="tw-text-black">成果
        </router-link>
        <router-link to="/member"
                     class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center"
                     active-class="tw-text-black">成员
        </router-link>
        <router-link to="/project"
                     class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center"
                     active-class="tw-text-black">项目
        </router-link>
        <router-link to="/recruit"
                     class="tw-m-4 tw-text-gray-400 hover:tw-bg-amber-500 hover:tw-text-black tw-rounded tw-w-14 tw-h-8 tw-text-center"
                     active-class="tw-text-black">招聘
        </router-link>
      </q-tabs>
      <div v-else style="float: right">
        <q-fab flat  external-label icon="menu" direction="down">
          <q-fab-action class="tw-bg-white" label="首页" to="/index" />
          <q-fab-action class="tw-bg-white" label="成果" to="/papers"/>
          <q-fab-action class="tw-bg-white" label="成员" to="/member"/>
          <q-fab-action class="tw-bg-white" label="项目" to="/project"/>
          <q-fab-action class="tw-bg-white" label="招聘" to="/recruit"/>
        </q-fab>
      </div>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>


    <div class="tw-w-full  tw-h-24" style="background-color: #FAFAFA">
      <div class="tw-grid tw-pt-5 tw-mt-auto md:tw-grid-cols-3 tw-gap-3 tw-place-items-center">
        <div>
          地址：上海市普陀区中山北路3663号
        </div>
        <div>
          邮箱：XXXX[at]mail[dot]com
        </div>
        <div>
          电话：021-XXXXXXX
        </div>
      </div>
    </div>

  </q-layout>
</template>
<script setup>
import {useQuasar} from "quasar";

const $q = useQuasar();
let screen = $q.screen;


</script>
