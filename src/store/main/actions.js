export default {
  fetchRubrics ({ commit }, params) {
    fetch(`https://www.klerk.ru/yindex.php/v3/event/rubrics?allowEmpty=${params}`)
      .then(response => response.json())
      .then(data => {
        commit('setRubrics', data)
      })
  }
}
