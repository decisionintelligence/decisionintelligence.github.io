<template>
  <q-page padding>
    <!-- content -->
    <div>
      <div class="tw-font-semibold tw-text-xl tw-m-3">
        你的文章
      </div>
      <div>
        <q-list v-if="article" bordered separator>
          <q-item v-for="(item,idx) in article" :key="idx" clickable>
            <q-item-section>
              <q-item-label>{{ item.title }}</q-item-label>
              <q-item-label caption>{{ item.date }}</q-item-label>
              {{ item.abstract }}
            </q-item-section>
            <q-item-section side>
              <div>
                <q-btn flat icon="search" @click="go_to_article(item.id)">
                  <q-tooltip anchor="top middle" :offset="[50,50]">查看文章</q-tooltip>
                </q-btn>
                <q-btn flat icon="delete" @click="delteArticle(item.id)">
                  <q-tooltip anchor="top middle" :offset="[50,50]">删除文章</q-tooltip>
                </q-btn>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="tw-font-semibold tw-text-xl tw-m-3">
        修改个人信息
      </div>
      <div>
<!--        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">-->
<!--          <q-input filled v-model="user" label="username" hint="请输入姓名"-->
<!--                   :rules="[value => value!== null && value !== '' ||'请输入用户名']"/>-->
<!--          <q-input filled v-model="password" label="password" hint="密码"-->
<!--                   :rules="[value => value!== null && value !== '' ||'请输入密码']"/>-->

<!--          <q-btn type="submit" color="primary" label="提交"/>-->
<!--          <q-btn type="reset" color="primary" flat label="重置"/>-->
<!--        </q-form>-->
        <div class="tw-p-5">
          V我 我直接给你改
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import {ref} from "vue"
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";

let user = ref(null)
let username = localStorage.getItem('username')
user.value = username
let article = ref([])
api.get('/article_list/' + user.value).then(d => {
  article.value = d['data']
  // console.log(article.value)
})
let password = ref(null)

// const onSubmit = () => {
//   let form = {
//     username: user.value,
//     password: password.value
//   }
//   api.post('/v1/user', form).then(d => {
//     console.log(d)
//   })
// }

// const onReset = () => {
//   user.value = ''
//   password.value = ''
// }

const $q = useQuasar();
const router = useRouter();
const go_to_article = (id) =>{
  let routeData = router.resolve({path: '/blog/' + id})
  window.open(routeData.href, '_blank')
}
const delteArticle = (id) => {
  api.delete('/delete_article/' + id).then(d => {
    // console.log(d)
    let response = d['data']
    if (response['status'] === 200) {
      $q.notify({
        message: '删除成功',
        color: 'positive',
        position: 'top',
        timeout: 1000
      })
    }else{
      $q.notify({
        message: '删除失败',
        color: 'negative',
        position: 'top',
        timeout: 1000
      })
    }
  })
}
</script>
