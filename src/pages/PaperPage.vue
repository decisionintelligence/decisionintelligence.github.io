<template>
  <q-page padding class="md:tw-container md:tw-m-auto tw-leading-8">
    <div v-if="data" class="md:tw-w-2/3 md:tw-m-auto tw-m-2">
      <blockquote class="tw-m-5 ">时间序列分析，时空数据分析，图分析，自动机器学习（AutoML ）, AI for
        Science，智能决策，异常检测，预测，模型轻量化
      </blockquote>
      <div v-for="(item,id) in data" :key="id">
        <div class="tw-text-2xl tw-mt-10 tw-leading-10 tw-p-4 tw-my-4 tw-bg-gray-50 tw-border-l-4 tw-border-gray-300"
             :id="id+1">
          {{ item.section }}
        </div>

        <p class="tw-m-5">{{ item.desc }}</p>

        <div v-for="(sub,sub_idx) in item.content" :key="sub_idx+id*id ">

          <div class="text-h6 tw-pl-2 tw-mb-3">
            {{ sub.subsection }}
          </div> <!--tw-border-l-4 tw-pl-5 tw-border-l-blue-500 -->
          <div class="tw-p-3" v-for="(sub_item,idx) in sub.content" :key="idx+sub_idx+1+id*id">
            <div class="tw-m-2 tw-pl-2">
              <p class="text-weight-bold">{{ sub_item.title }}</p>
              <ul class="tw-list-disc	">
                <li v-for="(paper,i) in sub_item.papers" :key="idx *(i+100)">{{ paper }}</li>
              </ul>
            </div>
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

let router = useRouter();
let data = ref(null)
api.get('/papers').then(res => res.data).then(d => {
  data.value = d['data']
}).then(() => {
  nextTick(() => {

    let hash = router.currentRoute.value.hash
    if (hash) {
      let element = document.getElementById(hash.slice(1).toString())
      let el = document.getElementById(hash.slice(1).toString()).getBoundingClientRect().top
      let offsetPosition = el - 100
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }


  })
})

onMounted(() => {


})

</script>


<style scoped>
ul {
  list-style-type: dot;
}

</style>
