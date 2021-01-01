import { reactive, computed } from 'vue'

class Store {
  constructor (optionsObject) {
    // return a rective object
    this.state = reactive(optionsObject.state)
    this.mutations = optionsObject.mutations
    this.actions = optionsObject.actions

    // getters
    if (optionsObject.getters) {
      this.getters = {}
      const { getters } = optionsObject
      for (const [getterName, getterFunction] of Object.entries(getters)) {
        Object.defineProperty(this.getters, getterName, {
          get: () => computed(() => getterFunction(this.state)).value
        })
      }
    }
  }

  commit (mutationName, payload) {
    const mutation = this.mutations[mutationName]
    if (!mutation) {
      throw Error(`${mutationName} doesn´t exist`)
    }
    mutation(this.state, payload)
  }

  dispatch (actionName, payload) {
    const action = this.actions[actionName]
    if (!action || !action.then) {
      return Promise.resolve(action(this, payload)) // this = context
    }
  }
}

const Vuex = {
  Store
}

export default Vuex
