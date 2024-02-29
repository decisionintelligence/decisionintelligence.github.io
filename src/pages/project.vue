<template>
  <q-page  padding>
    <transition
      appear
      enter-active-class="animated  fadeInDown"
      leave-active-class="animated  fadeOutUp"
    >
    <div class="flex flex-center tw-font-bold tw-text-3xl tw-m-4 my-element" style="color: #4e83fd">项目</div>
    </transition>
      <div class="q-pa-md tw-h-full md:tw-w-5/6 tw-m-auto">
        <q-table
          flat
          bordered
          square
          class="tw-w-full tw-h-full "
          :rows="rows"
          :columns="columns"
          row-key="name"
          :virtual-scroll="true"
          rows-per-page-label="每页"
          :rows-per-page-options="[10, 5, 15, 20]"
        />
      </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'category',
    required: true,
    label: '序号',
    align: 'left',
    field: 'category',
  },
  { name: 'name', align: 'left', label: '名称', field: 'name' },
  { name: 'number', label: '资金来源', align:'left', field: 'number' },
  { name: 'time', label: '起止时间', field: 'time' ,align: 'left',sortable: true},
]
const rows = [
  {"category":"1","name":"可解释的自动时间序列异常点预测","number":"国家自然科学基金","time":"" },
  {"category":"2","name":"时间序列分析基础模型","number":"华为校企合作项目","time":"" },
  {"category":"3","name":"多源异构数据的异常检测和根因分析","number":"阿里巴巴校企合作项目","time":"" },
  {'category':"4","name":"基于负载预测的云计算资源调度优化算法","number":"阿里巴巴AIR","time":"2022-2023"},
  {'category':"5","name":"时空数据管理与分析","number":"国家自然科学基金","time":"2022-2025 "},
  {'category':"6","name":"Explainable AI for Complex Microbial Community Interactions and Predictions","number":"Villum Synergy Programme","time":"2021-2023"},
  {'category':"7","name":"Time Series Analytics and Spatio-temporal Data Management","number":"Huawei","time":"2020-2022"},
  {'category':"8","name":"Light-AI for Cognitive Power Electronics","number":"Villum Synergy Programme","time":"2020-2022"},
  {'category':"9","name":"Advance: A Data-Intensive Paradigm for Dynamic, Uncertain Networks","number":"Independent Research Fund Denmark","time":"2019-2023"},
  {'category':"10","name":"Algorithmic Foundations for Data-Intensive Routing","number":"The Danish Agency for Science and Higher Education","time":"2019-2021"},
  {'category':"11","name":"Astra: AnalyticS of Time seRies in spAtial networks","number":"Independent Research Fund Denmark","time":"2018-2022"},
  {'category':"12","name":"Distinguished Scholar","number":"Aalborg University","time":" 2018-2021"},
  {'category':"13","name":"Research Collaborations with Industries in North Jutland","number":"Aalborg Kommune","time":"2018"},
  {'category':"14","name":"aSTEP: aau's Spatio-TEmporal data analytics Platform","number":"Aalborg University","time":"2016-2021"},
]


export default {

  name: 'ProjectPage',
  setup() {

    return {
      rows,
      columns
    }
  }
}
</script>
<style scoped>
.my-element {
  animation-duration: 1.5s; /* don't forget to set a duration! */
}

</style>
