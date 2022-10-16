<template>
  <div class="main">
    <input class="main__input" type="checkbox" @click="allowEmpty($event)">
    <span>allowEmpty={{parameter}}</span>
    <span class="main__count">Total count = {{ getCount }}</span>
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
      getRubrics: 'getRubrics',
      getCount: 'getCount'
    })
  },
  methods: {
    ...mapActions({
      handleRubrics: 'fetchRubrics',
      clearCount: 'clearCount'
    }),
    fetchRubrics () {
      const checkboxes = document.querySelectorAll('.checkbox')
      this.clearCount()
      this.handleRubrics(this.parameter)
      checkboxes.forEach(el => {
        el.checked = false
      })
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

<style lang="scss" scoped>
.main {
  &__input {
    margin-right: 5px;
  }
  &__count {
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>
