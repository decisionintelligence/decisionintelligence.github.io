<template>
  <div class="tw-h-full card">
    <!--    <a v-if="mode==='horizontal'" :href="link" target="_blank" class="tw-bg-white tw-w-full-->
    <!--    tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md" style="height: 20vw;">-->
    <!--      <div class=" tw-grid tw-grid-rows-5">-->
    <div style="min-height: 220px" v-if="mode === 'horizontal'" @click="goTo(link)"
      class="tw-rounded-lg tw-border tw-border-gray-200 tw-h-full hover:tw-cursor-pointer">
      <img :src="picUrl" :alt="name" @load="onLoad" @error="onError" style="width: 150px; height: 200px"
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
        class="tw-object-contain tw-rounded-l-lg tw-m-auto tw-pt-1" :src="picUrl" :alt="name" @load="onLoad" @error="onError">
      <div>

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
import { computed, ref, watch } from 'vue'

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
    const filename = computed(() => props.pic.split("/").at(-1));
    const localPicUrl = computed(() => require("../assets/img/" + filename.value));
    const cdnBase = "https://fastly.jsdelivr.net/gh/decisionintelligence/decisionintelligence.github.io@code/src/assets/img/";
    const lowResUrl = computed(() => cdnBase + "low_" + filename.value);
    const highResUrl = computed(() => cdnBase + filename.value);
    const picUrl = ref(lowResUrl.value);

    watch(lowResUrl, (url) => {
      picUrl.value = url;
    });

    function onLoad() {
      if (picUrl.value === lowResUrl.value && lowResUrl.value !== highResUrl.value) {
        const targetUrl = highResUrl.value;
        const img = new Image();
        img.onload = () => {
          if (highResUrl.value === targetUrl) {
            picUrl.value = targetUrl;
          }
        };
        img.onerror = () => {
          if (highResUrl.value === targetUrl && picUrl.value === lowResUrl.value) {
            onError();
          }
        };
        img.src = targetUrl;
      }
    }

    function onError() {
      if (picUrl.value !== localPicUrl.value) {
        picUrl.value = localPicUrl.value;
      }
    }
    const goTo = (link) => {
      window.open(link, "_blank");
    };

    return {
      goTo,
      picUrl,
      onLoad,
      onError,
    };
  },
};
</script>
