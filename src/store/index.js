import Vuex from './Vuex.js'
import Vue from 'vue'

import api from '@/api/tasks'

const store = new Vuex.Store({
  state: {
    tasks: [],
    selectedTask: {}
  },
  mutations: {
    setTasks (state, tasks) {
      state.tasks = tasks
    },
    addTask (state, task) {
      state.tasks.push(task)
    },
    deleteTask (state, index) {
      state.tasks.splice(index, 1)
    },
    setSelectTask (state, task) {
      state.selectedTask = task
    },
    editTask (state, data) {
      const index = state.tasks.findIndex(
        (task) => task.id === state.selectedTask.id
      )

      const task = Object.assign({}, state.tasks[index], data)

      Vue.set(state.tasks, index, task)
    }

  },
  actions: {
    addTask (context, payload) {
      context.commit('addTask', payload)
    },

    removeTask (context, index) {
      context.commit('deleteTask', index)
    },

    getTasks (context) {
      return new Promise(resolve => {
        api.getTasks((tasks) => {
          context.commit('setTasks', tasks)
          resolve()
        })
      })
    }
  },
  getters: {
    taskOnStore (state) {
      return state.tasks
    },

    selectedTask (state) {
      return state.selectedTask
    }
  }
})

export default store
