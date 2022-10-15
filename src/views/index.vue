<template>
  <div class="main">
    <input class="main__input" type="checkbox" @click="allowEmpty($event)">
    <span>allowEmpty={{parameter}}</span>
    <div class="tree">
      <ul class="tree-list">
        <TreeRubrics :nodes="getRubrics"></TreeRubrics>
      </ul>
  </div>
  </div>
</template>

<script>
import TreeRubrics from '@/components/TreeRubrics/index.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    TreeRubrics
  },
  data () {
    return {
      parameter: 0
    }
  },
  mounted () {
    this.fetchRubrics()
  },
  computed: {
    ...mapGetters({
      getRubrics: 'getRubrics'
    })
  },
  methods: {
    ...mapActions({
      rubrics: 'fetchRubrics'
    }),
    fetchRubrics () {
      this.rubrics(this.parameter)
    },
    allowEmpty (e) {
      if (e.target.checked) {
        this.parameter = 1
        this.fetchRubrics()
      } else {
        this.parameter = 0
        this.fetchRubrics()
      }
    }
  }
}
</script>

<style>
.main__input {
  margin-right: 5px;
}
</style>
