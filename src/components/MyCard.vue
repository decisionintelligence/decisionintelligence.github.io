<template>

  <div>
    <a v-if="mode==='horizontal'" :href="link"  target="_blank" class="tw-grid-rows-3
     tw-grid-flow-col-dense
     tw-flex-col
     tw-grid tw-bg-white
     tw-rounded-lg tw-border
     tw-shadow-md tw-max-w-xl
     hover:bg-gray-100 tw-h-full
     tw-w-full">

      <img :src="pic" class=" tw-object-contain tw-p-1 tw-row-span-3 tw-my-auto  rounded-none rounded-l-lg" />

      <div class="tw-col-span-2 tw-row-span-3  tw-p-3  ">
        <div class="tw-mt-2 tw-mb-2 tw-text-xl tw-font-bold tw-tracking-tight tw-text-gray-900">
          {{name}}
        </div>
        <div >
        <span  class="tw-text-gray-400" v-for="(t,idx) in tag" :key="idx">
          {{t}} &nbsp;
        </span>
        </div>
        <div class="tw-break-all tw-break-words tw-overflow-hidden" >
          <div>
            {{ desc }}
          </div>
        </div>
      </div>
    </a>


    <div v-else-if="mode==='vertical'" class="tw-bg-white  tw-h-full tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md tw-text-center">
      <img  class="tw-p-1 tw-object-contain tw-h-2/3   rounded-l-lg" :src="pic" >
      <div class="tw-mb-2">
        {{name}}
      </div>
      <div class="tw-mb-1">{{desc}}</div>
      <div>
        <span  v-for="(t,idx) in tag" :key=idx+100>
          {{t}} &nbsp;
        </span>
      </div>
    </div>

    <a v-else-if="mode === 'sm_std' " href="#"  class="tw-flex tw-flex-row tw-items-center
    tw-bg-white tw-rounded-lg tw-border tw-shadow-md tw-max-w-xl hover:bg-gray-100 tw-h-full tw-w-full">
      <img :src="pic" class="tw-object-contain tw-w-1/3 tw-h-5/6 rounded-none rounded-l-lg"/>
      <div class="tw-w-2/3 tw-grid tw-grid-rows-6 tw-ml-4">
        <div class="tw-row-start-2  tw-mb-2 tw-text-xl  tw-font-bold tw-tracking-tight tw-text-gray-900">
          {{name}}
        </div>
        <div class="tw-row-start-3">
        <span  class="tw-text-gray-400" v-for="(t,idx) in tag" :key="idx">
          {{t}} &nbsp;
        </span>
        </div>
        <div class="tw-row-start-4 tw-row-end-6 tw-break-all tw-break-words tw-overflow-hidden" >
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
  props:{
    pic:String,
    name:String,
    tag:Array,
    desc:String,
    link:String,
    mode:{
      type:String,
      default:'horizontal'
    }
  },
  setup () {




    return {


    }
  }
}
</script>
