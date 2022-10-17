export default {
  setRubrics (state, data) {
    state.rubrics = data
  },
  setAddCount (state, count) {
    state.count.push(count)
  },
  setDeleteCount (state, count) {
    const thisIndex = state.count.indexOf(count)
    if (thisIndex !== -1) {
      state.count.splice(thisIndex, 1)
    }
  },
  setClearCount (state) {
    state.count = []
  }
}
