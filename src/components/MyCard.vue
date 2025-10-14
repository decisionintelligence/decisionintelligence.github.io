<template>
  <div class="tw-h-full card">
    <!--    <a v-if="mode==='horizontal'" :href="link" target="_blank" class="tw-bg-white tw-w-full-->
    <!--    tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md" style="height: 20vw;">-->
    <!--      <div class=" tw-grid tw-grid-rows-5">-->
    <div style="min-height: 220px" v-if="mode === 'horizontal'" @click="goTo(link)"
      class="tw-rounded-lg tw-border tw-border-gray-200 tw-h-full hover:tw-cursor-pointer">
      <img :src="picUrl" @load="onLoad" style="width: 150px; height: 200px"
        class="tw-float-left tw-mr-4 tw-object-contain tw-mt-2" />
      <div class="row tw-mt-2 tw-mb-2 tw-text-xl tw-font-bold tw-tracking-tight tw-text-gray-900">
        {{ name }}
      </div>
      <div class="row tw-m-2">
        <span class="tw-text-gray-400 tw-mr-2" v-for="(t, idx) in tag" :key="idx">{{ t }}</span>
      </div>
      <div class="tw-pl-2 tw-ml-2 tw-tracking-wider tw-leading-7">
        {{ desc }}
      </div>
    </div>


    <div v-else-if="mode === 'vertical'"
      class="tw-bg-white tw-m-auto  tw-h-full  tw-border tw-border-gray-200 tw-text-center" style="max-width: 230px;"
      @click="link ? goTo(link) : null">
      <img style="width:160px;height: 160px" v-if="type !== 'alumni'"
        class="tw-object-contain tw-rounded-l-lg tw-m-auto tw-pt-1" :src="picUrl" @load="onLoad">
      <div>
        <!-- class="tw-object-contain tw-rounded-l-lg tw-m-auto tw-pt-1" :src="require('../assets/img/' + picUrl)"> -->


        <div class="tw-mt-1" :class="link ? 'tw-text-blue-500 hover:tw-cursor-pointer' : 'tw-text-gray-900'">
          {{ name }}
        </div>
        <div class="tw-mt-1">{{ desc }}</div>
        <div class="tw-text-gray-400 tw-break-all">
          {{ tag.join(",") }}
          <!--        <span v-for="(t,idx) in tag" class="tw-text-gray-400 tw-pl-1" :key=idx+100>-->
          <!--          {{ t }}-->
          <!--        </span>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'MyCard',
  props: {
    pic: String,
    name: String,
    tag: Array,
    desc: String,
    link: String,
    type: String,
    mode: {
      type: String,
      default: "horizontal",
    },
  },

  setup(props) {
    // let picUrl = props.pic.split("/").at(-1);
    // let picUrl = "https://fastly.jsdelivr.net/gh/decisionintelligence/decisionintelligence.github.io@code/src/assets/img_low/" + props.pic.split("/").at(-1);
    let lowResUrl = new URL('../assets/img_low_new/' + props.pic.split("/").at(-1), import.meta.url).href;
    let highResUrl = new URL('../assets/img/' + props.pic.split("/").at(-1), import.meta.url).href;
    const picUrl = ref(lowResUrl)
    console.log(picUrl.value)
    function getAssets(url) {
      return new URL(url, import.meta.url).href;
    }
    function onLoad() {
      // 如果当前加载的是 lowRes，就加载 highRes
      console.log('高清图加载')
      if (picUrl.value === lowResUrl) {
        console.log('高清图加载成功')
        const img = new Image()
        img.src = highResUrl
        img.onload = () => {
          picUrl.value = highResUrl
        }
      }
    }
    const goTo = (link) => {
      window.open(link, "_blank");
    };
    return {
      goTo,
      picUrl,
      getAssets,
      onLoad,
    };
  },
};
</script>
