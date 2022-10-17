<template>
  <div
    v-for="node in nodes"
    :key="node.id"
    :style="{'margin-left': `${depth * 40}px`}"
    class="node"
  >
    <button
      v-if="node.children?.length"
      class="node__button"
      :class="isExpanded(node) ? 'icon-minus' : 'icon-sub_right'"
      :style="`color: ${isExpanded(node) ? 'green' : 'black'}`"
      @click="nodeClicked(node, $event)">
    </button>
    <input class="checkbox" type="checkbox" :value="node.count" @change="change($event)">
    <a :href="`https://www.klerk.ru${node.url}`" target="_blank">{{node.title}}</a> -
    <span>{{ node.count }}</span>
    <TreeRubrics
      v-if="isExpanded(node) && node.children"
      :nodes="node.children"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TreeRubrics',
  props: {
    nodes: Array,
    depth: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      expanded: []
    }
  },
  methods: {
    ...mapActions({
      addCountToStore: 'addCount',
      deleteCountStore: 'deleteCount'
    }),
    isExpanded (node) {
      return this.expanded.indexOf(node) !== -1
    },
    nodeClicked (node) {
      if (!this.isExpanded(node)) {
        this.expanded.push(node)
      } else {
        this.expanded.splice(this.expanded.indexOf(node))
      }
    },
    change (e) {
      if (e.target.checked) {
        this.addCountToStore(e.target.value)
      } else {
        this.deleteCountStore(e.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.node {
  font-size: 16px;
  &__button {
    padding: 2px;
    font-size: 20px;
  }
}
.checkbox {
  margin-right: 5px;
}

</style>
