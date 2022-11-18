<template>
  <q-page padding class="tw-h-screen tw-bg-gray-200"  >


    <div class="tw-w-full   md:tw-w-2/3  md:tw-m-auto tw-flex  tw-flex-wrap" s>

      <div class="tw-w-full tw-grid tw-m-1  md:tw-justify-items-center md:tw-grid-cols-2  tw-gap-2 md:tw-gap-6">
      <div v-for="(blog,idx) in blogList" :key="blog.id + idx" class="tw-w-full">
        <blog-card class="tw-w-2/3 tw-m-auto hover:tw-scale-[1.01] tw-duration-75"
                   :title="blog.title" :desc="blog.abstract" :time="blog.date" :tag="blog.tag.split(' ')" :id="blog.id"/>
      </div>
<!--        <div class="tw-max-w-xl">-->
<!--          <label-->
<!--            class="tw-flex tw-justify-center tw-w-full tw-h-32 tw-px-4 tw-transition tw-bg-white tw-border-2 tw-border-gray-300-->
<!--            tw-border-dashed tw-rounded-md tw-appearance-none tw-cursor-pointer tw-hover:border-gray-400 tw-focus:outline-none">-->
<!--        <span class="tw-flex tw-items-center tw-space-x-2">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"-->
<!--                 stroke="currentColor" stroke-width="2">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round"-->
<!--                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />-->
<!--            </svg>-->
<!--            <span class="tw-font-medium tw-text-gray-600">-->
<!--                Drop files to Attach, or-->
<!--                <span class="tw-text-blue-600 underline">browse</span>-->
<!--            </span>-->
<!--        </span>-->
<!--            <input type="file" name="file_upload"  class="hidden">-->
<!--          </label>-->
<!--        </div>-->


      </div>

    </div>

  </q-page>
</template>

<script setup>
import BlogCard from "components/blogCard";
import {api} from "boot/axios";
import {onMounted, ref} from "vue";
let blogList = ref([]);

onMounted(()=>{

api.get('/all_blogs').then(res=>{
  blogList.value = res.data;
})

})
</script>
