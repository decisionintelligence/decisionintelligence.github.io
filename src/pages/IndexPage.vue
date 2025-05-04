<template>
  <q-page>
    <div class="md:tw-w-2/3 md:tw-m-auto">
      <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
        <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element" style="color: #4e83fd">
          NEWS
        </div>
      </transition>
      <div v-if="news" class="tw-overflow-y-scroll tw-overflow-hidden" style="height: 32vh">
        <div
          class="q-mt-md tw-shadow-md tw-p-4 tw-my-2 tw-bg-gray-50 tw-border-l-4 tw-border-gray-300 dark:border-gray-500 dark:bg-gray-800"
          v-for="(item, idx) in news" :key="idx">
          <span class="tw-font-semibold"> {{ item.new_time }}</span>
          {{ item.content }}
        </div>
      </div>
      <div v-else class="tw-overflow-y-scroll tw-overflow-hidden" style="height: 32vh">
        <div
          class="tw-animate-pulse tw-bg-white tw-w-full tw-h-1/3 tw-mt-10 tw-border tw-p-4 tw-rounded tw-my-2 tw-border-gray-300"
          v-for="(item, idx) in 4" :key="idx + 56751">
          <div class="tw-w-11/12 tw-ml-4 tw-bg-slate-100 tw-h-1/5 tw-mt-2 tw-rounded"></div>
          <div class="tw-w-1/3 tw-ml-4 tw-bg-slate-100 tw-h-1/5 tw-mt-1"></div>
        </div>
      </div>
    </div>

    <q-separator class="tw-m-10" />
    <div class="tw-w-full tw-m-0 tw-q-0">
      <div class="md:tw-w-2/3 tw-m-auto">
        <transition appear enter-active-class="animated  fadeInDown" leave-active-class="animated  fadeOutUp">
          <div class="tw-flex tw-justify-center tw-font-bold tw-text-3xl my-element" style="color: #4e83fd">
            {{ $t("LabName") }}
          </div>
        </transition>

        <div>
          <p v-if="locale === 'en'" class="tw-flex tw-justify-center tw-m-5 tw-text-lg">
            <strong>Innovating AI to impact business and society, and making AI accessible to all.</strong>
          </p>
          <p v-if="locale === 'en'" class="tw-justify-center tw-m-5">
            The Decision Intelligence Lab, part of the School of Data Science and Engineering at East China Normal
            University, conducts cutting-edge research on artificial intelligence and data analytics, with a fouse on
            enabling data-driven decision making. <br><br>
            Our research is guided by the <strong>AGREE</strong> principles—<strong>A</strong>utomation,
            <strong>G</strong>eneralization,
            <strong>R</strong>obustness, <strong>E</strong>xplainability, and
            <strong>E</strong>fficiency, which we apply to fundamental tasks including, e.g., forecasting, anomaly
            detection,
            classification, ranking, searching, and decision making. These innovations have been successfully deployed
            across multiple domains, including Intelligent transportation, Digital energy, AI4DB, AIOps, Predictive
            maintainence, AI for Science, Smart ocean, Autoscaling, and Intelligent emergency response.
          </p>
          <p v-else class="tw-justify-center tw-m-5 tw-font-light">
            {{ $t("desc_p1") }} <strong>{{ $t("desc_b1") }}</strong> {{ $t("desc_p2") }}
          </p>
          <ol
            class="tw-list-disc md:tw-list-none md:tw-grid md:tw-grid-cols-5 md:tw-justify-center md:tw-w-full md:tw-m-auto">
            <li class="tw-m-4 hover:tw-bg-slate-100 hover:tw-cursor-pointer" v-for="(i, idx) in research" :key="idx">
              <a :href="i.destination">
                <div class="row">
                  <div class="col-6">
                    <div class="tw-pt-3">{{ $t(i.name) }}</div>
                  </div>
                  <div class="col-6 tw-m-0">
                    <q-icon :name="outlinedArrowRightAlt" color="primary" size="md" class="tw-m-2 arrow my-element" />
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import {
  outlinedArrowRight,
  outlinedArrowRightAlt,
} from "@quasar/extras/material-icons-outlined";
import * as data from "../assets/news.json";
import * as data_en from "../assets/news_en.json";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
let $q = useQuasar();
let screen = ref($q.screen);
let research = reactive([
  { name: t("l1"), url: "papers#1", destination: "/paper/0", id: 0 },
  { name: "l4", url: "papers#2", destination: "/paper/1", id: 3 },
  { name: "l7", url: "papers#3", destination: "/paper/2", id: 6 },
  { name: "l2", url: "papers#4", destination: "/paper/3", id: 1 },
  { name: "l5", url: "papers#5", destination: "/paper/4", id: 4 },
  { name: "l8", url: "papers#6", destination: "/paper/5", id: 7 },
  { name: "l3", url: "papers#7", destination: "/paper/6", id: 2 },
  { name: "l6", url: "papers#8", destination: "/paper/7", id: 5 },
  { name: "l9", url: "papers#9", destination: "/paper/8", id: 8 },
  { name: "l10", url: "papers#10", destination: "/paper/9", id: 9 },
]);
// sort research by id
research.sort((a, b) => a.id - b.id);

let news = ref(null);

// Function to update news based on locale
const updateNews = () => {
  if (locale.value === "en") {
    news.value = data_en.default;
    news.value.forEach((item) => {
      // Parse English date format (e.g., "May 2023")
      const [month, year] = item.new_time.split(' ');
      const monthMap = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
        'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
      };
      item.date = [parseInt(year), monthMap[month]];
    });
  } else {
    news.value = data.default;
    news.value.forEach((item) => {
      // Parse Chinese date format (e.g., "2022年11月")
      const [year, month] = item.new_time.replace('年', ' ').replace('月', '').split(' ');
      item.date = [parseInt(year), parseInt(month)];
    });
  }

  // Sort by year and month in descending order
  news.value.sort((a, b) => {
    if (a.date[0] === b.date[0]) {
      return b.date[1] - a.date[1];
    } else {
      return b.date[0] - a.date[0];
    }
  });
};

// Watch for locale changes
watch(() => locale.value, () => {
  updateNews();
});

// Initial update
updateNews();
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
  /* Chrome Safari */
}

.my-element {
  animation-duration: 1.5s;
  /* don't forget to set a duration! */
}

strong {
  font-weight: 800;
  /* Increased from default 700 */
  color: #000000;
  /* Adding a slightly darker blue color for emphasis */
}

.arrow {
  animation: bounce 1s infinite;
  /*animation-duration: 3s;*/
}

@keyframes bounce {

  0%,
  100% {
    transform: translatex(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translatex(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.block {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  justify-content: center;
  z-index: 1;
}

.block a {
  z-index: 2;
  color: black;
}

.block::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(#00ccff, #d500f9);
  animation: rotate 4s linear infinite;
}

.block::after {
  content: "";
  position: absolute;
  inset: 1px;
  background: transparent;
  z-index: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
