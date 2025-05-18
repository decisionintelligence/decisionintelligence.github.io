<template>
  <q-layout view="hHh lpR fff">
    <q-header
      class="tw-bg-white dark:tw-bg-black tw-h-14 tw-text-black tw-border-b-2 tw-border-gray-200 tw-flex tw-justify-center"
      height-hint="150">
      <q-tabs align="center" v-if="screen.width > 640">
        <router-link exact to="/index" class="tw-m-4 tw-text-gray-400 hover:tw-text-blue-500 tw-h-8 tw-text-center"
          active-class=" tw-border-b-2 active-text-color tw-border-blue-500  	">
          {{ $t("IndexPage") }}
        </router-link>
        <router-link to="/papers" class="tw-m-4 tw-text-gray-400 hover:tw-text-blue-500 tw-h-8 tw-text-center"
          active-class=" tw-border-b-2  active-text-color tw-border-blue-500 ">
          {{ $t("publicationPage") }}
        </router-link>
        <router-link to="/member" class="tw-m-4 tw-text-gray-400 hover:tw-text-blue-500 tw-h-8 tw-text-center"
          active-class=" tw-border-b-2 active-text-color tw-text-sky-600 tw-border-blue-500">
          {{ $t("MemberPage") }}
        </router-link>
        <router-link v-if="locale !== 'en'" to="/project"
          class="tw-m-4 tw-text-gray-400 hover:tw-text-blue-500 tw-h-8 tw-text-center"
          active-class=" tw-border-b-2 active-text-color tw-text-sky-600 tw-border-blue-500">
          {{ $t("ProjectPage") }}
        </router-link>
        <a href="https://decisionintelligence.github.io/OpenTS/" target="_blank"
          class="tw-m-4 tw-text-gray-400  hover:tw-text-blue-500   tw-w-14 tw-h-8 tw-text-center"
          active-class=" tw-border-b-2 active-text-color tw-text-sky-600 tw-border-blue-500">OpenTS
        </a>
        <router-link to="/recruit" class="tw-m-4 tw-text-gray-400 hover:tw-text-blue-500 tw-h-8 tw-text-center"
          active-class="tw-border-b-2 active-text-color tw-text-sky-600 tw-border-blue-500">
          {{ $t("JoinPage") }}
        </router-link>
      </q-tabs>
      <div v-else style="float: right">
        <q-fab flat external-label icon="menu" direction="down">
          <q-fab-action class="tw-bg-white" :label="$t('IndexPage')" to="/index" />
          <q-fab-action class="tw-bg-white" :label="$t('publicationPage')" to="/papers" />
          <q-fab-action class="tw-bg-white" :label="$t('MemberPage')" to="/member" />
          <q-fab-action v-if="locale !== 'en'" class="tw-bg-white" :label="$t('ProjectPage')" to="/project" />
          <q-fab-action class="tw-bg-white" label="OpenTS" href="https://decisionintelligence.github.io/OpenTS/"
            target="_blank" />
          <q-fab-action class="tw-bg-white" :label="$t('JoinPage')" to="/recruit" />
        </q-fab>
      </div>

      <div class="tw-float-right">
        <!-- <q-select  v-model="locale" :options="localeOptions" label="lang" dense borderless emit-value map-options
          options-dense style="min-width: 150px" /> -->
        <q-icon name="language" size="sm" class="tw-mt-3 tw-cursor-pointer tw-w-14">
          <q-popup-proxy ref="pop" class="tw-w-23 tw-mt-2">
            <div class="tw-p-1">
              <ul class="tw-space-y-2 tw-text-gray-500 tw-list-inside dark:tw-text-gray-400">
                <li class="tw-pl-3 tw-flex tw-items-center tw-cursor-pointer" :class="[
                  locale === 'en' ? 'active-text-color tw-underline' : '',
                ]" @click="hangleClick('en')">
                  English
                </li>
                <li class="tw-pl-3 tw-flex tw-items-center tw-cursor-pointer" @click="hangleClick('zh-CN')" :class="[
                  locale === 'zh-CN' ? 'active-text-color tw-underline' : '',
                ]">
                  简体中文
                </li>
              </ul>
            </div>
          </q-popup-proxy>
        </q-icon>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="background-color: #fafafa" class="tw-h-14 tw-text-black tw-border-gray-200">
      <div style="background-color: #fafafa" class="tw-flex tw-justify-center tw-items-center tw-w-full">
        <div class="tw-grid tw-w-full tw-pt-5 tw-mt-auto md:tw-grid-cols-4 tw-gap-4 tw-place-items-center">
          <div>
            <a href="https://extremetracking.com/open?login=decision" target="_blank">
              <img src="icons/tracker.gif" style="height: 50px; width: 50px">
            </a>
          </div>
          <div>
            <span class="active-text-color">
              {{ $t("address") }} </span>：{{ $t("r93") }}
          </div>
          <div>
            <span class="active-text-color">
              {{ $t("email") }} </span>：byang[at]dase[dot]ecnu.edu[dot]cn
          </div>
          <div>
            <div class="tw-flex tw-place-items-center">
              <span class="active-text-color">
                {{ $t("wechat") }}
              </span>
              <img style="height: 100px; width: 100px" :src="qr" />
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>
<script setup>
import { useQuasar } from "quasar";
import qr from "../assets/img/qr.png";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const { t } = useI18n();
const $q = useQuasar();
let screen = $q.screen;
const { locale } = useI18n({ useScope: "global" });
// locale.value = "en";
// locale.value = "zh-CN";
// Set initial locale based on browser language
const browserLang = (navigator.language || navigator.browserLanguage).toLowerCase();
if (browserLang.startsWith('zh')) {
  locale.value = 'zh-CN';
} else {
  locale.value = 'en';
}

const localeOptions = ref([
  { value: "en-US", label: "English" },
  { value: "zh-CN", label: "中文" },
]);
const pop = ref("pop");

const hangleClick = (val) => {
  locale.value = val;
  pop.value.hide();
};
</script>
<style>
.active-text-color {
  color: #3370ff !important;
}
</style>
