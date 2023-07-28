<template>
  <q-page padding> <!-- content -->
    <div v-if="data" class="md:tw-w-2/3 md:tw-m-auto">
      <div>
        <div class="tw-text-2xl tw-mt-10 tw-leading-10 tw-p-4 tw-my-4 tw-bg-gray-50 tw-border-l-4 tw-border-gray-300">
          {{ data.section }}
        </div>

        <p class="tw-m-5">
          <svg aria-hidden="true" class="tw-w-10 tw-h-10 tw-text-gray-400 dark:text-gray-600" viewBox="0 0 24 27"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor" />
          </svg>
          {{ data.desc }}
        </p>
        <div v-for="(sub, sub_idx) in data.content" :key="sub_idx + 454541">
          <div class="text-h6 tw-pl-2 tw-mb-3">
            {{ sub.subsection }}
          </div> <!--tw-border-l-4 tw-pl-5 tw-border-l-blue-500 -->
          <div class="tw-p-3" v-for="(sub_item, idx) in sub.content" :key="idx + sub_idx + 1 + 141452">
            <div class="tw-m-2 tw-pl-2">
              <p class="text-weight-bold">{{ sub_item.title }}</p>
              <ul class="tw-list-disc	">
                <li v-for="(paper, i) in sub_item.papers" :key="idx * (i + 100)">{{ paper }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { api } from "boot/axios";
import * as pageData from '../assets/paper_table.json'
export default {
  // name: 'PageName',
  props: {
    id: Number,
  },

  setup(props) {
    // get router params
    const router = useRoute();
    let id = ref(router.params.id)
    let data = ref()
    let d = pageData.default[0]
    let all = d['data']['data']
    data.value = all[id.value]
    return {
      data
    }
  }

}
</script>
