<template>
<!--    <article class="tw-prose">-->
<!--      {{ content }}-->
<!--    </article>-->
  <div class="md:tw-m-auto">
    <article class="tw-prose md:tw-prose lg:tw-prose-xl tw-w-full tw-m-auto" v-if="content">
      <div class="tw-w-full" v-html="content"></div>
    </article>
  </div>
</template>

<script>
import {api} from "boot/axios";
import {ref} from "vue";
import {useRoute} from "vue-router";

export default {
  name: 'articlePage',
  props: {
    id: Number
  },
  setup(props) {
    let content = ref('')
    // get router params
    const router = useRoute();

    api.get('/blog/' + router.params.id).then(res => {
      if (res.status === 200) {
        content.value = res.data[0].content
      }
    })
    return {
      content
    }
  }

}
</script>
