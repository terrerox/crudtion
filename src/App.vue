<template lang="pug">
cr-tasks-add
cr-tasks-list
</template>

<script>
import CrTasksList from '@/components/TasksList'
import CrTasksAdd from '@/components/TasksAdd'

export default {
  name: 'App',
  components: {
    CrTasksList,
    CrTasksAdd
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#app > * {
  flex-basis: 44%;
}

#app div:last-of-type {
  flex-basis: 100%;
}
</style>
