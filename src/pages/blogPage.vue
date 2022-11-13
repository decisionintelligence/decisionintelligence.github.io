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

      </div>

    </div>

  </q-page>
</template>

<script setup>
import blogCard from "components/blogCard";
import BlogCard from "components/blogCard";
</script>
