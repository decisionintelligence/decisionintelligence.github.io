<template>

  <q-page padding>    <!-- content -->
    <div v-if="data" class="md:tw-w-2/3 md:tw-m-auto">
      <div>
        <div class="tw-text-2xl tw-mt-10 tw-leading-10 tw-p-4 tw-my-4 tw-bg-gray-50 tw-border-l-4 tw-border-gray-300">
          {{ data.section }}
        </div>

        <p class="tw-m-5">{{ data.desc }}</p>
        <div v-for="(sub,sub_idx) in data.content" :key="sub_idx+id*id ">
          <div class="text-h6 tw-pl-2 tw-mb-3">
            {{ sub.subsection }}
          </div> <!--tw-border-l-4 tw-pl-5 tw-border-l-blue-500 -->
          <div class="tw-p-3" v-for="(sub_item,idx) in sub.content" :key="idx+sub_idx+1+id*id">
            <div class="tw-m-2 tw-pl-2">
              <p class="text-weight-bold">{{ sub_item.title }}</p>
              <ul class="tw-list-disc	">
                <li v-for="(paper,i) in sub_item.papers" :key="idx *(i+100)">{{ paper }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {useRoute} from "vue-router";
import {ref} from "vue";
import {api} from "boot/axios";

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
    api.get('/paper/' + id.value).then(d => {
      data.value = d['data']
    })
    return {
      data
    }
  }

}
</script>
