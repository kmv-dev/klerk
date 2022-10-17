<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/">Задание-1</RouterLink>
      <RouterLink to="/task-2">Задание-2</RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 10%);
  &__inner {
    @include container;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: black;
      padding: 12px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
