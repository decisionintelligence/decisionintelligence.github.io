<template>
  <q-page padding class="md:tw-container md:tw-m-auto tw-leading-8">
    <div v-if="data" class="md:tw-w-2/3 md:tw-m-auto tw-m-2">
      <blockquote class="tw-m-5 ">时间序列分析，时空数据分析，图分析，自动机器学习（AutoML ）, AI for
        Science，智能决策，异常检测，预测，模型轻量化
      </blockquote>
      <div class="tw-grid ">
        <q-expansion-item class="q-mt-md tw-shadow-md
          tw-p-4 tw-my-4
          hover:tw-bg-gray-50
          tw-bg-gray-50 tw-border-l-4 tw-border-gray-300 dark:border-gray-500 dark:bg-gray-800"
                          v-for="(item,idx) in data" :key="idx+4567" :label="item.section" v-model="toggle[idx]"
                          :id="idx"

        >
          <q-card>
            <q-card-section>
              {{ item.desc }}
            </q-card-section>
            <q-card-section>
              <button type="button"
                      class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-full tw-text-sm
                        tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2 dark:tw-bg-blue-600 dark:tw-hover:bg-blue-700 dark:focus:ring-blue-800"
                      @click="()=>{router.push('/paper/'+idx)}"
              >Read More
              </button>
            </q-card-section>
          </q-card>
        </q-expansion-item>
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


</style>
