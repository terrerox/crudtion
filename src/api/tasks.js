const _tasks = [
  { id: 1, title: 'Learn Vue', completed: true },
  { id: 2, title: 'Learn Vuex', completed: true },
  { id: 3, title: 'Learn Vue Router', completed: false },
  { id: 4, title: 'Learn Nuxt', completed: false },
  { id: 5, title: 'Learn Vue3', completed: false }
]

export default {
  getTasks (cb) {
    setTimeout(() => cb(_tasks), 100)
  }
}
