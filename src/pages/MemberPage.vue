<template>
  <q-page padding class="md:tw-w-2/3 tw-m-auto ">

    <div class="tw-mt-5 tw-h-full ">
      <transition
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated  fadeOutUp"
      >
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element"> 导师</div>
      </transition>
      <div class="tw-grid tw-grid-cols-1 tw-gap-6  md:tw-flex md:tw-justify-evenly tw-h-full">
        <div v-for="(item,idx) in teacher" :key="idx" id="teacher">
          <my-card class="tw-h-full" :pic="item.pic" :name="item.name" :link="item.link" :tag="item.tag.split(',')"
                   :desc="item.desc"></my-card>
        </div>
      </div>
    </div>

    <q-separator class="tw-m-10"/>

    <div class="tw-mt-5  ">
      <transition
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated  fadeOutUp"
      >
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element">博士生</div>
      </transition>
      <div
           class="tw-grid tw-grid-rows-[300px] tw-grid-cols-1 tw-gap-3 md:tw-grid-cols-3 md:tw-gap-3">
        <div v-for="(item,idx) in doctor" :key="idx+1214" class="tw-h-full">
          <my-card  class="md:tw-w-2/3 tw-m-auto tw-h-full" :pic="item.pic" :name="item.name" :link="'#'"
                   :tag="item.tag.split(',')"
                   :desc="item.desc" mode="vertical">
          </my-card>

        </div>
      </div>
    </div>
    <q-separator class="tw-m-10"/>
    <div class="tw-mt-5  ">
      <transition
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated  fadeOutUp"
      >
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element">硕士生</div>
      </transition>
      <div
           class="tw-grid tw-grid-rows-[300px] tw-grid-cols-1 tw-gap-3 md:tw-grid-cols-3 md:tw-gap-3">
        <div v-for="(item,idx) in master" :key="idx+1214" class="tw-h-full">
          <my-card class="md:tw-w-2/3 tw-m-auto tw-h-full" :pic="item.pic" :name="item.name" :link="'#'"
                   :tag="item.tag.split(',')"
                   :desc="item.desc" mode="vertical"></my-card>
        </div>
      </div>

    </div>

    <q-separator class="tw-m-10"/>

    <div class="tw-mt-5  ">
      <transition
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated  fadeOutUp"
      >
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element">alumni</div>
      </transition>
      <div
           class="tw-grid tw-grid-rows-[300px] tw-grid-cols-1 tw-gap-3 md:tw-grid-cols-3 md:tw-gap-3">
        <div v-for="(item,idx) in alumni" :key="idx+1214" class="tw-h-full" >
          <my-card class="md:tw-w-2/3 tw-m-auto tw-h-full" :pic="item.pic" :name="item.name" :link="'#'"
                   :tag="item.tag?.split(',')"
                   type="alumni"
                   :desc="item.desc" mode="vertical"></my-card>
        </div>
      </div>
    </div>


  </q-page>
</template>

<script setup>

import {onMounted, ref} from "vue";
import MyCard from "../components/MyCard"
import {api} from "boot/axios";
import {useQuasar} from "quasar";

let $q = useQuasar();
let screen = $q.screen
let teacher = ref(null)
let master = ref(null)
let doctor = ref(null)
let alumni = ref(null)
api.get('/members').then(res => res.data).then(d => {
  teacher.value = d['teacher']
  doctor.value = d['doctor']
  master.value = d['master']
  alumni.value = d['alumni']
})
  .then(() => {
    let myElement = document.getElementById('teacher')
  })



</script>
<style scoped>

.my-element {
  animation-duration: 1.5s; /* don't forget to set a duration! */
}

</style>
