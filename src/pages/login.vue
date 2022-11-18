<template>
  <div class="absolute-center tw-w-full">
    <q-card class="tw-w-11/12 md:tw-w-1/2 tw-m-auto tw-h-96 tw-p-4 tw-bg-gray-100 tw-rounded-lg">
      <q-card-section>
        <div class="tw-text-2xl tw-font-bold tw-text-gray-700 tw-mb-4">登录</div>
        <q-form @submit="onSubmit" class="tw-w-full">
          <q-input
            v-model="username"
            label="用户名"
            filled
            class="tw-mb-4"
            lazy-rules
            :rules="[val => val && val.length > 0 || '用户名不能为空']"
          />
          <q-input
            v-model="password"
            label="密码"
            filled
            type="password"
            class="tw-mb-4"
            lazy-rules
            :rules="[val => val && val.length > 0 || '密码不能为空']"
          />
          <q-btn
            type="submit"
            color="primary"
            label="登录"
            class="tw-w-full"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </div>

</template>

<script>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  name: 'LoginPage',

  setup(){

    onMounted(()=>{
      if (localStorage.getItem('access_token')){
        api.get('/v1/hello').then(res=>{
          if (res.status === 200){
            router.push('/space')
          }
        })
        }
    })

    let username = ref(null)
    let password = ref(null)
    const router = useRouter()
    const $q = useQuasar();
    const onSubmit = () => {
      let form = {
        username: username.value,
        password: password.value
      }
      // convert form to formdata
      let formData = new FormData()
      for (let key in form) {
        formData.append(key, form[key])
      }
      api.post('/login',formData,{
        headers: {
          'Content-Type': 'application/form-data'
        }

      }).then(res => {
        if (res.status === 200) {
          let access_token = res.data.access_token
          let token_type = res.data.token_type
          localStorage.setItem('access_token',access_token)
          localStorage.setItem('token_type',token_type)
          router.push('/space')
        }
      }).catch(err=>{
        $q.notify({
          message: "login failed",
          color: 'negative',
          position: 'top',
          timeout: 2000
        })
      })
    }


    return {
      username,
      password,
      onSubmit
    }
  }
}
</script>
