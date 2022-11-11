<template>
  <q-page padding class="tw-container tw-m-auto tw-leading-8">
    <div v-if="data" class="tw-w-2/3 tw-m-auto " >
      <p class="tw-m-5">时间序列分析，时空数据分析，图分析，自动机器学习（AutoML ）, AI for Science，智能决策，异常检测，预测，模型轻量化 </p>
      <div v-for="(item,id) in data" :key="id">
        <div class="text-h5 tw-border-l-4 tw-pl-5 tw-border-l-blue-500" >
          {{item.section}}
        </div>

        <p class="tw-m-2">{{item.desc}}</p>

        <div v-for="(sub,sub_idx) in item.content" :key="sub_idx+id*id ">

          <div class="text-h6 " >
            {{sub.subsection}}
          </div> <!--tw-border-l-4 tw-pl-5 tw-border-l-blue-500 -->
          <div v-for="(sub_item,idx) in sub.content" :key="idx+sub_idx+1+id*id">
            <div class="tw-m-2">
              <p class="text-weight-bold">{{sub_item.title}}</p>
              <ul class="tw-list-disc	">
                <li v-for="(paper,i) in sub_item.papers" :key="idx *(i+100)">{{paper}}</li>
              </ul>
            </div>
          </div>

        </div>


      </div>
    </div>
  </q-page>
</template>

<script setup>
import {ref} from 'vue'

let data = ref(null)
fetch('http://localhost:8000/data.json').then(res=>res.json()).then(d=>{
  data.value = d['data']
  console.log(data.value);
})

</script>


<style scoped>
ul{
  list-style-type: dot;
}
</style>
