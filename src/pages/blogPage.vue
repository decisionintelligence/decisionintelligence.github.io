<template>
  <q-page padding>


    <div class="tw-w-full md:tw-w-2/3  md:tw-m-auto">

      <div class="tw-w-full tw-grid tw-place-items-center md:tw-grid-cols-2  tw-gap-2 md:tw-gap-6">
        <blog-card title="标题1" desc="一些描述一些描述一些描述一些描述" time="2020-11-10" :tag="['tag_1','tag_2']"/>
        <blog-card title="标题1" desc="一些描述一些描述一些描述一些描述" time="2020-11-10" :tag="['tag_1','tag_2']"/>
        <blog-card title="标题1" desc="一些描述一些描述一些描述一些描述" time="2020-11-10" :tag="['tag_1','tag_2']"/>
        <blog-card title="标题1" desc="一些描述一些描述一些描述一些描述" time="2020-11-10" :tag="['tag_1','tag_2']"/>
        <blog-card title="标题1" desc="一些描述一些描述一些描述一些描述" time="2020-11-10" :tag="['tag_1','tag_2']"/>
        <blog-card title="标题1" desc="一些描述一些描述一些描述一些描述" time="2020-11-10" :tag="['tag_1','tag_2']"/>
        <blog-card title="标题1" desc="一些描述一些描述一些描述一些描述" time="2020-11-10" :tag="['tag_1','tag_2']"/>

        <div class="tw-max-w-xl">
          <label
            class="tw-flex tw-justify-center tw-w-full tw-h-32 tw-px-4 tw-transition tw-bg-white tw-border-2 tw-border-gray-300
            tw-border-dashed tw-rounded-md tw-appearance-none tw-cursor-pointer tw-hover:border-gray-400 tw-focus:outline-none">
        <span class="tw-flex tw-items-center tw-space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="tw-font-medium tw-text-gray-600">
                Drop files to Attach, or
                <span class="tw-text-blue-600 underline">browse</span>
            </span>
        </span>
            <input type="file" name="file_upload"  class="hidden">
          </label>
        </div>


      </div>

    </div>

  </q-page>
</template>

<script setup>
import blogCard from "components/blogCard";
import BlogCard from "components/blogCard";
</script>
