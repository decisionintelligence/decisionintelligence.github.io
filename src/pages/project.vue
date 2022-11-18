<template>
  <q-page  padding>
    <transition
      appear
      enter-active-class="animated  fadeInDown"
      leave-active-class="animated  fadeOutUp"
    >
    <div class="flex flex-center tw-font-bold tw-text-3xl tw-m-4 my-element">项目</div>
    </transition>
      <div class="q-pa-md tw-h-full md:tw-w-2/3 tw-m-auto">
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
    label: '项目类别',
    align: 'left',
    field: 'category',
  },
  { name: 'name', align: 'center', label: '名称', field: 'name' },
  { name: 'number', label: '批准号', field: 'number' },
  { name: 'time', label: '起止时间', field: 'time' ,sortable: true},
]
const rows = [
  {'category':"项目类别一","name":"项目名称一","number":"批准号一","time":"2010.09-2011.09"},
  {'category':"项目类别二","name":"项目名称二","number":"批准号二","time":"2010.09-2011.09"},
  {'category':"项目类别三","name":"项目名称三","number":"批准号三","time":"2010.09-2011.09"},
  {'category':"项目类别四","name":"项目名称四","number":"批准号四","time":"2010.09-2011.09"},
  {'category':"项目类别五","name":"项目名称五","number":"批准号五","time":"2010.09-2011.09"},
  {'category':"项目类别六","name":"项目名称六","number":"批准号六","time":"2010.09-2011.09"},
  {'category':"项目类别七","name":"项目名称七","number":"批准号七","time":"2010.09-2011.09"},
  {'category':"项目类别八","name":"项目名称八","number":"批准号八","time":"2010.09-2011.09"},
  {'category':"项目类别九","name":"项目名称九","number":"批准号九","time":"2010.09-2011.09"},
  {'category':"项目类别十","name":"项目名称十","number":"批准号十","time":"2010.09-2011.09"},
  {'category':"项目类别十一","name":"项目名称十一","number":"批准号十一","time":"2010.09-2011.09"},
  {'category':"项目类别十二","name":"项目名称十二","number":"批准号十二","time":"2010.09-2011.09"},
  {'category':"项目类别十三","name":"项目名称十三","number":"批准号十三","time":"2010.09-2011.09"},
  {'category':"项目类别十四","name":"项目名称十四","number":"批准号十四","time":"2010.09-2011.09"},
  {'category':"项目类别十五","name":"项目名称十五","number":"批准号十五","time":"2010.09-2011.09"},
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
