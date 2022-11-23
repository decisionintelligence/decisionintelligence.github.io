<template>

  <div class="tw-h-full">

    <!--    <a v-if="mode==='horizontal'" :href="link" target="_blank" class="tw-bg-white tw-w-full-->
    <!--    tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md" style="height: 20vw;">-->
    <!--      <div class=" tw-grid tw-grid-rows-5">-->
    <div style="min-height: 220px" v-if="mode==='horizontal'"
         @click="goTo(link)"
         class="tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md tw-h-full hover:tw-cursor-pointer">
      <img :src="pic" style="width:150px;height: 200px" class="tw-float-left  tw-mr-4 tw-object-contain tw-mt-2"/>
      <div class="row tw-mt-2   tw-mb-2 tw-text-xl tw-font-bold tw-tracking-tight tw-text-gray-900">
        {{ name }}
      </div>
      <div class="row tw-m-2 ">
        <span class="tw-text-gray-400 tw-mr-2 " v-for="(t,idx) in tag" :key="idx">{{ t }}</span>
      </div>
      <div class="tw-pl-2 tw-ml-2 tw-tracking-wider tw-leading-7">
        {{ desc }},
      </div>
    </div>


    <div v-else-if="mode==='vertical'"
         class="tw-bg-white  tw-h-full tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md tw-text-center">
      <img class="tw-object-contain rounded-l-lg tw-w-full tw-h-2/3" :src="pic">
      <div>
        <div class="tw-mt-1">
          {{ name }}
        </div>
        <div class="tw-mt-1">{{ desc }}</div>
        <div class="tw-mt-1">
        <span v-for="(t,idx) in tag" class="tw-text-gray-400 tw-mr-2 tw-pl-2" :key=idx+100>
          {{ t }}
        </span>
        </div>
      </div>
    </div>

    <a v-else-if="mode === 'sm_std' " href="#" class="tw-flex tw-flex-row tw-items-center
    tw-bg-white tw-rounded-lg tw-border tw-shadow-md tw-max-w-xl hover:bg-gray-100 tw-h-full tw-w-full">
      <img :src="pic" class="tw-object-contain tw-w-1/3 tw-h-5/6 rounded-none rounded-l-lg"/>
      <div class="tw-w-2/3 tw-grid tw-grid-rows-6 tw-ml-4">
        <div class="tw-row-start-2  tw-mb-2 tw-text-xl  tw-font-bold tw-tracking-tight tw-text-gray-900">
          {{ name }}
        </div>
        <div class="tw-row-start-3">
        <span class="tw-text-gray-400" v-for="(t,idx) in tag" :key="idx">
          {{ t }}
        </span>
        </div>
        <div class="tw-row-start-4 tw-row-end-6 tw-break-all tw-break-words tw-overflow-hidden">
          <div>
            {{ desc }}
          </div>
        </div>
      </div>
    </a>


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
    mode: {
      type: String,
      default: 'horizontal'
    }
  },
  setup() {
    const goTo = (link) => {
      window.open(link, '_blank')
    }

    return {goTo}
  }
}
</script>
