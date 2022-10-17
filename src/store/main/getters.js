export default {
  getRubrics: (state) => state.rubrics,
  getCount: (state) => state.count.reduce((acc, item) => +acc + +item, 0)
}
