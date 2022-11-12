<template  >
  <q-page padding>
    <div class="md:tw-w-2/3 md:tw-m-auto">
      <q-carousel
        arrows
        animated
        swipeable
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        v-model="slide"
        height="400px"
      >
        <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Second stop</div>
            <div class="text-subtitle1">Famous City</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Third stop</div>
            <div class="text-subtitle1">Famous Bridge</div>
          </div>
        </q-carousel-slide>
      </q-carousel>

    </div>

    <q-separator class="tw-m-10" />

    <div class="md:tw-w-2/3 tw-m-auto">
      <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl">研究方向</div>
      <div v-if="screen.width>768" class="row flex justify-evenly">
        <div class="col-3">
          <ul class="tw-list-disc">
            <li class="tw-m-4 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(item,idx) in research.slice(0,4)" :key="idx+1243">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="col-3">
          <ul class="tw-list-disc">
            <li class="tw-m-4 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(item,idx) in research.slice(4,8)" :key="idx+12432">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <ul class="tw-list-disc">
          <li class="tw-m-4 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(item,idx) in research" :key="idx+1243" >
            {{item}}
          </li>
        </ul>
      </div>
    </div>

<!--    <q-separator class="tw-m-10" />-->
<!--    <div class="md:tw-w-2/3 tw-m-auto">-->
<!--      <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl">快讯</div>-->

<!--      <div>-->
<!--      -->
<!--      </div>-->


<!--    </div>-->

  </q-page>
</template>

<script setup>
import {ref} from "vue";
import {useQuasar} from "quasar";


let $q = useQuasar();
let screen = ref($q.screen)
let research = ref(['时间序列分析（预测，异常检测）', ' 时空数据分析（状态预估，偏好识别，决策）', '图分析', '自动机器学习（AutoML）', 'AI for Science', '模型轻量化', '异常检测', '预测'])
let slide = ref("first")
let autoplay = ref(true)
</script>


<style scoped>

</style>
