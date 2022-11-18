<template>
  <q-page padding>
    <div class="text-h5 tw-m-3"> 1.在线编辑</div>
    <p class="text-subtitle2 tw-p-3"> 可以编辑你的随笔</p>
    <v-md-editor class="tw-w-full tw-h-full tw-bg-black" height="500px" v-model="value"/>
    <q-separator class="tw-m-4"/>

<!--    <div class="text-h5 tw-m-3"> 2.上传文件</div>-->
<!--    <q-uploader-->
<!--      url="http://localhost:4444/upload"-->
<!--      label="可以选择直接上传markdown 文件(*.md *.markdown)"-->
<!--      accept=".md,.markdown"-->
<!--      @rejected="onRejected"-->
<!--    />-->


    <q-btn label="upload" type="primary" class="tw-mt-5 row  tw-m-auto" @click="showStepper"></q-btn>

    <q-dialog
      persistent
      v-model="show_stepper"
      @hide="show_stepper = false"

    >

      <q-card class="tw-w-full">
        <q-card-section>
          <div class="text-h6">信息确认</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="title"
                   label="标题"
                   :rules="[val => val && val.length>0]"
                   lazy-rules
          />
          <q-input v-model="tag" label="tag" :rules="[val => val && val.length>0]"
                   lazy-rules/>
          <q-input v-model="desc" label="简介" :rules="[val => val && val.length>0]"
                   lazy-rules/>
          <q-input v-model="author" label="author" :rules="[val => val && val.length>0]"
                   lazy-rules/>

        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn  flat label="upload" @click="upload"/>
          <q-btn flat label="Close" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup>
import {ref} from "vue";
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';
import {useQuasar} from "quasar";
import {api} from "boot/axios";

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
let value = ref('支持markdown语法 (公式还不支持)')
let title = ref('')
let tag = ref('')
let desc = ref('')
let author = ref('')
const $q = useQuasar()

let show_stepper = ref(false)

function onRejected(rejectedEntries) {
  // Notify plugin needs to be installed
  // https://quasar.dev/quasar-plugins/notify#Installation
  $q.notify({
    type: 'negative',
    message: `${rejectedEntries.length} file(s) did not pass validation constraints`
  })
}

const showStepper = () => {
  show_stepper.value = true
}

const upload = ()=>{
  // check title tag desc author, if not valid, return
  if(!title.value || !tag.value || !desc.value || !author.value || !value.value){
    $q.notify({
      type: 'negative',
      message: `请填写完整信息`
    })
    return
  }
  if(value.value){
    let formData = new FormData()
    formData.append('title',title.value)
    formData.append('tag',tag.value)
    formData.append('desc',desc.value)
    formData.append('content',value.value)
    formData.append('author',author.value)
    api.post('/upload',formData).then(res=>{
      if(res.status===200){
        $q.notify({
          type: 'positive',
          message: '上传成功'
        })
      }
    })

  }else{
    $q.notify({
      type: 'negative',
      message: '请先输入内容'
    })
  }

}

</script>
