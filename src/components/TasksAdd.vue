<template lang="pug">
form
  input(type="text" v-model="title" placeholder="Edit task")

form(@submit.prevent="addTask(task)")
    input(type="text" v-model="task" placeholder="Insert task")
    input(type="submit" value="Add task")
</template>

<script>
import store from '@/store/index'
export default {
  data () {
    return {
      task: ''
    }
  },

  methods: {
    addTask (task) {
      if (!task) { return }
      store.dispatch('addTask', {
        title: task,
        completed: true
      })
        .catch(error => alert(error))
      this.task = ''
    }
  },

  computed: {
    title: {
      get () {
        return store.getters.selectedTask.title
      },
      set (value) {
        store.commit('editTask', { title: value })
      }
    }
  }
}
</script>

<style scoped>

</style>
