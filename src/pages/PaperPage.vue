<template>
  <q-page padding class="md:tw-container md:tw-m-auto tw-leading-8">
    <div class="tw-h-2/3 md:tw-absolute tw-w-full ">
      <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
        <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element" style="color: #4e83fd">科研成果</div>
      </transition>
      <div class="tw-flex tw-justify-center tw-m-2 ">
        实验室科研成果应用于绿色交通、智能运维、智慧城市、AIOps、数字能源、智能水资源管理、数字孪生、分子设计和药物设计等领域。
      </div>
      <div v-if="data" class="md:tw-m-auto tw-pt-6 tw-h-full">
        <div class="tw-grid  tw-h-full tw-grid-cols-1 md:tw-grid-cols-5 md: tw-gap-y-5 tw-gap-x-10">
          <div class="tw-border-gray-300 tw-border
        hover:tw-cursor-pointer
         hover:tw-scale-105
         hover:tw-bg-blue-50
         tw-transition-all tw-duration-700 tw-ease-in-out
         tw-text-center tw-flex-col tw-flex  tw-justify-center  tw-rounded-2xl " v-for="(item, idx) in data"
               :key="idx + 4567" :id="idx" @click="() => { router.push('/paper/' + idx) }">
            <div class="tw-text-lg tw-text-gray-800">
              {{ item.section.slice(2, item.section.length) }}
            </div>
            <div class="tw-m-3 tw-text-gray-400 ">
              {{ item.tag }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="md:tw-m-auto tw-pt-6 tw-h-full">
        <div class="tw-grid  tw-h-full tw-grid-cols-1 md:tw-grid-cols-3 md: tw-gap-y-5 tw-gap-x-10">
          <div class="tw-border-gray-300 tw-border
         tw-animate-pulse
         tw-text-center tw-flex-col tw-flex  tw-justify-center  tw-rounded-2xl " v-for="(item, idx) in 9"
               :key="idx + 4567" :id="idx">
            <div class="tw-bg-slate-200 tw-m-auto tw-w-1/3 tw-h-3.5  tw-rounded-2xl"></div>
            <div class="tw-bg-slate-200 tw-mt-3 tw-m-auto tw-w-1/2 tw-h-3.5  tw-rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {onMounted, ref, nextTick} from 'vue'
import {api} from "boot/axios";
import {useRouter} from "vue-router";
import * as paperData from '../assets/paper_table.json'


let router = useRouter();
let data = ref(null)

let toggle = ref([].fill(false, 0, 10))
data.value = paperData.default[0]['data']['data']
nextTick(() => {
  let hash = router.currentRoute.value.hash
  if (hash) {
    let el = document.getElementById(hash.slice(1).toString()).getBoundingClientRect().top
    let offsetPosition = el - 100
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

})

</script>


<style scoped>
ul {
  list-style-type: dot;
}

.my-element {
  animation-duration: 1.5s;
  /* don't forget to set a duration! */
}
</style>
