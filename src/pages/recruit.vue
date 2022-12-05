<template>
  <q-page padding>
    <!-- content -->
    <div class="md:tw-w-2/3 md:tw-m-auto">
      <transition
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated  fadeOutUp"
      >
        <div class="flex flex-center tw-font-bold tw-text-3xl tw-m-4 my-element">招聘信息</div>
      </transition>
      <div class="q-pa-md tw-leading-10">
        <ul>
          <li class="tw-list-decimal" v-for="(item,idx) in message.data" :key="idx + 1247" :id="idx">
            <div>{{ item.item }}</div>
            <ul class="md:tw-pl-20" >
              <li class="tw-list-disc" v-for="(sub,index ) in item?.subitem" :key="index +4571">
                {{ sub }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "recruit-page",
}
</script>

<script setup>
import {onMounted, ref} from 'vue'


const message = ref({
    "data": [
      {
        "item": "薪资待遇按华东师范大学博士后有关规定执行，博士后基础年薪20-40万/年，具体规定参照" +
          "website" +
          "。优先支持申请国家，上海市和学校的各类博士后计划",
        "subitem": [
          "国家“博新计划” （年薪40万+经费23万）",
          "国家“博士后国际交流计划” （年薪30+万）",
          "上海市“博士后创新创业计划” （年薪30万+经费10万）",
          "学校“卓越博士后计划” (年薪25+万) ，条件优秀者将推荐申请华师大“光华”优秀博士后（年薪40万）;"
        ]
      },
      {
        "item": "全职博士后在站期间，学校按照国家规定为其缴纳社会保险和住房公积金。同时，学校为全职博士后提供2万元安家补贴，进站后一次性发放。"
      },
      {
        "item": "享受课题研究补贴"
      },
      {
        "item": "享受华东师范大学相应的工会待遇，住房、户口等其他方面根据华东师范大学相关政策执行。 "
      }
    ]
  }
)
//detect the url in  message covert to a tag
onMounted(() => {
  let a = document.getElementById('0').children[0].innerHTML = message.value.data[0].item.replace('website',"<a class='text-blue' href='http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm' target='_blank'>http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm</a>")

})

</script>
<style scoped>
.my-element {
  animation-duration: 1.5s; /* don't forget to set a duration! */
}
</style>
