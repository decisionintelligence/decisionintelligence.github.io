<template>
  <q-page padding class="tw-h-screen tw-bg-gray-200"  >


    <div class="tw-w-full   md:tw-w-2/3  md:tw-m-auto tw-flex  tw-flex-wrap" s>

      <div class="tw-w-full tw-grid tw-m-1  md:tw-justify-items-center md:tw-grid-cols-2  tw-gap-2 md:tw-gap-6">
      <div v-for="(blog,idx) in blogList" :key="blog.id + idx" class="tw-w-full">
        <blog-card class="tw-w-2/3 tw-m-auto hover:tw-scale-[1.01] tw-duration-75"
                   :title="blog.title" :desc="blog.abstract" :time="blog.date" :tag="blog.tag.split(' ')" :id="blog.id"/>
      </div>

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
