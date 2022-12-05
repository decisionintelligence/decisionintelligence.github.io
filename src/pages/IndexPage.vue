<template>
  <q-page padding>
    <div class="md:tw-w-2/3 md:tw-m-auto">
      <transition
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated  fadeOutUp"
      >
        <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element">NEWS</div>
      </transition>
      <div v-if="news" class="tw-overflow-y-scroll tw-overflow-hidden" style="height: 32vh">

        <div class="q-mt-md tw-shadow-md tw-p-4 tw-my-2 tw-bg-gray-50 tw-border-l-4 tw-border-gray-300 dark:border-gray-500 dark:bg-gray-800
          "
             v-for="(item,idx) in news " :key="idx"
        >
          <span class="tw-font-semibold"> {{ item.date }}</span>
          &nbsp;
          {{ item.content }}
        </div>

      </div>
    </div>

    <q-separator class="tw-m-10"/>

    <div class="md:tw-w-2/3 tw-m-auto">
      <transition
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated  fadeOutUp"
      >
        <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element">决策智能实验室（Decision Intelligence
          Lab）
        </div>
      </transition>
      <p class="tw-flex tw-justify-center tw-m-5 tw-font-light">{{ lab_desc }}</p>
      <div v-if="screen.width>768" class="row flex justify-evenly">
        <div class="col-3">
          <ul class="tw-list-disc">
            <li class="tw-m-6 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(item,idx) in research.slice(0,3)"
                :key="idx+1243">
              <a :href="item.destination" target="_blank" class="tw-w-full"
                 style="display: inline-block;width: 100%">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <ul class="tw-list-disc">
            <li class="tw-m-6 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(item,idx) in research.slice(3,6)"
                :key="idx+12432">
              <a :href="item.destination" target="_blank" style="display: inline-block;width: 100%">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <ul class="tw-list-disc">
            <li class="tw-m-6 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(item,idx) in research.slice(6,9)"
                :key="idx+12432">
              <a :href="item.destination" target="_blank" style="display: inline-block;width: 100%">{{ item.name }}</a>
            </li>
          </ul>
        </div>


      </div>
      <div v-else>
        <ul class="tw-list-disc">
          <li class="tw-m-4 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(item,idx) in research"
              :key="idx+1243">
            <a :href="item.destination" target="_blank" style="display: inline-block;width: 100%"> {{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>


  </q-page>
</template>

<script setup>
import {ref} from "vue";
import {useQuasar} from "quasar";
import {api} from "boot/axios";


let $q = useQuasar();
let screen = ref($q.screen)
let research = ref([{name: '时间序列分析', url: 'papers#1',destination:'/paper/0'},
  {name: '时空数据分析', url: 'papers#2',destination:'/paper/1'},
  {name: '图分析', url: 'papers#3',destination:'/paper/2'},
  {name: '自动机器学习(AutoML)', url: 'papers#4',destination:'/paper/3'},
  {name: 'AI for Science', url: 'papers#5',destination:'/paper/4'},
  {name: '模型轻量化', url: 'papers#6',destination:'/paper/5'},
  {name: '异常检测', url: 'papers#7',destination:'/paper/6'},
  {name: '预测', url: 'papers#8',destination:'/paper/7'},
  {name: '智能决策', url: 'papers#9',destination:'/paper/8'}]);
let news = ref(null)
api.get('/news').then(res => {
  if (res.status === 200) {
    news.value = res.data
  }
})


let lab_desc = ref("决策智能实验室依托华东师范大学，数据科学与工程学院，具有一只国际化，高水平导师团队，一人入选国家级领军人才，一人入选国家级青年人才。主要研究方向涵盖人工智能、机器学习和数据管理。通过对复杂异构数据（例如时间序列、时空数据、图、图像和分子结构等）进行高精度、高效率、自动的、高鲁棒性、可解释的分析和管理，助力不同行业的数字化转型和不同应用领域的决策支持。")


</script>


<style scoped>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.my-element {
  animation-duration: 1.5s; /* don't forget to set a duration! */
}
</style>
