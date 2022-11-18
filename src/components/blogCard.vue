<template>

  <div class="tw-w-4/5 tw-max-w-sm tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md">
    <div class="tw-p-5">
      <a>
        <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900 ">{{ title }}</h5>
      </a>
      <span class="tw-text-sm tw-text-gray-500 ">{{ time }}</span>
      <div class="tw-mt-2">
        <span v-for="(item,idx) in tag" :key="idx"
              class="tw-inline-block tw-bg-gray-200 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-700 tw-mr-2 tw-mb-2">
          #{{ item }}
        </span>
      </div>
      <p class="tw-mb-3 tw-font-normal tw-text-gray-700 dark:text-gray-400">{{ desc }}</p>
      <div  class="tw-inline-flex tw-items-center tw-py-2 tw-px-3 ttw-ext-sm tw-font-medium tw-text-center tw-text-white tw-bg-blue-700 tw-rounded-lg
      hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 hover:tw-cursor-pointer " @click="goToBlog">
        Read more
        <svg aria-hidden="true" class="tw-ml-2 tw-mr-1 tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  // name: 'ComponentName',
  props: {
    title: String,
    tag: Array,
    desc: String,
    time: String,
    id: Number
  },
  setup(props) {
    const router = useRouter();
    // using props

    const goToBlog = () => {
      let routeData = router.resolve({path: '/blog/' + props.id})
      window.open(routeData.href, '_blank')

    }


    return {goToBlog}
  }
}
</script>
