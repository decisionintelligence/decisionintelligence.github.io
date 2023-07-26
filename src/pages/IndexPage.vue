<template>
  <q-page>
    <div class="md:tw-w-2/3 md:tw-m-auto">
      <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
        <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element" style="color: #4e83fd">NEWS</div>
      </transition>
      <div v-if="news" class="tw-overflow-y-scroll tw-overflow-hidden" style="height: 32vh">
        <div
          class="q-mt-md tw-shadow-md tw-p-4 tw-my-2 tw-bg-gray-50 tw-border-l-4 tw-border-gray-300 dark:border-gray-500 dark:bg-gray-800"
          v-for="(item, idx) in news " :key="idx">
          <span class="tw-font-semibold"> {{ item.date }}</span>
          {{ item.content }}
        </div>
      </div>
      <div v-else class="tw-overflow-y-scroll tw-overflow-hidden " style="height: 32vh;">
        <div
          class="tw-animate-pulse tw-bg-white tw-w-full tw-h-1/3 tw-mt-10 tw-border tw-p-4 tw-rounded tw-my-2 tw-border-gray-300"
          v-for="(item, idx) in 4" :key="idx + 56751">
          <div class="tw-w-11/12 tw-ml-4 tw-bg-slate-100 tw-h-1/5 tw-mt-2  tw-rounded "></div>
          <div class="tw-w-1/3 tw-ml-4 tw-bg-slate-100 tw-h-1/5 tw-mt-1 "></div>
        </div>
      </div>
    </div>

    <q-separator class="tw-m-10" />
    <div class="tw-w-full  tw-m-0 tw-q-0">

      <div class="md:tw-w-2/3 tw-m-auto">
        <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
          <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element" style="color: #4e83fd;">
            决策智能实验室（Decision Intelligence
            Lab）
          </div>
        </transition>

        <div>

          <p class="tw-flex tw-justify-center tw-m-5 tw-font-light">
            {{ lab_desc }}
          </p>
          <ol class="tw-list-disc
        md:tw-list-none
        md:tw-grid
        md:tw-grid-cols-5
        md:tw-justify-center
        md:tw-w-full

        md:tw-m-auto
      ">
            <li class="
        tw-m-4 
        hover:tw-bg-slate-100 
        hover:tw-cursor-pointer
        " v-for="(i, idx) in research" :key="idx">
              <a :href="i.destination">
                <div class="row">
                  <div class="col-6">
                    <div class="tw-pt-3">{{ i.name }} </div>
                  </div>
                  <div class="col-6 tw-m-0">
                    <q-icon :name="outlinedArrowRightAlt" color="primary" size="md" class="tw-m-2 arrow my-element" />
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>


  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import { outlinedArrowRight, outlinedArrowRightAlt } from "@quasar/extras/material-icons-outlined";

let $q = useQuasar();
let screen = ref($q.screen)
let research = ref([{ name: '时间序列分析', url: 'papers#1', destination: '/paper/0', id: 0 },
{ name: '时空数据分析', url: 'papers#2', destination: '/paper/1', id: 3 },
{ name: '图分析', url: 'papers#3', destination: '/paper/2', id: 6 },
{ name: '自动机器学习(AutoML)', url: 'papers#4', destination: '/paper/3', id: 1 },
{ name: 'AI for Science', url: 'papers#5', destination: '/paper/4', id: 4 },
{ name: '模型轻量化', url: 'papers#6', destination: '/paper/5', id: 7 },
{ name: '异常检测', url: 'papers#7', destination: '/paper/6', id: 2 },
{ name: '预测', url: 'papers#8', destination: '/paper/7', id: 5 },
{ name: '智能决策', url: 'papers#9', destination: '/paper/8', id: 8 },
{ name: '迁移学习与模型泛化性', url: 'papers#10', destination: '/paper/9', id: 9 },
]);
// sort research by id
research.value.sort((a, b) => a.id - b.id)

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
  display: none;
  /* Chrome Safari */
}

.my-element {
  animation-duration: 1.5s;
  /* don't forget to set a duration! */
}


.arrow {
  animation: bounce 1s infinite;
  /*animation-duration: 3s;*/
}

@keyframes bounce {

  0%,
  100% {
    transform: translatex(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translatex(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.block {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  justify-content: center;
  z-index: 1;
}

.block a {
  z-index: 2;
  color: black;
}

.block::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(#00ccff, #d500f9);
  animation: rotate 4s linear infinite;
}

.block::after {
  content: '';
  position: absolute;
  inset: 1px;
  background: transparent;
  z-index: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
