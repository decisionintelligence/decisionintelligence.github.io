<template>
  <q-page padding>
    <div class="tw-leading-10">
      <div class="typography">
        <div class="section">
          <div
            class="tw-flex tw-justify-center text-weight-bold tw-text-2xl tw-mt-4 typewriter"
            style="color: #4e83fd"
          >
            <div>决策智能实验室诚邀海内外学生、学者加入！</div>
          </div>
          <div class="tw-flex tw-justify-center tw-text-zinc-300 typewriter">
            <div>We are looking forward to your joining!</div>
          </div>
          <div
            class="tw-flex tw-justify-center text-weight-bold tw-text-2xl tw-mt-20"
            style="color: #4e83fd"
          >
            研究方向
          </div>
          <div class="tw-flex tw-justify-center tw-text-zinc-300">
            Research interests
          </div>
          <ul>
            <li
              class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start"
            >
              {{ $t("r1") }}
            </li>
            <li
              class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start"
            >
              {{ $t("r2") }}
            </li>
            <li
              class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start"
            >
              {{ $t("r3") }}
            </li>
            <li
              class="tw-list-disc tw-pl-4 tw-flex tw-justify-center tw-place-content-start"
            >
              {{ $t("r4") }}
            </li>
          </ul>
        </div>
        <div class="section">
          <div
            class="tw-flex tw-justify-center text-weight-bold tw-text-2xl tw-mt-20"
            style="color: #4e83fd"
          >
            欢迎本科生加入实验室实习！
          </div>
          <div class="tw-flex tw-justify-center tw-text-zinc-300">
            Bachelor students are welcome to join us!
          </div>
        </div>

        <div class="md:tw-grid md:tw-grid-cols-2 tw-content-center">
          <div class="section tw-col-span-2">
            <div
              class="tw-flex tw-justify-center tw-text-2xl tw-mt-20 text-weight-bold"
              style="color: #4e83fd"
            >
              博士、硕士招生
            </div>
            <div class="tw-flex tw-justify-center tw-text-zinc-300 tw-mb-5">
              Phd and master student recruitment
            </div>
          </div>
          <div class="md:tw-w-1/2 tw-w-5/6 tw-m-auto tw-mt-0 section">
            <div class="text-weight-bold">
              {{ $t("r5") }}
            </div>
            <ul class="tw-list-disc text-gray">
              <li>
                {{ $t("r51") }}
              </li>
              <li>
                {{ $t("r52") }}
              </li>
              <li>
                {{ $t("r53") }}
              </li>
              <li>
                {{ $t("r54") }}
              </li>
            </ul>
          </div>
          <div key="4" class="md:tw-w-1/2 tw-w-5/6 tw-m-auto tw-mt-0 section">
            <div class="text-weight-bold">
              {{ $t("r6") }}
            </div>
            <ul class="tw-list-disc text-gray">
              <li>
                {{ $t("r61") }}
              </li>
              <li>
                {{ $t("r62") }}
              </li>
              <li>
                {{ $t("r63") }}
              </li>
              <li>
                {{ $t("r64") }}
              </li>
            </ul>
          </div>
          <div class="section tw-col-span-2">
            <div
              style="color: #4e83fd"
              class="tw-flex text-weight-bold tw-justify-center tw-text-2xl tw-mt-10text-weight-bold tw-mt-20"
            >
              博士后岗位招聘:
            </div>
            <div class="tw-flex tw-justify-center tw-text-zinc-300 tw-mb-5">
              Postdoc recruitment
            </div>
          </div>

          <div
            class="md:tw-w-1/2 tw-w-5/6 tw-m-auto tw-mt-0 section tw-col-span-1"
          >
            <div>
              <div class="text-weight-bold">
                {{ $t("r7") }}
              </div>
              <ul class="tw-list-disc md:tw-pl-4 text-gray">
                <li>
                  {{ $t("r71") }}
                </li>
                <li>
                  {{ $t("r72") }}
                </li>
              </ul>
            </div>

            <div class="tw-mt-7">
              <div class="text-weight-bold">
                {{ $t("r8") }}
              </div>
              <ul class="tw-list-disc md:tw-pl-4 text-gray">
                <li>
                  {{ $t("r81") }}
                </li>
                <li>
                  {{ $t("r82") }}
                </li>
                <li>
                  {{ $t("r83") }}
                </li>
              </ul>
            </div>
            <div class="tw-mt-7">
              <div class="text-weight-bold">
                {{ $t("r9") }}
              </div>
              <div class="text-gray">
                <div>
                  {{ $t("r91") }}
                  <a href="mailto:byang@dase.ecnu.edu.cn" class="text-blue"
                    >byang@dase.ecnu.edu.cn
                  </a>
                </div>
                <div>
                  {{ $t("r92") }}
                  <a href="mailto:cjguo@dase.ecnu.edu.cn" class="text-blue"
                    >cjguo@dase.ecnu.edu.cn</a
                  >
                </div>
                <div>
                  <span>{{ $t("address") }} :</span> {{ $t("r93") }}
                </div>
              </div>
            </div>
          </div>

          <div v-html="$t('r101')"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref } from "vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const message = ref({
  data: [
    {
      item:
        "薪资待遇按华东师范大学博士后有关规定执行，博士后基础年薪20-40万/年，具体规定参照" +
        "website" +
        "。优先支持申请国家，上海市和学校的各类博士后计划",
      subitem: [
        "国家“博新计划” （年薪40万+经费23万）",
        "国家“博士后国际交流计划” （年薪30+万）",
        "上海市“博士后创新创业计划” （年薪30万+经费10万）",
        "学校“卓越博士后计划” (年薪25+万) ，条件优秀者将推荐申请华师大“光华”优秀博士后（年薪40万）;",
      ],
    },
    {
      item: "全职博士后在站期间，学校按照国家规定为其缴纳社会保险和住房公积金。同时，学校为全职博士后提供2万元安家补贴，进站后一次性发放。",
    },
    {
      item: "享受课题研究补贴",
    },
    {
      item: "享受华东师范大学相应的工会待遇，住房、户口等其他方面根据华东师范大学相关政策执行。 ",
    },
  ],
});
//detect the url in  message covert to a tag
onMounted(() => {
  // let a = document.getElementById("0").children[0].innerHTML = message.value.data[0].item.replace("website", "<a class='text-blue' style='display: inline-block' href='http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm' target='_blank'>http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm</a>");
  let sectionList = document.querySelectorAll(".section");
  sectionList = Array.from(sectionList);

  // 检查sectionList中的哪些元素是可见的,移除可见元素
  function checkVisible() {
    for (let i = 0; i < sectionList.length; i++) {
      let rect = sectionList[i].getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        sectionList.splice(i, 1);
        i--;
      }
    }
  }

  checkVisible();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated", "fadeInUp", "my-element");
      }
    });
  });
  sectionList.forEach((section) => {
    observer.observe(section);
  });
});
</script>
<style scoped>
.my-element {
  animation-duration: 1s;
  /* don't forget to set a duration! */
}

.text-gray {
  color: #646a73;
}

.typewriter div {
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em;
  /* Adjust as needed */
  animation: typing 4s steps(21), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 20em;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: gray;
  }
}
</style>
