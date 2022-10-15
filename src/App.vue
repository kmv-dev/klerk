<template>
  <div class="primary">
    <BaseHeader />
    <RouterView class="primary__content" />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style lang="scss">
.primary {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: $roboto;
  &__content {
    padding: 12px;
    flex-grow: 1;
  }
}
</style>
