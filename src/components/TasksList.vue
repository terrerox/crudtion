<template lang="pug">
ul(v-for="(task, $index) in taskOnStore")
  li(@click="selectTask(task)")
  | {{ task.title }} - {{ task.completed }}
  button(@click="removeTask($index)") X
</template>

<script>
import store from '@/store/index'

export default {
  name: 'TasksList',

  async created () {
    try {
      await store.dispatch('getTasks')
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    removeTask (index) {
      store.dispatch('removeTask', index)
    },
    selectTask (task) {
      store.commit('setSelectTask', task)
    }
  },

  computed: {
    taskOnStore () {
      return store.getters.taskOnStore
    }
  }
}
</script>
