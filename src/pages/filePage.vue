<template>
  <q-page padding>


    <!-- list of folder -->
    <div>
      <div class="row  ">
        <q-btn icon="add" flat/>
      </div>
      <div >
        <q-list bordered class="tw-bg-transparent">
          <q-item clickable v-for="(folder,index) in files" :key="index" @click="goToFolder(folder.id)">
            <q-checkbox v-model="checked[index]" />
            <q-item-section avatar>
              <q-avatar>
                <q-icon name="folder" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ folder }}</q-item-label>
            </q-item-section>
            <q-btn flat icon="delete" />
          </q-item>
        </q-list>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import {mdiFolder} from '@quasar/extras/mdi-v6'
const files = ref(['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kk'])
// checked state of each item
const checked = ref([false, false, false, false, false, false, false, false, false, false, false])


</script>
