<template>
  <q-page padding class="md:tw-w-2/3 tw-m-auto ">

    <div class="tw-mt-5 tw-h-full ">
      <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element" style="color: #4e83fd"> 导师
        </div>
      </transition>
      <div v-if="teacher" class="tw-grid tw-grid-cols-1 tw-gap-6  md:tw-grid-cols-2 md:tw-justify-evenly tw-h-full">
        <div v-for="(item, idx) in teacher" :key="idx" id="teacher">
          <my-card class="tw-h-full" :pic="item.pic" :name="item.name" :link="item.link" :tag="item.tag.split(',')"
            :desc="item.desc"></my-card>
        </div>
      </div>
      <div v-else
        class="tw-grid tw-grid-cols-1 tw-gap-6 md:tw-flex md:tw-justify-evenly tw-h-full md:tw-w-full md:tw-relative">
        <div v-for="(item, idx) in 2" :key="idx">
          <div class="tw-border  tw-shadow tw-rounded-md tw-p-4 tw-max-w-sm  tw-mx-auto"
            style="width: 400px;height: 200px">
            <div class="tw-animate-pulse tw-flex tw-space-x-4 tw-w-full tw-h-full">
              <div class="tw-rounded tw-bg-slate-200 tw-h-2/3 tw-w-1/3"></div>
              <div class="tw-flex-1 tw-space-y-6 tw-py-1">
                <div class="tw-grid tw-grid-cols-3 tw-gap-4">
                  <div class="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-1"></div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-gap-4">
                  <div class="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-2"></div>
                </div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <q-separator class="tw-m-10" />

    <div class="tw-mt-5  ">
      <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element" style="color: #4e83fd">博士生
        </div>
      </transition>
      <div v-if="doctor"
        class="tw-grid tw-grid-cols-1 tw-grid-rows-[300px] sm:tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-3 tw-relative">
        <div v-for="(item, idx) in doctor" :key="idx + 1214" class="tw-h-72  tw-w-full">
          <my-card class="tw-w-full tw-h-full" :pic="item.pic" :name="item.name" :link="'#'" :tag="item.tag.split(',')"
            :desc="item.desc" mode="vertical">
          </my-card>

        </div>
      </div>
      <div v-else class="tw-grid tw-grid-cols-4 tw-gap-5 ">
        <div v-for="(item, idx) in 3" :key="idx">
          <div class="tw-border  tw-shadow tw-rounded-md tw-p-4 tw-max-w-sm  tw-mx-auto">
            <div class="tw-animate-pulse tw-flex tw-space-x-4 tw-w-full tw-h-full">
              <div class="tw-rounded tw-bg-slate-200 tw-w-1/2"></div>
              <div class="tw-flex-1 tw-space-y-6 tw-py-1">
                <div class="tw-grid tw-grid-cols-3 tw-gap-4">
                  <div class="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-1"></div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-gap-4">
                  <div class="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-2"></div>
                </div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-separator class="tw-m-10" />
    <div class="tw-mt-5  ">
      <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element" style="color: #4e83fd">硕士生
        </div>
      </transition>
      <div v-if="master"
        class="tw-grid tw-grid-cols-1  tw-m-auto sm:tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-5 tw-relative">
        <div v-for="(item, idx) in master" :key="idx + 5511" class="tw-h-72  tw-w-full">
          <my-card class="tw-w-full tw-h-full" :pic="item.pic" :name="item.name" :link="'#'" :tag="item.tag.split(',')"
            :desc="item.desc" mode="vertical"></my-card>
        </div>
      </div>
      <div v-else class="tw-grid tw-grid-cols-4 tw-gap-5 ">
        <div v-for="(item, idx) in 5" :key="idx">
          <div class="tw-border  tw-shadow tw-rounded-md tw-p-4 tw-max-w-sm  tw-mx-auto">
            <div class="tw-animate-pulse tw-flex tw-space-x-4 tw-w-full tw-h-full">
              <div class="tw-rounded tw-bg-slate-200 tw-w-1/2"></div>
              <div class="tw-flex-1 tw-space-y-6 tw-py-1">
                <div class="tw-grid tw-grid-cols-3 tw-gap-4">
                  <div class="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-1"></div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-gap-4">
                  <div class="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-2"></div>
                </div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
                <div class="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <q-separator class="tw-m-10" />

    <div class="tw-mt-5  ">
      <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
        <div class="tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-3xl my-element" style="color: #4e83fd">alumni
        </div>
      </transition>
      <div v-if="alumni" class="tw-grid  tw-grid-cols-1 tw-gap-4 md:tw-pl-10">
        <div v-for="(item, idx) in alumni" :key="idx + 1214" class="tw-h-full">
          <div class="tw-text-lg tw-font-semibold">
            <span class="tw-text-lg">{{ item.name }}</span>
            <span class="tw-text-base  tw-ml-2 tw-text-gray-400">{{ item.desc }}</span>
          </div>
          <div v-if="item.tag">
            <p v-if="item.link">{{ item.link }}</p>
            <!--            <p class="tw-m-0 tw-p-0" v-if="item.tag.split(',')[0]>15">{{item.tag.split(',')[0]}}</p>-->
            <p>{{ item.tag.split(',').join(' | ') }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="(item, idx) in 4" :key="idx + 7424" style="height: 100px">
          <div class="tw-grid tw-grid-rows-3 tw-gap-3 ">
            <div class="tw-row-span-1 tw-bg-slate-100 tw-w-1/12 tw-h-2"></div>
            <div class="tw-row-span-1 tw-bg-slate-100 tw-w-1/3"></div>
            <div class="tw-row-span-1 tw-bg-slate-100 tw-w-2/3"></div>
          </div>
        </div>

      </div>
    </div>


  </q-page>
</template>

<script setup>

import { onMounted, ref } from "vue";
import MyCard from "../components/MyCard"
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import * as data from '../assets/member_table.json'
let $q = useQuasar();
let screen = $q.screen
let teacher = ref(null)
let master = ref(null)
let doctor = ref(null)
let alumni = ref(null)


let res = data.default
teacher.value = res.filter(item => {
    return item.type === 'teacher'
  })
  doctor.value = res.filter(item => {
    return item.type === 'doctor'
  })
  master.value = res.filter(item => {
    return item.type === 'master'
  })
  alumni.value = res.filter(item => {
    return item.type === 'alumni'
  })

//
// fetch("https://raw.githubusercontent.com/decisionintelligence/files/main/member_table.json").then(res => res.json()).then(res => {
//   teacher.value = res.filter(item => {
//     return item.type === 'teacher'
//   })
//   doctor.value = res.filter(item => {
//     return item.type === 'doctor'
//   })
//   master.value = res.filter(item => {
//     return item.type === 'master'
//   })
//   alumni.value = res.filter(item => {
//     return item.type === 'alumni'
//   })
// })


// api.get('/members').then(res => res.data).then(d => {
//   teacher.value = d['teacher']
//   doctor.value = d['doctor']
//   master.value = d['master']
//   alumni.value = d['alumni']
// })
//   .then(() => {
//     // let cardList = document.querySelectorAll('.card')
//     // const observer = new IntersectionObserver(entries => {
//     //   entries.forEach(entry => {
//     //     if (entry.isIntersecting) {
//     //       entry.target.classList.add('animated', 'fadeInUp','my-element')
//     //     }
//     //   })
//     // }, {
//     //   threshold: [0, 0.25, 0.5, 0.75, 1]
//     // })
//     // cardList.forEach(card => {
//     //   observer.observe(card)
//     // })
//   })

onMounted(() => {

})


</script>
<style scoped>
.my-element {
  animation-duration: 1.5s;
  /* don't forget to set a duration! */
}
</style>
