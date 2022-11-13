<template>
  <q-page padding class="md:tw-w-2/3 tw-m-auto">

    <div class="tw-mt-5">
      <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl"> 导师</div>
    <div class="tw-grid tw-grid-cols-1 tw-gap-6  md:tw-flex md:tw-justify-evenly">
      <div v-for="(item,idx) in teacher" :key="idx">
        <my-card class="tw-h-full" :pic="item.pic" :name="item.name" :link="'#'" :tag="['a','b']"  :desc="item.desc"></my-card>
      </div>
    </div >
    </div>

    <q-separator class="tw-m-10" />

    <div class="tw-mt-5  ">
      <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl">博士生</div>
      <div class="tw-grid tw-grid-cols-1   md:tw-grid-cols-4 md:tw-gap-3">
        <div v-for="(item,idx) in doctor" :key="idx+1214">
          <my-card class="tw-w-2/3 tw-m-auto" :pic="item.pic" :name="item.name" :link="'#'" :tag="['a','b']" :desc="item.desc" mode="vertical"></my-card>
        </div>
      </div>
    </div>
    <q-separator class="tw-m-10" />
    <div class="tw-mt-5  ">
      <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl">硕士生</div>
      <div class="tw-grid tw-grid-cols-1   md:tw-grid-cols-4 md:tw-gap-3">
        <div v-for="(item,idx) in master" :key="idx+1214">
          <my-card class="tw-w-2/3 tw-m-auto" :pic="item.pic" :name="item.name" :link="'#'" :tag="['a','b']" :desc="item.desc" mode="vertical"></my-card>
        </div>
      </div>
    </div>

    <q-separator class="tw-m-10" />

    <div class="tw-mt-5  ">
      <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl">alumni</div>
      <div class="tw-grid tw-grid-cols-1   md:tw-grid-cols-4 md:tw-gap-3">
        <div v-for="(item,idx) in alumni" :key="idx+4455">
          <my-card class="tw-w-2/3 tw-m-auto" :pic="item.pic" :name="item.name" :link="'#'" :tag="['a','b']" :desc="item.desc" mode="vertical"></my-card>
        </div>
      </div>
    </div>


  </q-page>
</template>

<script setup>

import {ref} from "vue";
import MyCard from "../components/MyCard"
import {api} from "boot/axios";
let teacher = ref(null)
let master = ref(null)
let doctor = ref(null)
let alumni = ref(null)
api.get('/members').then(res=>res.data).then(d=>{
  console.log(d)
  teacher.value = d['teacher']
  doctor.value = d['doctor']
  master.value = d['master']
  alumni.value = d['alumni']
})


</script>
