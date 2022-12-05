<template>
  <q-page padding>
    <!-- content -->
    <!--    <transition-->
    <!--      appear-->
    <!--      enter-active-class="animated  fadeInDown"-->
    <!--      leave-active-class="animated  fadeOutUp"-->
    <!--    >-->
    <!--      <div class="flex flex-center tw-font-bold tw-text-3xl my-element">招聘信息</div>-->
    <!--    </transition>-->
    <div class=" tw-leading-10">

      <div class="typography">
        <div class="section_1">
          <transition-group
          appear
          enter-active-class="animated  fadeInDown"
          leave-active-class="animated fadeOut"
          >
          <div class="tw-flex tw-justify-center text-weight-bold tw-text-2xl tw-mt-4">决策智能实验室诚邀海内外学生、学者加入！</div>
          <div class="tw-flex tw-justify-center tw-text-zinc-300">we are looking forward to your joining!</div>
          <div class="tw-flex tw-justify-center text-weight-bold tw-text-2xl tw-mt-4">研究方向</div>
          <div class="tw-flex tw-justify-center tw-text-zinc-300">research interests</div>
          <ul>
            <li class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start">
              机器学习，人工智能，数据管理与分析
            </li>
            <li class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start">时间序列分析，时空序列分析，图分析，AI
              for Science
            </li>
            <li class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start">
              自动机器学习，模型可解释性，健壮性，持续学习，轻量化模型，DB4AI
            </li>
            <li class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start">自拟方向（不局限于以上）
            </li>
          </ul>
          </transition-group>
        </div>
        <transition-group
        appear
        enter-active-class="animated  fadeInDown"
        leave-active-class="animated fadeOut"
        >
        <div class="tw-flex tw-justify-center text-weight-bold tw-text-2xl tw-mt-4">欢迎本科生加入实验室实习！ </div>
        <div class="tw-flex tw-justify-center tw-text-zinc-300">we are welcome the b.s student to join us! </div>
        </transition-group>
        <div class="tw-grid tw-grid-cols-2 tw-content-center">
          <transition-group
          appear
          enter-active-class="animated  fadeInUp"
          leave-active-class="animated fadeOut"
          >
          <div key="1" class="tw-flex tw-justify-center tw-text-2xl tw-mt-10 tw-col-span-2 text-weight-bold tw-mt-4 ">博士、硕士招生</div>
          <div key="2" class="tw-flex tw-justify-center tw-text-zinc-300 tw-mb-5 tw-col-span-2">phd,master,recruitment</div>
          <div key="3" class="tw-w-1/2 tw-m-auto tw-mt-0">
            <div class="text-weight-bold">对学生的期望</div>
            <ul class="tw-list-disc text-gray ">
              <li>具有自我驱动能、对自己未来有目标</li>
              <li>具备扎实的编程和数学基础</li>
              <li>具备良好的英文阅读和撰写能力，能用英文做口头报告</li>
              <li>踏实、有责任心、善于沟通、有团队合作精神</li>
            </ul>
          </div>
          <div key="4" class="tw-w-1/2 tw-m-auto tw-mt-0">
            <div class="text-weight-bold">培养方法</div>
            <ul class="tw-list-disc text-gray">
              <li>提供科研与应用结合的科研环境</li>
              <li>课题选择兼顾高水平论文发表与工程实践应用</li>
              <li>因人施教，充分考虑学生实际情况和需求，实现学生与导师共赢发展</li>
              <li>注重国际化，积极提供各类国际交流机会</li>
            </ul>
          </div>
          </transition-group>
          <transition-group>
          <div key="1" class="tw-flex tw-justify-center tw-text-2xl tw-mt-10 tw-col-span-2  text-weight-bold  tw-mt-4">博士后岗位招聘:</div>
          <div key="2" class="tw-flex tw-justify-center tw-text-zinc-300 tw-mb-5 tw-col-span-2">postdoc recruitment</div>

          <div key="3" class="tw-w-1/2 tw-m-auto tw-mt-0">
            <div class="text-weight-bold">岗位描述</div>
            <ul class="tw-list-disc tw-pl-4">
              <li>独立承担课题研究</li>
              <li>协助指导研究生</li>
            </ul>
          </div>
          <div key="4" class="tw-w-1/2 tw-m-auto tw-mt-0">
            <div class="text-weight-bold">岗位要求</div>
            <ul class="tw-list-disc tw-pl-4">
              <li>具有或即将获得计算机等相关信息科学相关的博士学位，或其他理工科博士学位（主要针对AI for Science方向）
              </li>
              <li>近三年以第一作者发表过高水平论文（比如CCF A类）</li>
              <li>具有独立完成科研课题能力</li>
            </ul>
          </div>

          <div key="5" class="tw-w-1/2 tw-m-auto tw-mt-4">
            <div class="text-weight-bold">待遇</div>
            <ul>
              <li class="tw-list-decimal" v-for="(item,idx) in message.data" :key="idx + 1247" :id="idx">
                <div>{{ item.item }}</div>
                <ul class="md:tw-pl-5">
                  <li class="tw-list-disc" v-for="(sub,index ) in item?.subitem" :key="index +4571">
                    {{ sub }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div key="6" class="tw-w-1/2 tw-m-auto tw-mt-4">
            <div class="text-weight-bold ">联系人</div>
            <div >
              <div>杨彬：byang@dase.ecnu.edu.cn</div>
              <div>郭晨娟：cjguo@dase.ecnu.edu.cn</div>
            </div>
            <img src="http://106.75.239.46:9000/picbed/join-us.png" />
          </div>
          </transition-group>
        </div>


      </div>


    </div>
  </q-page>
</template>
<script>
export default {
  name: "recruit-page"
};
</script>

<script setup>
import { onMounted, ref } from "vue";


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
);
//detect the url in  message covert to a tag
onMounted(() => {
  let a = document.getElementById("0").children[0].innerHTML = message.value.data[0].item.replace("website", "<a class='text-blue' href='http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm' target='_blank'>http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm</a>");

});

</script>
<style scoped>
.my-element {
  animation-duration: 1.5s; /* don't forget to set a duration! */
}

.text-gray {
  color: #646a73
}
</style>
