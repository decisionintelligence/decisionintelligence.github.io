<template>
  <div class="tw-h-full card">

    <!--    <a v-if="mode==='horizontal'" :href="link" target="_blank" class="tw-bg-white tw-w-full-->
    <!--    tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md" style="height: 20vw;">-->
    <!--      <div class=" tw-grid tw-grid-rows-5">-->
    <div style="min-height: 220px" v-if="mode === 'horizontal'" @click="goTo(link)"
      class="tw-rounded-lg tw-border tw-border-gray-200  tw-h-full hover:tw-cursor-pointer">
      <img :src="require('../assets/img/' + picUrl)" style="width:150px;height: 200px"
        class="tw-float-left  tw-mr-4 tw-object-contain tw-mt-2" />
      <div class="row tw-mt-2   tw-mb-2 tw-text-xl tw-font-bold tw-tracking-tight tw-text-gray-900">
        {{ name }}
      </div>
      <div class="row tw-m-2 ">
        <span class="tw-text-gray-400 tw-mr-2 " v-for="(t, idx) in tag" :key="idx">{{ t }}</span>
      </div>
      <div class="tw-pl-2 tw-ml-2 tw-tracking-wider tw-leading-7">
        {{ desc }}
      </div>
    </div>


    <div v-else-if="mode === 'vertical'"
      class="tw-bg-white tw-m-auto  tw-h-full  tw-border tw-border-gray-200 tw-text-center" style="max-width: 230px;">
      <img style="width:160px;height: 160px" v-if="type !== 'alumni'"
        class="tw-object-contain tw-rounded-l-lg tw-m-auto tw-pt-1" :src="require('../assets/img/' + picUrl)">
      <div>
        <div class="tw-mt-1">
          {{ name }}
        </div>
        <div class="tw-mt-1">{{ desc }}</div>
        <div class="tw-text-gray-400 tw-break-all ">
          {{ tag.join(',') }}
          <!--        <span v-for="(t,idx) in tag" class="tw-text-gray-400 tw-pl-1" :key=idx+100>-->
          <!--          {{ t }}-->
          <!--        </span>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
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
      default: 'horizontal'
    }
  },


  setup(props) {

    let picUrl = props.pic.split('/').at(-1)
    function getAssets(url) {
      return new URL(url, import.meta.url).href;
    }
    const goTo = (link) => {
      window.open(link, '_blank')
    }

    return {
      goTo,
      picUrl,
      getAssets
    }
  }
}
</script>
