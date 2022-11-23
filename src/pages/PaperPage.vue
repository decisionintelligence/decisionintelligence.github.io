<template>
  <q-page padding class="md:tw-container md:tw-m-auto tw-leading-8">

    <transition
      appear
      enter-active-class="animated  fadeInDown"
      leave-active-class="animated  fadeOutUp"
    >
    <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element">成果</div>
    </transition>
    <div v-if="data" class="md:tw-m-auto tw-pt-6">
      <div class="tw-grid  tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-y-5 tw-gap-x-10
       tw-m-auto" style="height: 70vh">
        <div  class="tw-shadow-md tw-border-gray-200 tw-border
        hover:tw-cursor-pointer
         hover:tw-scale-105
         tw-text-center tw-flex-col tw-flex  tw-justify-center  tw-rounded-2xl "
                v-for="(item,idx) in data" :key="idx+4567"
                :id="idx"
        @click="()=>{router.push('/paper/'+idx)}"
        >
          <div class="tw-text-xl tw-text-gray-900" >
            {{ item.section.slice(2, item.section.length) }}
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
import State from '../state'

let router = useRouter();
let data = ref(null)

let toggle = ref([].fill(false, 0, 10))
State.getPaper().then(d => {
  data.value = d['data']
}).then(() => {
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

})

</script>


<style scoped>
ul {
  list-style-type: dot;
}
.my-element {
  animation-duration: 1.5s; /* don't forget to set a duration! */
}


</style>
